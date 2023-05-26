<script setup>
import meals from '../components/meals.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <div class="container">
    <h1>Welcome to Eaty</h1>
    <p>We will help you decide what to cook</p>
    <p>Or what to eat</p>

  </div>
  </main>
</template>


<script>
  export default {
    name: 'App',
  }
  </script>

  <style>
  .container {
    width: 100%;
    margin: 0 auto;
    background-color: aquamarine;
    color: brown;
  }

  h1 {
    font-size: 2em;
    margin-top: 0;
  }

  p {
    font-size: 1em;
    margin-bottom: 1em;
  }
</style>
