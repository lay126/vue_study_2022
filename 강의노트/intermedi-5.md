## Helper
- mapState mapGetters mapMutations mapActions
- ..aa : 스프라이트 오퍼레이터 : 연산자들을 모두 자동으로 import 함


### mapState 
- vuex에 선언한 state속성을 뷰 컴포넌트에 더 쉽게 연결
- compute() { ..mapState['num']) }
- $store.state를 생략 가능

### mapGetters 
- vuex에 선언한 getters속성을 뷰 컴퍼넌트에 연결
- compute() { ..mapGetters['reverseString']) }

### mapMutations 
- vuex에 선언한 mutation 속성을 뷰 컴포넌트에 더 쉽게 연결
- vuex에 선언한 속성을 컴포넌트의 특정 메서드에 연결도 가능
- ..mapMutations( { popupMsg: 'clickbtn' })
- 인자를 따로 선언해 주지 않아도, 인자가 있을 경우, 암묵적으로 가져간다. 

### mapActions

## Helper 함수의 장점
- vue.js 권고 : 연산등의 긴 내용을 template에 두지 말고, script에서 모두 처리할것.
  template는 최대한 간결하고 알기 쉽게 사용한다
  
  
## 
