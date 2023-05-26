<template>
  <div class="meals">
    <h1>Foods</h1>
    <ul>
      <li v-for="food in foods" :key="food.id">
        <h2>{{ food.name }}</h2>
        <p>{{ food.food }}</p>
      </li>
    </ul>
  </div>
</template>




<style>
  .meals {
    background-color: aliceblue;
    color: rgb(24, 25, 25);
    text-align: center;
    margin-bottom: 10px;
  }
</style>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      foods: []
    }
  },
  mounted() {
    axios.get('http://localhost:8000/foods/').then(response => {
      this.foods = response.data;
    });
  }
}
</script>
