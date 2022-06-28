### vue cli 설치하기
$ npm intall -g @vue/cli
$ vue --version

### create vue project
$ vue create vue-todo
$ cd vue-todo
$ npm run serve

### 프로젝트 생성후 
vue + tab으로 기본 세팅
컴포넌트안에 컴포넌트들을 생성
App.vue에 컴포넌트들을 등록

### index.html 설정
- 뷰 포트 추가
- favicon 생성 후 추가  (https://fontawesome.com/icons)
- awesome icon link추가
- 구글 폰트 추가
 
### todo header 

### todo input
- index.html 다른데에 세팅해서 오래걸림.. fontawsome은 개인 link로
- 다른 plus 이미지로 해볼려했으나, 이미 다운이 안됨. 아마 유료인듯.

### todo list
- created : 인스턴스가 생성되자 마자 호출됨
- v-for 
- method에 인자 포함하여 넘기기 (delete 할때)
- splice(index1, index2) 메소드
- JSON.stringify(obj) 과 그냥 obj로 저장할대의 차이점. obj은 그냥 [Object]로 콘솔에 보여버럼.
- typeof
- JSON.parse()
- v-bind:class 기존 html에 동적인 css부여 가능.