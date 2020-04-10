import Vuex from 'vuex'
import { db } from '@/plugins/firebase'

export const state = () => ({
  list: [
    // { text: 'hogeeeee', done: false },
    // { text: 'fooooooo', done: false },
    // { text: 'qqqqqqqqq', done: true },
    // { text: 'yuyuyiyiuiy', done: false }
  ]
})

export const mutations = {
  initFirebase(state, todo) {
    state.list.push(todo)
  },
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
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
      state.commit('initFirebase', doc.data())
    })
  }
}
