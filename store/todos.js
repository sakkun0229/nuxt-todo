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
  delete(state, todo) {
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
  delete(state, todo) {
    const ref = db.collection('todos').doc(todo.id)
    ref.delete().then(() => {
      console.log('Document successfully deleted!')
    })
    state.commit('delete', todo)
  },
  toggle(state, todo) {
    const bl = !todo.done
    const ref = db.collection('todos').doc(todo.id)
    ref.update({
      done: bl
    })
    state.commit('toggle', todo)
  }
}
