import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++ ){ //반복문은 let으로 사용
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store( {
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) { 
            const obj = { // var에서 변경
              completed: false,
              item: todoItem
            }
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            console.log(payload.todoItem, payload.index);
            localStorage.removeItem(payload.todoItem.item); // 로컬 스토리지에서 지우기 
            state.todoItems.splice(payload.index, 1); // 화면에서 지우기
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !this.todoItems[payload.index].completed
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    },
    
});
