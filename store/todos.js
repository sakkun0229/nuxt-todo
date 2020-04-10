export const state = () => ({
  list: [
    { text: 'hogeeeee', done: false },
    { text: 'fooooooo', done: false },
    { text: 'qqqqqqqqq', done: true },
    { text: 'yuyuyiyiuiy', done: false }
  ]
})

export const mutations = {
  setFB(state, todo) {
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
