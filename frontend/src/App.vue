<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/meals.vue'
import Login from './components/Login.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/meals">Meals</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
