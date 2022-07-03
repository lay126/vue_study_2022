<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생한 이벤트 명="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  // >>> TodoList.vue에서 들고 옴. 
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    // TodoInput.vue에서 추가했을때 연결되어 실행 될 이벤트 
    addOneItem: function(todoItem) {
      var obj = {
        completed: false,
        item: todoItem
      }
      localStorage.setItem(todoItem, JSON.stringify(obj));

      // 바로 새로고침되게 설정
      this.todoItems.push(obj);
    }, 
    removeOneItem: function(todoItem, index) {
      console.log(todoItem, index);
      // 오브젝트(todoItem)이 아닌 특정 문자열에 접근하여 지우도록 수정함.
      localStorage.removeItem(todoItem.item); // 로컬 스토리지에서 지우기 
      this.todoItems.splice(index, 1); // 화면에서 지우기
    },
    toggleOneItem: function(todoItem, index) {
      // // 화면에서 변경 (상태 변경)
      // todoItem.completed = !todoItem.completed
      // // 로컬 스토리지에 반영
      // localStorage.removeItem(todoItem.item);
      // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));

      // 이렇게 내린 데이터를 다시 올리고 그걸 받아서 변경하는것은 (안티패턴.) 별로 좋지 않음. 내용을 받아서, 현재 컴포넌트의 데이터를 수정할 것.
      // 위에 원래 코드는 보면 받아온 데이터를 수정하여, 현재 위치의 todoItem data에 다시 반영한다.
      // 이벤트 버스를 올리고, props를 내리면서 컴포넌트 간의 경계를 명확히 한다.
      this.todoItems[index].completed = !this.todoItems[index].completed
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function() { // 인스턴스가 생성되자마자 호출되는 메소드
    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++ ){
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  // <<<
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
