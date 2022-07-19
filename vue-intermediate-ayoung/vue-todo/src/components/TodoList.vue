<template>
  <div>
    <!-- list transition 추가. ul tag 자체는 제거하고 속성 tag를 ul로 변경 -->
    <transition-group name="list" tag="ul"> 
      <!-- props로 받아오는 데이터 명으로 변경 -->
      <!-- <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow"> -->
      <!-- <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow"> -->
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"/>
        <div v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</div>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash"/>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
// >>> App.vue 로 내용 이동.
  // data: function() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // props: ['propsdata'], //vuex
  // created: function() { // 인스턴스가 생성되자마자 호출되는 메소드
  //   if(localStorage.length > 0) {
  //     for(var i = 0; i < localStorage.length; i++ ){
  //       console.log(localStorage.key(i));
  //       console.log(localStorage.getItem(localStorage.key(i)));
  //       console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       // this.todoItems.push(localStorage.key(i));
  //       this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //     }
  //   }
  // },
// <<<
  methods: {
    removeTodo(todoItem, index) {
      // >>> App.vue로 내용을 모두 보내기
      // localStorage.removeItem(todoItem); // 로컬 스토리지에서 지우기 
      // this.todoItems.splice(index, 1); // 화면에서 지우기
      // <<<
      // 삭제 내용을 App.vue로 올리는 emit 이벤트발생 (removeItem)
      // this.$emit('보낼 이벤트', 인자, ...) (상위 컴포넌트의 v-on:**** 이거 )
      // this.$emit('removeItem', todoItem, index);
      
      // vuex
      // const obj = {
      //   todoItem, // todoItem: todoItem, 
      //   index // index: index
      // }
      this.$store.commit('removeOneItem', {todoItem, index})
    },
    toggleComplete(todoItem, index) {
      // >>> App.vue로 내용을 모두 보내기
      // // 화면에서 변경 (상태 변경)
      // todoItem.completed = !todoItem.completed
      // // 로컬 스토리지에 반영
      // localStorage.removeItem(todoItem.item);
      // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // <<<
      // this.$emit('toggleItem', todoItem, index);
      this.$store.commit('toggleOneItem', {todoItem, index})
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

/* 리스트에 대한 transition css */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
