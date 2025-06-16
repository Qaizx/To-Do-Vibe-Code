<template>
  <div class="todo-container gradient-bg">
    <h1 class="fancy-title">📝 To-Do Vibe</h1>
    <form @submit.prevent="addTodo" class="todo-form">
      <input v-model="newTodo" placeholder="Add a new task" class="todo-input" />
      <button type="submit" class="add-btn">Add</button>
    </form>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" :class="['todo-item', { done: todo.done }]">
        <label class="checkbox-container">
          <input type="checkbox" v-model="todo.done" />
          <span class="checkmark"></span>
        </label>
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="removeTodo(index)" class="remove-btn">✖</button>
      </li>
    </ul>
    <p v-if="!todos.length" class="empty-msg">No tasks yet. Add your first one!</p>
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
.gradient-bg {
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
}
.todo-container {
  max-width: 430px;
  margin: 3rem auto;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(60,60,120,0.10);
  position: relative;
}
.fancy-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  color: #6366f1;
  text-shadow: 0 2px 8px #e0e7ff;
}
.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.todo-input {
  flex: 1;
  padding: 0.7rem 1rem;
  border: 1px solid #c7d2fe;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}
.todo-input:focus {
  border: 1.5px solid #6366f1;
}
.add-btn {
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover {
  background: #4f46e5;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  background: #f1f5f9;
  border-radius: 6px;
  margin-bottom: 0.7rem;
  padding: 0.6rem 0.8rem;
  box-shadow: 0 1px 4px rgba(99,102,241,0.04);
  transition: background 0.2s;
}
.todo-item.done {
  background: #e0e7ff;
}
.checkbox-container {
  display: flex;
  align-items: center;
  margin-right: 0.7rem;
  position: relative;
}
.checkbox-container input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}
.checkmark {
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #6366f1;
  border-radius: 4px;
  display: inline-block;
  position: relative;
}
.checkbox-container input:checked + .checkmark {
  background: #6366f1;
  border-color: #6366f1;
}
.checkbox-container input:checked + .checkmark:after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
}
.todo-text {
  flex: 1;
  font-size: 1.08rem;
  color: #334155;
  margin-right: 0.7rem;
  transition: color 0.2s;
}
.todo-item.done .todo-text {
  text-decoration: line-through;
  color: #a5b4fc;
}
.remove-btn {
  background: none;
  border: none;
  color: #f87171;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
}
.remove-btn:hover {
  background: #fee2e2;
}
.empty-msg {
  text-align: center;
  color: #94a3b8;
  margin-top: 2rem;
  font-style: italic;
}
</style>
