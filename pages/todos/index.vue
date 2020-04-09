<template>
  <v-container fluid blue lighten-3 class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <h1 align="center" class="display-4 white--text">TODO APP</h1>
      </v-col>
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10">
          <v-text-field @keyup.enter="addTodo" v-model="newTodo" placeholder="add task..." class="mx-5"></v-text-field>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10 mb-2" v-for="todo in todos" :key="todo.id">
          <v-card-title>
            <v-checkbox v-model="todo.isDone"> </v-checkbox>
            <span :class="{ done: todo.isDone }">{{ todo.text }}</span>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn @click="deleteTodo(todo)" color="orange darken-4" text>Delete</v-btn>
            </v-card-actions>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: 'hogeeeee', isDone: false },
        { text: 'qqqqqqqqq', isDone: true },
        { text: 'fooooooo', isDone: false },
        { text: 'yuyuyiyiuiy', isDone: false }
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, isDone: false })
      this.newTodo = ''
    },
    deleteTodo(todo) {
      // this.$store.commit('todos/remove', todo)
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
