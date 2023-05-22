<!-- <script setup>
import meals from '../components/meals.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->


<template>
    <div>
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
        </li>
      </ul>
  
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        errors: []
      }
    },
    async created() {
      await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
  </script>