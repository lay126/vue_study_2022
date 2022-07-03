<template>
  <div class="inputBox shadow">
    <!-- @keyup.enter == v-on:keyup.enter="addTodo" -->
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
          newTodoItem: ""
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodoItem !== '') {
            
              // >>> App.vue로 옮긴다
              // 저장하는 로직 > chorme > application > localstorage 에서 확인 
              // var obj = {
              //   completed: false,
              //   item: this.newTodoItem
              // }
              // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
              // <<<

              // this.$emit('이벤트 이름', 보낼 데이터, ...);
              this.$emit('addTodoItem', this.newTodoItem);

              // input box 초기화
              this.clearInput();
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>