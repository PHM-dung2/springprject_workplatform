<p align="center">
  <img src="https://github.com/user-attachments/assets/5199e5b5-0a1e-496b-ae98-7fb998d3a851" width="500" height="150" />
</p>

<h1 align="center">실시간 문서 결재 기반 사내 메신저 그룹웨어</h1>

<br/>

## 목차

- [1. 프로젝트 시연 및 자료](#%EF%B8%8F-프로젝트-시연-및-자료)
- [2. 프로젝트 소개](#-프로젝트-소개)
- [3. 개발기간](#-개발기간)
- [4. 개발자 소개](#%EF%B8%8F-개발자-소개)
- [5. 주요 기능](#-주요-기능)
- [6. 개발 환경](#-개발-환경)
- [7. 기술 스택](#-기술-스택)
- [8. API 및 라이브러리](#%EF%B8%8F-api-및-라이브러리)
<br/>


## 🗂️ 프로젝트 시연 및 자료

<br/>

&nbsp;&nbsp; 🎬 [[ 프로젝트 시연영상 링크 ]](https://www.youtube.com/watch?v=ZNwyuOCJkPc)
<br/> <br/>

&nbsp;&nbsp; 📋 [[ 프로젝트 PPT ]](https://www.canva.com/design/DAGjSAxv8rQ/01Jq6Tg2-5dZUauaqq5vKA/edit?ui=eyJIIjp7IkEiOnRydWV9fQ)
<br/> <br/>

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## 👨‍🏫 프로젝트 소개

<p align="center">
  <img src="" />
</p>

 사내 메신저와 문서 결재, 사내 익명 게시판 기능이 결합된 그룹웨어입니다. 
 <br/><br/>
 업무시에 사용하는 플랫폼이 점차 증가함에 따라 **메신저와 결재, 소통 창구를 결합하여**
 <br/><br/>
 **직원 간의 원활한 소통과 효율적인 결재 시스템**을 구축하고자 했습니다. 
 <br/><br/>
 본 그룹웨어 시스템은 현재 사내 전용 서버에서 구동되지만,
 <br/><br/>
 요구에 따라 **SaaS** 모델로 외부 기업에 서비스 제공하거나, **PaaS** 환경에서 자동 배포 및 확장성을 염두에 두고 설계했습니다.
 
<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## ⏱ 개발기간


- 2025.03.04 ~ 2024.03.31(28일)
- [[ 개발 일정 링크 ]](https://docs.google.com/spreadsheets/d/1j31wi11cIKqj6tWJybmSksGnHso9XI9-XHC6YOSPvlk/edit?gid=1386834576#gid=1386834576)

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## 🙋‍♂️ 개발자 소개


<table height="180" >
  <tbody>
    <tr>
     <td align="center"><a href="https://github.com/PHM-dung2"><img src="https://github.com/user-attachments/assets/b344c279-be9a-4bef-87a5-90f29168b259" width="100"  alt=""/><br /><sub><b> 박희만 </b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/Kimdohaaa"><img src="https://github.com/user-attachments/assets/d62eedc2-6e26-4457-9858-49416fd7e9d7" width="100px;" alt="" /><br /><sub><b> 김도하 </b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/jeenimari"><img src="https://github.com/user-attachments/assets/772ed025-9627-43c8-ab5b-97ffd2367c62" width="100" alt=""/><br /><sub><b> 서진석 </b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/riwon-sys"><img src="https://github.com/user-attachments/assets/b47fa3b5-2532-4ce0-b6e8-92b152adf78d" width="100" alt=""/><br /><sub><b> 김리원 </b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>


💡 박희만 : **조장, 공통 레이아웃 · 컴포넌트 배포**, 보고서 결재 기능, **해시 암호화 함수 구현**
<br/><br/>
💡 김도하 : **사내 메신저 기능, 채팅 알림 기능(웹소켓)**, 파일 업로드 및 다운로드 구현, 캔바 담당
<br/><br/>
💡 서진석 : **익명 게시판 기능**, 좋아요 기능 구현
<br/><br/>
💡 김리원 : **인사관리 권한부여**, 사원 로그인 기능, GIT 담당

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## 📌 주요 기능

![Image](https://github.com/user-attachments/assets/fee241b6-8cdb-44fd-abbe-38868400e181)

- **사내 메신저 기능**
  - 평가 및 점수를 추가함으로써 프로젝트 선택 및 판단 가능

<br/><br/>
![Image](https://github.com/user-attachments/assets/42facaf5-ecff-40b4-8520-598e30b5d04d)
    
- **프로젝트 검색, 탐색, 매칭 추천**
  - 프로젝트 필터( 공고상태, 프론트엔드/백엔드 ) 검색
  - 프로젝트에 필요한 요구 기술스택 및 
  - 기업 평가와 기술스택 적합도에 따라 프로젝트 자동 매칭 

<br/><br/>
![Image](https://github.com/user-attachments/assets/a56a2d37-c82f-41c8-8110-76e0a8e6df84)
    
- **react 관리자 페이지에서 프로젝트 상태 확인**
  - 프로젝트 운영 흐름 관리
  - 관리자 전용 통합 제어 시스템
  - 데이터 기반 의사결정 지원

<br/><br/>
![Image](https://github.com/user-attachments/assets/bd68983d-cca7-4995-92e7-06f47c0c0e13)
 
- **회사와 개발자 각 로그인 기능 및 개발자 레벨과 랭킹 시각화**
  - 개발자 레벨과 랭킹을 통해 성장 동기부여
  - 기업의 고용시 직관적인 평가 수치 제공

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## 💻 개발 환경


- **Version** : Java 17.0
  
- **IDE** : <img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white" alt="IntelliJ IDEA" /> <img src="https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=androidstudio&logoColor=white" alt="Android Studio" />&nbsp;

- **BackEnd** : <img src="https://img.shields.io/badge/Java-007396.svg?style=for-the-badge&logo=java&logoColor=white" alt="Java" /> <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />&nbsp;
  
- **FrontEnd** :  <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />&nbsp;
  
- **협업도구** : <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## ⚒ 기술 스택


- **DataBase** : <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF.svg?style=for-the-badge&logo=amazonrds&logoColor=white" alt="Amazon RDS" />
&nbsp;
  
- **server** : 
<img src="https://img.shields.io/badge/Tomcat-10.1-F8DC75.svg?style=for-the-badge&logo=apachetomcat&logoColor=black" alt="Apache Tomcat" />&nbsp;
<img src="https://img.shields.io/badge/AWS%20EC2-FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS EC2" />&nbsp;

- **기획서 작성, 일정관리** : <img src="https://img.shields.io/badge/Excel-217346.svg?style=for-the-badge&logo=microsoft-excel&logoColor=white" alt="Microsoft Excel" /> 

<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>
<br/>
 
## ✒️ API 및 라이브러리


- **API** : <img src="https://img.shields.io/badge/RESTfulAPI-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white" alt="RESTful API" />

- **라이브러리** : <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black" alt="React" />&nbsp;
<img src="https://img.shields.io/badge/JJWT-ED8B00.svg?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JJWT" />&nbsp;
<img src="https://img.shields.io/badge/Lombok-EA3324.svg?style=for-the-badge&logo=java&logoColor=white" alt="Lombok" />&nbsp;

- [**RESTful API 명세서**]()

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>
