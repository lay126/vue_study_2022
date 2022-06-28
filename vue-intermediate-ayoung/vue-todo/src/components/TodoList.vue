<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
            v-on:click="toggleComplete(todoItem)"/>
          <div v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</div>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fa-solid fa-trash"/>
          </span>
        </li>

      </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  created: function() { // 인스턴스가 생성되자마자 호출되는 메소드
    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++ ){
        console.log(localStorage.key(i));
        console.log(localStorage.getItem(localStorage.key(i)));
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // this.todoItems.push(localStorage.key(i));
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem); // 로컬 스토리지에서 지우기 
      this.todoItems.splice(index, 1); // 화면에서 지우기
    },
    toggleComplete: function(todoItem) {
      // 화면에서 변경 (상태 변경)
      todoItem.completed = !todoItem.completed
      // 로컬 스토리지에 반영
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
