<template>
  <v-container fluid blue lighten-3 class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <h1 align="center" class="display-4 white--text font-weight-bold">TODO APP</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10 px-2">
          <v-row no-gutters align="center" justify="space-around">
            <v-col cols="10" class="pl-3">
              <v-text-field v-model="newTodo" placeholder="add task..." color="light-blue"> </v-text-field>
            </v-col>
            <v-col cols="auto" class="text-center">
              <v-btn @click="addTodo" color="light-blue" x-small outlined>Add</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <transition-group appear name="todos" @before-leave="beforeLeave">
          <v-card class="elevation-10 mb-2 px-2 todo" v-for="todo in todos" :key="todo.id">
            <v-row no-gutters align="center" justify="space-between">
              <v-col cols="1">
                <v-checkbox :input-value="todo.done" @change="toggle(todo)" color="light-blue"></v-checkbox>
              </v-col>
              <v-col cols="8" sm="9">
                <v-card-title>
                  <span :class="{ done: todo.done }">{{ todo.text }}</span>
                </v-card-title>
              </v-col>
              <v-col cols="auto" class="text-center">
                <v-btn @click="deleteTodo(todo)" color="orange darken-2" x-small outlined>Delete</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </transition-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import db from '@/plugins/firebase'

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
      // this.$store.dispatch('todos/delete', todo)
      this.$store.commit('todos/delete', todo)
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    },
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
      el.style.width = width
      el.style.height = height
    }
  }
}
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}

.todos {
  &-enter {
    opacity: 0;
    transform: scale(0.5) translateX(80%);
  }
  &-leave {
    &-to {
      opacity: 0;
      transform: scale(0.5);
    }
    &-active {
      position: absolute;
    }
  }
}
.todo {
  transition: 0.6s ease;
}
</style>
