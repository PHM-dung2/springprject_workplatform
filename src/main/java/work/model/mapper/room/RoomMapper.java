package work.model.mapper.room;

import org.apache.ibatis.annotations.*;
import work.model.dto.ChattingDto;
import work.model.dto.MessageDto.MessageDto;
import work.model.dto.member.MemberDto;
import work.model.dto.room.RoomDto;

import java.util.List;

@Mapper
public interface RoomMapper {

    // [1-1] 채팅방 등록
    @Insert("INSERT INTO room (rname, rtype, rlastdate, mno) VALUES (#{roomDto.rname}, #{roomDto.rtype} , NOW(), #{loginMno})")
    @Options(useGeneratedKeys = true, keyProperty = "roomDto.rno") // 생성된 rno 받아오기
    boolean write(@Param("roomDto") RoomDto roomDto, @Param("loginMno") int loginMno);

    // [1-2] 참여자 등록
    @Insert("INSERT INTO paritcipant (mno, rno) VALUES (#{mno}, #{rno})")
    boolean participantWrite(int mno, int rno);

    // [2] 회원별 채팅방 전체 조회
    @Select("select p.* , m.mname , r.* from paritcipant p join member m on p.mno = m.mno join room r on p.rno = r.rno where p.mno = #{loginMno} and r.rstate= true ORDER BY r.rno ASC")
    List<RoomDto> find(int loginMno);

    // [3] 채팅방 메세지 상세 조회
    @Select("""
            ( select ms.msno, ms.msg ,ms.msdate as msdate,p.pdate,r.rno, r.rname, r.rtype,  m.mname, m.mprofile, null fno,null fname, null flocation, null fdate               
                from message ms join paritcipant p on ms.pno = p.pno join room r on p.rno = r.rno join member m on p.mno = m.mno
                where r.rno = #{rno} )
            
            union all
            
            (select f.fno AS msno, null as content, f.fdate as msdate, p.pdate, r.rno, r.rname, r.rtype, m.mname ,m.mprofile, f.fno, f.fname, f.flocation, f.fdate                   
                from fileshare f join paritcipant p on f.pno = p.pno join room r on p.rno = r.rno join member m on p.mno = m.mno
                where r.rno = #{rno} )
            order by msdate ASC
            """)
    List<MessageDto> findAll(int rno);

    // [4] 채팅방 수정
    @Update("UPDATE room SET rname = #{roomDto.rname}, rlastdate = now() where rno = #{roomDto.rno}")
    boolean update(@Param("roomDto") RoomDto roomDto);

    // [5] 채팅방 나가기
    @Delete("delete from paritcipant where rno = #{rno} and mno = #{loginMno}")
    boolean delete(int rno, int loginMno);

    // [6] 기존 채팅방에 회원 추가
    @Insert("INSERT INTO paritcipant (mno, rno) VALUES (#{roomDto.mno} , {roomDto.rno}")
    boolean addMember(@Param("roomDto") RoomDto roomDto);


    // [8] 채팅방 정보 조회
    @Select("select * from room where rno = #{rno}")
    RoomDto findRoomInfo(int rno);
    // 테스트용 회원조회
    @Select("select * from member ")
    List<MemberDto> findMember();

    // 새로 들어온 회원이름 조회
    @Select("select mname from member where mno = #{mno}")
    String findMname(int mno);

    // 이미 채팅에 참여 중인 회원조회
    @Select("select mno from paritcipant where rno = #{rno}")
    List<MemberDto> findParticipation(int rno);
}
