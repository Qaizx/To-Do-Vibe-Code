<template>

</template>

<script setup lang="ts">

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
