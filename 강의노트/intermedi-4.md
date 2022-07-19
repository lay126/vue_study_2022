## Vuex
- 부모/자식 구조의 컴포넌트 간에 데이터 전달을 명확히 하기 위해서.
- 컴포넌트 수가 많아지면, 컴포넌트간 데이터 전달이 명시적이지 않고 어려워짐.

### vuex로 해결할수 있는 문제
1. mvc패턴에서 발생하는 문제
2. 컴포넌트 간 데이터 전달 명시
3. 여러개의 컴포넌트에서 같은 데이터를 수정할때 동기화 문제

### vuex 컨셉
- state : date - 컴포넌트간 공유하는 데이터. (this.$store.state.todoItems)
- getters : computed - 연산된 state 값 에 접근하는 방법.
  
- view : template - 데이터 표시 화면.
  
- mutations : method - state 값을 변경하는 이벤트. 메서드.
  - commit() : mutations을 동작시키는 메서드. (this.$store.commit(state, payload))
               인자를 통해, 값을 넘길 수 있다. 객체도 넘길 수 있음. (인자는 관행적으로 payload로 명시함)
- action : aysnc - method 비동기 처리 로직 메서드.

## vuex 구조
- 컴포넌트 components > 비동기 로직 (비동기 메소드. 데이터를 바꾸지 않음) > 동기 로직 (데이터를 실재로 바꾸는 부분) > 상태 state

## vuex 초기 세팅
- npm 설치 후
- components > store > store.js 를 생성한다



- https://wotres.tistory.com/entry/Vue-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%EB%B2%95-Cannot-read-property-use-of-undefined