export const state = () => ({
  list: [
    { text: 'hogeeeee', isDone: false },
    { text: 'fooooooo', isDone: false },
    { text: 'qqqqqqqqq', isDone: true },
    { text: 'yuyuyiyiuiy', isDone: false }
  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.isDone = !todo.isDone
  }
}
