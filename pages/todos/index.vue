<template>
  <v-container fluid blue lighten-3 class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <h1 align="center" class="display-4 white--text">TODO APP</h1>
      </v-col>
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10">
          <v-text-field placeholder="add task" class="mx-5"></v-text-field>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-10 mb-2" v-for="todo in todos" :key="todo.id">
          <v-card-title>
            <v-checkbox v-model="todo.done"> </v-checkbox>
            {{ todo.text }}
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color="orange darken-4" text>Delete</v-btn>
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
        { text: 'hogeeeee', done: false },
        { text: 'qqqqqqqqq', done: true },
        { text: 'fooooooo', done: false },
        { text: 'yuyuyiyiuiy', done: false }
      ]
    }
  }
}
</script>

<style></style>
