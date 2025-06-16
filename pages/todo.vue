<template>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" :class="{ done: todo.done }">
        <input type="checkbox" v-model="todo.done" />
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref<{ text: string; done: boolean }[]>([]);

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false });
    newTodo.value = '';
  }
}

function removeTodo(index: number) {
  todos.value.splice(index, 1);
}
</script>

<style scoped>
.todo-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
li.done span {
  text-decoration: line-through;
  color: #aaa;
}
input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
}
button {
  margin-left: 0.5rem;
}
</style>
