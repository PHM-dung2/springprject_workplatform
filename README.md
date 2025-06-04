<p align="center">
  <img src="https://github.com/user-attachments/assets/5199e5b5-0a1e-496b-ae98-7fb998d3a851" width="500" height="150" />
</p>

<h1 align="center">실시간 문서 결재 기반 사내 협업 플랫폼</h1>

<br/>

## 목차

1. [프로젝트 시연 및 자료](#%EF%B8%8F-프로젝트-시연-및-자료)
2. [프로젝트 소개](#-프로젝트-소개)
3. [개발기간](#-개발기간)
4. [개발자 소개](#%EF%B8%8F-개발자-소개)
5. [주요 기능](#-주요-기능)
6. [개발 환경](#-개발-환경)
7. [기술 스택](#-기술-스택)
8. [API 및 라이브러리](#%EF%B8%8F-api-및-라이브러리)
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
  <img src="https://github.com/user-attachments/assets/634caa42-633f-44f4-a1ec-88ae62ba240c" />
</p>

 **사내 메신저, 전자 결재, 익명 게시판 기능을 통합한 협업 플랫폼**입니다.
 <br/><br/>
 최근 기업 내 커뮤니케이션 도구가 과도하게 분산되면서, 오히려 협업 효율이 저하되는 문제가 발생하고 있습니다. 
 <br/><br/>
 이를 해결하기 위해, **메신저, 결재, 자유로운 소통 창구를 하나의 플랫폼에 통합**하여 
 <br/><br/>
 **직원 간 원활한 커뮤니케이션과 효율적인 결재 시스템**을 구현하고자 했습니다.
 <br/><br/>
 본 그룹웨어 시스템은 현재 **사내 전용 서버에서 구동중**이지만, 향후 필요에 따라 **SaaS** 모델로 외부 기업에 서비스 제공하거나, 
 <br/><br/>
 **PaaS** 환경에서 **자동 배포 및 확장성**을 염두에 두고 설계했습니다.
 
<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## ⏱ 개발기간


- 2025.03.04 ~ 2024.03.31(28일)
<br/><br/>
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


💡 박희만 : **조장, 공통 레이아웃 · 컴포넌트 배포, 보고서 결재 기능, 해시 암호화 함수 구현**
<br/><br/>
💡 김도하 : **사내 메신저 기능, 채팅 알림 기능(웹소켓)**, 파일 업로드 및 다운로드 구현, 캔바 담당
<br/><br/>
💡 서진석 : **익명 게시판 기능**, 좋아요 기능 구현
<br/><br/>
💡 김리원 : **인사관리 권한부여**, 사원 로그인 기능, **GIT 담당**

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## 📌 주요 기능


![Image](https://github.com/user-attachments/assets/67cef6c8-95ee-417b-8384-2c7f99c8e57c)


- **보고서 결재 및 실시간 알림**
  - 실무 보고서 양식을 반영하여 누구나 쉽게 작성 가능
  - 결재자는 서명란에서 선택, 전자 서명 적용
  - 웹소켓을 통해 다음 결재자에게 실시간 알림 및 링크 전송

<br/><br/>

![결재](https://github.com/user-attachments/assets/ba054334-2c83-4a9c-b60d-8bffc21a6917)
![pdf 미리보기](https://github.com/user-attachments/assets/9d8f5288-e43b-4fd7-8fab-949e3d8c0e62)


- **내가 쓴 보고서 목록 및 결재 목록**
  - 목록과 상세보기를 동시에 확인할 수 있어, 페이지 전환 없이 빠르게 내용을 조회
  - PDF 미리보기 기능을 통해 저장 전 내용을 직관적으로 확인 가능

<br/><br/>

![메신저](https://github.com/user-attachments/assets/43d69ce7-0cae-4c5d-8124-0003b214128a)
    
- **사내 메신저**
  - 사내 조직도에 따라 부서별 사원 목록이 자동으로 구성되어, 별도의 설정 없이도 실시간 메신저 사용이 가능
  - 부서 간 또는 개인 간의 대화뿐만 아니라, 파일 전송 기능을 통해 문서 공유도 손쉽게 할 수 있어 협업 효율이 크게 향상

<br/><br/>

![사내 게시판](https://github.com/user-attachments/assets/313526d4-62cc-424b-924b-27fca954bdae)
 
- **익명 사내 게시판**
  - 익명 기반 게시판 기능을 제공하여 **자유로운 사내 소통 유도**
  - 메신저/결재 기능 외 **비공식 소통 채널**로 활용 가능
  - 팀 간 갈등 해소, 건의사항 공유, 잡담 공간 등 다양한 용도로 활용 가능
 
<br/><br/>

![인사](https://github.com/user-attachments/assets/acb6789b-fee5-4b0f-a38e-c9ea6dbfc381)

- **인사과 전용 사원 관리 기능**
  - **인사과 계정으로 로그인**한 사용자만 접근 가능한 **사원 관리 전용 탭**을 제공
  - 사원 등록 / 전체 사원 조회 기능 제공
  - 역할 기반 권한 제어를 통해 정보 접근 제한 및 보안 강화


<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## 💻 개발 환경


- **Version** : <img src="https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java 17" />&nbsp;
  
- **IDE** : <img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white" alt="IntelliJ IDEA" />&nbsp;
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VSCode" />&nbsp;

- **BackEnd** : <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />&nbsp;

  
- **FrontEnd** :  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />&nbsp;
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />&nbsp;


  
- **협업도구** : <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">&nbsp;


<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>

## ⚒ 기술 스택


- **DataBase** : <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">&nbsp;
  
- **server** : <img src="https://img.shields.io/badge/Apache%20Tomcat-10.1-FFF3C2?style=for-the-badge&logo=apachetomcat&logoColor=black" />


- **기획서 작성, 일정관리** : <img src="https://img.shields.io/badge/Excel-217346.svg?style=for-the-badge&logo=microsoft-excel&logoColor=white" alt="Microsoft Excel" /> 

<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>
<br/>
 
## ✒️ API 및 라이브러리


- **API** : <img src="https://img.shields.io/badge/RESTfulAPI-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white" alt="RESTful API" />

- **라이브러리** : <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black" alt="React" />&nbsp;
<img src="https://img.shields.io/badge/Lombok-EA3324.svg?style=for-the-badge&logo=java&logoColor=white" alt="Lombok" />&nbsp;
<img src="https://img.shields.io/badge/PageHelper-MyBatis%20Paging-4DB33D?style=for-the-badge&logo=databricks&logoColor=white" alt="PageHelper" />&nbsp;

- [[ **RESTful API 명세서** ]](https://docs.google.com/spreadsheets/d/1Vjxi6abfdfZT45zBau6aUj2rbkFgqRkEtl6hgrgFpzI/edit?gid=104803491#gid=104803491)

<br/>
<div align="right">
  
  <a href="#목차"> 목차로 </a>
  
</div>
