<template>
  <div class="inputBox shadow">
    <!-- @keyup.enter == v-on:keyup.enter="addTodo" -->
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus"></i>
    </span>

    <!-- modal사용 -->
    <!-- use the modal component, pass in the prop -->
    <!-- v-if의 값이 true가 되는 순간 보일것. -->
    <CommonModal v-if="showModal" @close="showModal = false"> 
      <!-- 여기에 새로 재정의 할 부분을 작성한다. 정의된 내용으로, modal에 slot:header로 지정된 부분의 내용이 변경된다. -->
      <!-- 사용 방법이 변경 되었다 -->
      <template v-slot:header> 
        <span class=".modal-header">경고장을 드립니다.</span> 
        <!-- 축약형 : @click == v-on:click -->
        <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"/> 
      </template>
      <template v-slot:body> 당신은 빈 값을 입력하였습니다!!! </template>
      <template v-slot:footer> - 천사소녀 네티 - </template>
    </CommonModal>

  </div>
</template>

<script>

// modal 을 사용하기 위한 추가
import CommonModal from './common/CommonModal.vue'

export default {
    data: function() {
        return {
          newTodoItem: "",
          showModal: false
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

            } else { // 여기에 빈 값일 경우, 모달을 띄우도록 설정하는 내용을 추가.
              this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
    // modal 사용을 위한 추가
    components: {
      'CommonModal': CommonModal
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
.closeModalBtn {
  color: #42b983;
}
</style>