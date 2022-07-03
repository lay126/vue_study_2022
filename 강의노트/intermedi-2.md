## 3강. 현재 프로젝트의 개선 사항 (리펙토링)
1) 새로운 내용을 추가하여도 바로 새로고침되어 추가 되지 않는 문제 (추가 후 무조건 갱신을 해야함)   
2) Clear All로 지워도 local stroage에서는 다 지워져도 화면에서는 지워지지 않는 것   
-> 모두, 컴포넌트 간 상태 및 데이터 공유가 이루어 지지 않아서 발생하는 문제. (intermedi-2-img-1.jpeg)
-> 개선 방법 : 전체적인 컴포넌트에서 하나의 데이터만(App에 있는) 바라보도록 개선한다. 
   이 데이터를 emit, props로 만지기만 함. (intermedi-2-img-2.jpeg)

### component의 분료
- presenter component (표현만 하는)
- container component (App - 데이터 조작에 관련된, 비즈니스 조직이 담긴)

### 데이터 구조 개선 (TodoList)
1) TodoList.vue의 데이터와 created의 소스 부분을 App.vue로 모두 이동시킨다.
2) App.vue에서는 데이터를 v-bind > props로 내려주고
3) TodoList.vue에서는 데이터를 props 타입으로 받아온다
4) 이름 값만 잘 맞춰주면 완성

### 아이템 add하는 부분을 옮기기 (TodoInput)
1) App.vue의 TodoInput 태그에 v-on을 추가
2) TodoInput.vue에서 추가할때 발생하는 event를 받아서 처리하는 method를 App.vue에 추가한다
3) TodoInput.vue에서는 this.$emit으로 데이터를 올려보낸다.
4) App.vue에서는 리스트에 바로 반영하기 위해서 todoItems에 바로 넣어준다.

### 아이템 삭제하는 부분을 옮기기 (TodoList 남은 이벤트)
상동. App.vue에서 TodoList.vue에서 올라온 지우는 이벤트를 받아다가 처리.
1) TodoList의 removeTodo메소드 내부의 내용을 긁어서 App.vue에 새로 생성한 event로 옮긴다
2) TodoList의 removeTodo메소드 내부에서는 this.$emit('', ...)으로 App.vue로 이벤트를 연결하여 수행 내용을 넘긴다
3) App.vue의 v-on:하위 emit이벤트 명="현재위치 이벤트 명" 을 통해 올라온 이벤트를 받아 동작을 수행한다.

### 아이템 완료하는 부분을 옮기기 (TodoList 남은 이벤트)
상동.
* 컴포넌트 간의 경계를 명확히 하기 : 데이터를 왔다갔다 하면서 반영하고 수정하지 말고, 액션을 받아 현재 위치의 데이터를 수정할 것. (불필요한 데이터 전달 반영 줄이기)

### 아이템 전체 삭제하기 (TodoFooter)
상동.

### 리펙토링 정리
#### App.vue 
데이터와 모든 메소드 처리를 App componet로 집약. (데이터 조작 - 비지니스 로직)
기존 다른 Component에 흩어져 있던 데이터들이 모두 동일한 속성이며, 같은 데이터를 다루므로, 하나의 컴포넌트에 집약시킴. 
재사용성을 올리고, 중복성을 낮춤. 데이터의 추적이 유용함.(중앙 관리식)
-> Container Component

#### 다른 vue 파일들
데이터를 보여주기만 하는 viewer에 가까운 컴포넌트들. 여기서는 데이터의 변경을 요청만 한다.
-> presentation component



## 4강. 사용자 경험성 개선 (트랜지션, 애니메이션 추가)

### Modal 사용하기 - 아무런 값이 입력되지 않았을때, alert을 띄우기 
- 모달 컴포넌트 : https://kr.vuejs.org/v2/examples/modal.html
- 미세한 effect 등을 사용할 수 있음

- x-template : 템플릿을 모듈화 할때 사용한다.
- js 내부에 template로 지정된 곳에 정의된 템플릿이 실제로 들어가서 동작하는 형태.
- 재사용성을 위해 이를 컴포넌트로 선언하여 모듈화 한다.

##### 문제 발생 1
/Users/ayoung/Documents/GIT/vue/vue_study_2022/vue-intermediate-ayoung/vue-todo/src/components/common/Modal.vue
  1:1  error  Component name "Modal" should always be multi-word  vue/multi-word-component-names
-> CommonModal로 파일명, 사용부를 변경하여 사용함.

1) common/modal.vue 를 생성하고, <script/> 하위에 <template/> 내용을 붙여 넣는다. css도 다 들고 온다.
2) TodoInput.vue의 script에 modal을 import하고 component로 선언한다.
3) TodoInput.vue의 template에 모달 html을 추가한다.(실제 사용되는 부분)- 여기서 명명 에러 발생.
4) TodoInput.vue의 scripot에 showModal data를 추가한다.

#### * slot : 특정 component의 일부 ui를 재사용 할 수 있는 기능.
- 이미 정의된 template의 html tag는 바꾸기가 어렵지만, slot을 통해서 특정 부분을 재정의 할 수가 있다.
- 모달 내의 슬롯으로 지정된 부분은 상위 컴포넌트에서 호출하여 재정의 할 수 있다.

##### 문제 발생 2 (https://www.inflearn.com/questions/282278)
ERROR in [eslint] 
/Users/ayoung/Documents/GIT/vue/vue_study_2022/vue-intermediate-ayoung/vue-todo/src/components/TodoInput.vue
  13:11  error  `slot` attributes are deprecated  vue/no-deprecated-slot-attribute
-> https://vuejs.org/guide/components/slots.html#named-slots
-> <template v-slot:header/> 의 형태로 사용할것.
-> h3 태그를 사용할 수 없으므로, span tag로 변경하여 css가 적용되도록 함.

#### 퀴즈 : 똑같은 방법으로 사용할것.
   <template v-slot:header> 경고장을 드립니다. </template>
   <template v-slot:body> 당신은 빈 값을 입력하였습니다!!! </template>
   <template v-slot:footer> - 천사소녀 네티 - </template>

- footer의 버튼을 옮기기 : 
- slot:header 변경부에 버튼을 추가하고, css를 입힌다.
- 그리고 [* 축약형 : @click == v-on:click ] 을 사용하여 모달을 닫도록, showModal = false로 변경한다.


### Transitions : List에 Effect 넣기. (트랜지션, 애니메이션)
- https://kr.vuejs.org/v2/guide/transitions.html
- 구현 관점 : 간단한 effect를 바로바로 추가 할 수 있어서 편하다.

- 딱 이 두가지로 구성된다.
1) name : name에 지정한 transition class에 따라서 transition이 지정이 된다. (css와 바로 연관되는 속성)
2) tag : html의 tag를 의미. 이 해당 tag에 transition을 넣겠다는 의미.

#### list transitions
- https://kr.vuejs.org/v2/guide/transitions.html#%EB%A6%AC%EC%8A%A4%ED%8A%B8-%ED%8A%B8%EB%9E%9C%EC%A7%80%EC%85%98
- css를 긁어와 TodoList.vue의 css에 추가하기.
- template에서 transition-group을 지정하여 사용하기.

- 트랜지션 클래스 첨부 이미지 (intermedi-2-img-3.png)



## 강의 중간 정리
1) 뷰 cli를 이용한 프로젝트 구성 방법 : 당시엔 안정적 저번인 2.9버전을 사용하여 강의는 구현함. 나는 5버전을 사용.
2) 컴포넌트 기반 설계 방법 : container component, trasition component등 기능별 분리하여 설계하는 방법.
3) 컴포넌트 구조화 및 컴포넌트 통신 방법 : props, emit 등을 사용하여 리펙토링을 통해 구현.

4) ES6을 이용한 효율적이고 간결한 뷰 코딩 방법
5) Vuex를 이용한 상태관리의 이해 및 적용 방법