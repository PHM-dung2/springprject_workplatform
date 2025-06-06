
/* jsx import */
import BasicSelect from './BasicSelect';
import CustomTextarea from './CustomTextarea';

export default function Report_Form( 
  { id, formData, formDataChange, isReadOnly, approval, handleApprovalChange, membersByRank, isUpdate } ){

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  let week = WEEKDAY[today.getDay()];
  let day = year+''+month+''+date;

  let rankList = ["대리", "과장", "차장", "부장"];

  const currentIndex = rankList.indexOf(formData.mrank); // 현재 직급의 인덱스 찾기
  if (currentIndex !== -1) {
    rankList = rankList.slice(currentIndex + 1); // 현재 직급 이후의 배열만 남기기
  }
  console.log( rankList.length )

  return(<>
    <div id={ id } style={{ backgroundColor: "white" }} >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }} >
      <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
        <h1 style={{ marginRight: 10 }} > 일일 업무 </h1>
        <h1> 보고서 </h1>
      </div>
      
      <form>
        <table border={2} style={{ borderCollapse: 'collapse' }} >
          <tbody >
            <tr>
              {
                !isReadOnly && !isUpdate ?
                <th width="100px" height="30px" >
                  { formData.mname }( { formData.mrank } )
                </th>
                : null
              }
              { 
                !isReadOnly && !isUpdate ?
                rankList.map((rank) => {
                  const selectedMno = approval.find((item) => item.rank === rank)?.mno || "";
                  return (
                    <td key={ rank } width="100px" >
                      <BasicSelect
                        rank={ rank }
                        members={ membersByRank[rank] || [] }
                        value={ selectedMno } // undefined 방지
                        handleChange={ handleApprovalChange(rank) }
                      />
                    </td>
                  );
                }) :
                approval.map( (rank) => {
                  return(
                    <th key={ rank.mname } width="100px" height="30px" >
                      { rank.mname }( { rank.mrank } )
                    </th>
                  )
                })
              }
            </tr>
            <tr style={{ height: '80px' }}>
              {
                !isReadOnly && !isUpdate ?
                (
                  [...Array(rankList.length + 1)].map((_, index) => (
                    <td key={index}></td> // 빈 td 생성 (기본 4개)
                  ))
                ) :
                approval.map((rank, index) => (
                  <td key={ `${rank.mno || 'empty'}-${index}` } >
                    {
                      rank.apsignature ? 
                      <img 
                        src={`http://localhost:8080/file/${rank.apsignature}`}
                        style={{ 
                          width: '95%', 
                          padding: 5
                        }} 
                        alt="서명 이미지" 
                        onFocus={(e) => e.target.style.border = 'none'} // focus 시 테두리 제거
                        onBlur={(e) => e.target.style.border = 'none'}
                      /> : null
                    }
                  </td>
                ))
              }
            </tr>
          </tbody>
        </table>
      </form>
    </div>

    <form>
      <table border={2} style={{ borderCollapse: 'collapse', width: '100%', height: '70px', marginBottom: '30px', fontSize: '15px' }} >
        <tbody>
          <tr>
            <th style={{ width: '20%', backgroundColor: '#eeeeee' }} > 작성일자 </th>
            <td style={{ width: '30%' }} > 
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', height: '100%', }} >
                <div> {year}년 {month}월 {date}일 </div>
                <div> ({week}) </div>  
              </div>
            </td>
            <th style={{ width: '20%', backgroundColor: '#eeeeee' }} > 작성자 </th>
            <td style={{ width: '30%', textAlign: 'center' }} > { formData.mname } </td>
          </tr>

          <tr>
            <th style={{ width: '20%', backgroundColor: '#eeeeee' }} > 소속 </th>
            <td style={{ width: '30%', textAlign: 'center' }} > { formData.mdepartment } </td>
            <th style={{ width: '20%', backgroundColor: '#eeeeee' }} > 직위 </th>
            <td style={{ width: '30%', textAlign: 'center' }} > { formData.mrank } </td>
          </tr>
        </tbody>
      </table>

      <table border={2} style={{ borderCollapse: 'collapse', width: '100%', height: '850px', fontSize: '15px' }}>
        <tbody>
          <tr>
            <th style={{ width: '15%', backgroundColor: '#eeeeee' }} rowSpan={3} > 금일<br/>실시사항 </th>
            <th style={{ width: '55%', height: '5%', backgroundColor: '#eeeeee' }} colSpan={2} > 금일 업무보고 </th>
            <th style={{ width: '30%', backgroundColor: '#eeeeee' }} > 비 고 </th>   
          </tr>

          <tr>
            <th style={{ width: '5%', backgroundColor: '#eeeeee' }} > 오전 </th>   
            <td style={{ width: '50%' }} > 
              <CustomTextarea name="rpam" value={formData.rpam} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>  
            <td style={{ width: '20%' }} > 
              <CustomTextarea name="rpamnote" value={formData.rpamnote} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>    
          </tr>

          <tr>
            <th style={{ width: '5%', backgroundColor: '#eeeeee' }} > 오후 </th> 
            <td style={{ width: '50%' }} > 
              <CustomTextarea name="rppm" value={formData.rppm} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>  
            <td style={{ width: '20%' }} > 
              <CustomTextarea name="rppmnote" value={formData.rppmnote} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>
          </tr>

          <tr style={{ height: '15%' }} >
            <th style={{ width: '15%', backgroundColor: '#eeeeee' }} > 미실시 내역 </th>
            <td colSpan={3} >
              <CustomTextarea name="rpunprocessed" value={formData.rpunprocessed} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>  
          </tr>

          <tr style={{ height: '15%' }} >
            <th style={{ width: '15%', backgroundColor: '#eeeeee' }} > 특이 사항 </th>
            <td colSpan={3} >
              <CustomTextarea name="rpsignificant" value={formData.rpsignificant} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>  
          </tr>

          <tr style={{ height: '15%' }} >
            <th style={{ width: '15%', backgroundColor: '#eeeeee' }} > 예정 사항 </th>
            <td colSpan={3} >
              <CustomTextarea name="rpexpected" value={formData.rpexpected} 
                onChange={formDataChange} isReadOnly={isReadOnly} />
            </td>  
          </tr>
        </tbody>
      </table>
    </form>
    </div>
  </>);
} // f end
