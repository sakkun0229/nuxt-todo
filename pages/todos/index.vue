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
            <v-checkbox :input-value="todo.done" @change="toggle(todo)" color="blue"></v-checkbox>
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
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
import { db } from '@/plugins/firebase'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  async mounted() {
    const snapshot = await db.collection('todos').get()
    snapshot.forEach(doc => {
      this.$store.commit('todos/setFB', doc.data())
      // console.log(doc.data())
    })
    console.log(this.todos)
  },
  methods: {
    addTodo() {
      this.$store.commit('todos/add', this.newTodo)
      this.newTodo = ''
    },
    deleteTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
