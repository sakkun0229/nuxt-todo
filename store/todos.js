import Vuex from 'vuex'
import { db } from '@/plugins/firebase'

export const state = () => ({
  list: []
})

export const mutations = {
  initFirebase(state, todo) {
    state.list.unshift(todo)
  },
  add(state, todo) {
    state.list.unshift(todo)
  },
  remove(state, todo) {
    // console.log(state.list.indexOf(todo))
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  async loadFirebase(state, payload) {
    const snapshot = await db.collection('todos').get()
    snapshot.forEach(doc => {
      state.commit('initFirebase', { id: doc.id, ...doc.data() })
    })
    // db.collection('todos').onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     state.commit('initFirebase', { id: doc.id, ...doc.data() })
    //   })
    // })
  },
  add(state, text) {
    const newRef = db.collection('todos').doc()
    const newTodo = {
      text: text,
      done: false
    }
    newRef.set(newTodo)
    state.commit('add', { id: newRef.id, ...newTodo })
  },
  delete() {
    console.log('delete action')
  },
  toggle(state, todo) {
    console.log('toggle action')
    console.log(todo)
    state.commit('toggle', todo)
  }
}
