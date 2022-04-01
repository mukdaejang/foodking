## 🍽 기획의도
![image](https://user-images.githubusercontent.com/60125497/161045894-e8ec52b0-a4e8-4bf2-a3cb-09906b895d41.png)

<br>

## ✨ 데모 사이트
https://mukdaejang-3b8e6.web.app/

<br>

## 📆 프로젝트 기간
2022.03.08 ~ 2022.03.31

<br>

## 👨‍💻 팀원
[김민성](https://gtihub.com/minsoftk) [김효식](https://github.com/h-sick) [원종빈](https://github.com/JJongBin) [조용우](https://github.com/ywc8851) 

<br>

## 📚 기술스택
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>

## 😥 개선 전
- tab focusing 불가능
- 프로필 이미지 상태값 새로고침 시 초기화되어 깜빡거림
- 프로필 아이콘 클릭 시 드롭다운 닫기 버튼 없음 , 개별 삭제 불가능
- 부적절한 로그아웃의 위치
- semantic tag 미사용

![image](https://user-images.githubusercontent.com/60125497/161046037-f7890369-822f-4bde-82bf-ac667a0cf339.png)

<br>

## 🤩 개선 후
- 키보드로 tab focusing 가능
- 새로고침 시 프로필 이미지 깜빡거리지 않음
- 프로필 아이콘 클릭 시 드롭다운 닫기 버튼 추가 , 개별 삭제 가능
- 로그아웃 위치 변경
- semantic tag를 사용한 semantic markup
- SEO 향상 

![image](https://user-images.githubusercontent.com/60125497/161055913-a3233888-3ad6-469f-974c-5dc88a8e29e3.png)

<br>

### 프로필 사진 깜빡임 문제
|👎 기존 망고플레이트|👍 먹대장|
|:---:|:---:|
|![헤더깜빡임](https://user-images.githubusercontent.com/60125497/161048868-bd08f086-67b7-4c15-8123-29dc652516a9.gif)|![헤더깜빡임해결](https://user-images.githubusercontent.com/60125497/161049711-0e522f2a-8825-4322-804a-2889562639b1.gif)|

<br>

### 드롭다운 닫기 버튼 ❌ & 개별 삭제 불가능 & 로그아웃 버튼
|👎 기존 망고플레이트|👍 먹대장|
|:---:|:---:|
|![image](https://user-images.githubusercontent.com/60125497/161050944-485a332c-7284-42bf-b0bf-70a1dcef67a3.png)|![image](https://user-images.githubusercontent.com/60125497/161051689-57d7e97e-1afd-4dee-8396-05b821d42a51.png)|

<br/>

### 스켈레톤 UI 적용
|👎 기존 망고플레이트|👍 먹대장|
|:---:|:---:|
|![망고플레이트_스켈레톤](https://user-images.githubusercontent.com/86653111/161181729-71509434-53e5-44d8-be77-34f4a501ada8.gif)|![먹대장_스켈레톤](https://user-images.githubusercontent.com/86653111/161181767-bd651369-e59e-461c-a588-667529c8f147.gif)
|

<br/>

### Tabable 접근성 문제 개선
|👎 기존 망고플레이트|👍 먹대장|
|:---:|:---:|
|![망고플레이트tab](https://user-images.githubusercontent.com/55948211/161093463-1eccdea1-8a62-429e-b0f6-95b7df17743f.gif)|![먹대장tab](https://user-images.githubusercontent.com/55948211/161093514-07f6f505-c837-439f-ac04-89b81a8d36b9.gif)|

<br/>

## 리팩토링

### 불필요한 렌더링 방지(React.memo)
|👎 이전 먹대장|👍 현재 먹대장|
|:---:|:---:|
|![memo적용전](https://user-images.githubusercontent.com/55948211/161093699-33a6b5ec-de82-4215-85ea-d1e98e163469.gif)|![memo적용](https://user-images.githubusercontent.com/55948211/161093682-1651f1a2-4e86-4279-b6d7-b45575d94bc2.gif)|


<br/>

### 렌더링 성능 개선(Lazy Loading(code Spliting), useCallback)
|👎 이전 먹대장|👍 현재 먹대장|
|:---:|:---:|
|![MainVSMatijipList](https://user-images.githubusercontent.com/55948211/161108421-cc4256cb-c708-48bb-9d37-8a4ff23a29df.png)|![MainVSMatijipList(after)](https://user-images.githubusercontent.com/55948211/161108738-7ba9a559-3ddb-4623-b2cb-4a2a4b32a7f0.png)|
|![MainVSMatijipList2](https://user-images.githubusercontent.com/55948211/161109144-369be2e3-15f9-42a3-87af-2a8ea9509890.png) | ![MainVSMatijipList2(after)](https://user-images.githubusercontent.com/55948211/161109118-ceb55aae-527d-4c17-a781-79449541d1d5.png)|






