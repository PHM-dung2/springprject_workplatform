package work.model.mapper.member;

import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.scheduling.annotation.Scheduled;
import work.model.dto.member.MemberDto;

import java.util.List;
import java.util.Map;

@Mapper
public interface MemberMapper {

    // [1] 사원 등록
    @Insert("insert into member( mno,mname,mphone,memail,mrank,mprofile,mpwd )" + "values( #{mno} , #{mname} , #{mphone},#{memail} , #{mrank} , #{mprofile} , #{mpwd} )")
    public boolean signUp(MemberDto memberDto);

    // [2] 사원 로그인
    // @Insert("insert into member(mno,mpwd)" + "values( #{mno} , #{mpwd} )")
    // public boolean onLogIn(MemberDto memberDto);

    // 변경된 세션 처리된 [2] 사원 로그인
    // 로그인 세션 처리 기능 추가 -> 입력받은 자료를 확인 및 검증할 때는 SELECT 사용
    // @Select("select mno,mname,mphone,memail,mtype,mrank,mprofile from member where mno=#{mno} and mpwd=#{mpwd}")
    // public MemberDto onLogIn( MemberDto memberDto ); // MemberDto : select 결과가 있으면 memberDto, 없으면 null

    // [2-(1)] NEW 로그인 기능( 암화화 기능 ) | rw 25-03-21
    // 로그인시 입력받은 아이디로 암호화된 패스워드 반환
    @Select("select mpwd from member where mno = #{mno}")
    public String findPassword( int mno );
    // [2-(2)] NEW 로그인 기능( 암화화 기능 ) | rw 25-03-21
    // 로그인 비밀번호 검증 성공시 반활할 회원정보
    @Select("select mno,mname,mphone,memail,mtype,mrank,mprofile from member where mno=#{mno}")
    public MemberDto onLogIn( MemberDto memberDto ); // MemberDto : select 결과가 있으면 memberDto, 없으면 null


        // [3] 사원 로그아웃
    @Delete("delete from member where mno = #{mno}")
    public boolean logOut(int mno);

    // [4] 사원 전체 조회
    @SelectProvider( type = SqlBuilder.class, method = "buildGetUserByMrank" )
    public List<MemberDto> getAllMembers(@Param("mrank") String mrank, @Param("mno") Integer mno);

    class SqlBuilder{
        public static String buildGetUserByMrank( final String mrank, final Integer mno){
            return new SQL(){{
                SELECT("*");
                FROM("member");
                if ( mrank != null ){
                    WHERE("mrank = #{mrank}");
                }
                if( mno != null ){
                    WHERE("mno LIKE '" + (mno / 100000) + "%'");
                }
                WHERE("mtype = 0"); // 사원 기본 타입 설정 (기본값 : 0;재직자) | rw 25-03-21

                ORDER_BY("mno ASC");
            }}.toString();
        }
    }
    // ( #{mno} , #{mname} , #{mphone},#{memail} , #{mrank} , #{mprofile} , #{mpwd} )
    // [5] 사원 수정 | rw 25-03-26 생성 */
    @Update("""
        UPDATE member 
        SET 
          mpwd = #{mpwd}, 
          
          mphone = #{mphone}, 
          mtype =  #{mtype},
        mprofile = #{mprofile}
          
        WHERE mno = #{mno}
    """)
    public boolean updateMember(MemberDto memberDto);

    // [5]-(2) 기존 암호화 비밀번호 조회
    @Select("SELECT mpwd FROM member WHERE mno = #{mno}")
    public String getCurrentPassword(@Param("mno") int mno);

    // [5]-(3) 연락처 중복 검사
    @Select("SELECT COUNT(*) FROM member WHERE mphone = #{mphone} AND mno != #{mno}")
    public int checkPhoneDuplicate(@Param("mphone") String mphone, @Param("mno") int mno);

    // [5]-(4) 부서별 조회(shceduled)
    @Select("SELECT LEFT(mno, 1) partnum, count(*) count " +
            "FROM member GROUP BY partnum ORDER BY partnum ASC")
    public List<MemberDto> memberByPart();

    // [5]-(5) 직급별 조회(shceduled)
    @Select("SELECT mrank value, count(*) count FROM member GROUP BY mrank")
    public List<MemberDto> memberByRank();

    // [8] 사원 전체 조회 http://localhost:8080/workplatform/infoall | rw 25-03-28 생성
    @Select("select * from member")
    public List<MemberDto>infoAll();


    @Update("UPDATE member SET mname=#{mname}, mrank=#{mrank}, mphone=#{mphone}, "
            + "mtype=#{mtype}, mpwd=#{mpwd}, mprofile=#{profile} "
            + "WHERE mno=#{mno}")
    public boolean updateMemberInfo( MemberDto memberDto );
}


