// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'

// Vue.use(Vuex)

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1)
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo({ commit }, index) {
      commit('REMOVE_TODO', index)
    },
  },
  getters: {
    allTodos: state => state.todos,
  },
})

export default store
