<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/meals.vue'
import Login from './components/Login.vue'
</script>


<template>
  <header>
    <div class="wrapper">
      <nav class="sticky-top">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/meals">Meals</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <button class="right-button">Click me</button>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: #cb7575;
  }

  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .right-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .nav-link {
    padding: 10px 20px;
  }
</style>
