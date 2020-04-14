<template>
  <v-container fluid blue lighten-3 class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <h1 align="center" class="display-4 white--text">TODO APP</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10 px-1">
          <v-row no-gutters align="center">
            <v-col cols="10" class="pl-2 re">
              <v-text-field @keyup.enter="addTodo" v-model="newTodo" placeholder="add task..." color="blue" class=""> </v-text-field>
            </v-col>
            <v-col cols="2" class="text-center yello">
              <v-btn color="green" x-small outlined>Add</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10 mb-2 px-2 pr-" v-for="todo in todos" :key="todo.id">
          <v-row no-gutters align="center" justify="space-between">
            <v-col cols="1">
              <v-checkbox :input-value="todo.done" @change="toggle(todo)" color="light-blue"></v-checkbox>
            </v-col>
            <v-col cols="9" sm="9">
              <v-card-title>
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
              </v-card-title>
            </v-col>
            <v-col cols="2" class="text-center">
              <v-btn @click="deleteTodo(todo)" color="orange darken-2" x-small outlined>Delete</v-btn>
            </v-col>
          </v-row>
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
  mounted() {
    this.$store.dispatch('todos/loadFirebase')
  },
  methods: {
    addTodo() {
      const str = this.newTodo.trim()
      if (str.length > 0) {
        this.$store.dispatch('todos/add', str)
        this.newTodo = ''
      }
    },
    deleteTodo(todo) {
      this.$store.dispatch('todos/delete', todo)
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
