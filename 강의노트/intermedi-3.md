## ES6
- const & let
- Arrow function
- Enhance object literals
- Modules

## ES6
- ECMAScript2015 (이크마 스크립트)
- 최신 프론트엔드 프레임워크에서 권고하는 언어 형식
- ES5보다 문법이 간결해지면서 익숙해지면 코딩이 훨씬 편해진다

### Babel 
- ES6는 모든 브라우저에서 지원하지않으므로, Babel을 사용하여 transpiling을 하는 것을 권로
- (transpiling : ES5 문법으로 빌드 하는 것)
  
- https://babeljs.io/
- var sum = () => {return 10 + 20};


## const & let - 새로운 변수 선언 양식
- var 에 추가하여 const와 let을 사용
- 기존의 js의 애매모호한 것들 형, 값할당, 마음대로 쓸수 있음을 제한하는 역할.

- 블록단외 {}로 변수의 범휘가 제한되었음.
  
- const : 상수. 한번 선어한 값에 대해서 변경 할 수 없음
- let : 한번 선언한 값에 대해서 다시 선언 할 수 없음.

- 기존 ES5의 특징
  1. 모든 곳에 대해서 스코프가 설정됨. for문 안의 변수를 밖에서 쓸수 도 있음.
  2. Hoisting (?) 끌어올리다. 함수와 변수가 가장 상단에 있는 것처럼 인식되어진다.
   코드의 위치와 상관 없이, 함수 선언과 변수를 위한 메모리 코드를 가장 '먼저' 확보하고 시작한다.
   모두 선언한 후, 할당과 연산을 한다

- 대응되는 ES6의 특징
  1. {} 단위로 변수의 범위 제한.
   for문 안에서 선언한 변수를 더이상 scope밖에서 접근 할 수 없음.
  2. 배열이나 객체를 const 로 선언할 경우, 그 내부를 변경 할 수 있다. 
   배열에 push등으로 요소를 넣었다가 빼는 방식으로 사용.
   문자열로 선언된 const는 변경 할 수 없지만, 객체나 배열은 메모리는 잡히지만, 값이 변하는것에 대해서는 제한 하지 않음.
  3. let은 재선언 불가.
   let은 scope를 구별해서 선언 된다. 

- todolist를 const와 let으로 변경하기
- for문에서는 let을 사용해야한다


## Arrow function
- 함수를 정의할때, function 키워드를 사용하지 않고, => 를 사용한다.
- 콜백 함수의 문법을 간결화 해 준다.

arr.forEach(value => console.log(value));

var sum = (a,b) => {
    return a + b;
}

- todo앱에 적용할게 없음 ㅠㅠ
var multi = () => {
  return 1 * 2; 
};

## Enhance object literals (향상된 객체 리터럴)
- 객체의 속성을 메서드로 사용할때, funcion을 생략하고 예약어로 사용 할 수 있다.
- ㅁㅁ : function() 을 쓰지 않고도, ㅁㅁ() 만으로도 함수로 사용 가능.

// ES5
var dic = {
    lookup: function() {
        console.log("found...")
    }
}

// ES6
var dic2 = {
    lookup() {
        console.log("found!!!")
    }
}


## Enhance object literals 속성
- 객체의 속성명이 값 명과 동일 할때 축약이 가능.
var fig = 10;
var dic = {
    // fig: fig,
    fig
};


## Modules
- import와 export의 사용 
- ES5에서는 모듈화 기능이 없었지만, ES6에서부터는 js언어 자체에서 모듈화를 지원한다. (라이브러리 -> 언어 차원으로 지원 확대)
- AMD (자바 스크립트 모듈 로더 라이브러리)
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징.
  
- 아래와 같이 우리는 계속 쓰고 있었다
  이거쓰면, 이미 ./components/TodoHeader.vue의 모든 내용을 들고와서 모듈처럼 사용.
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'

- default export
- default는 한개의 파일에서 한개밖에 되지 않음.