<template>
    <div class="login-screen">
      <h1 class="title">Login</h1>
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="email" placeholder="Email" class="input">
        <input type="password" v-model="password" placeholder="Password" class="input">
        <button type="submit" class="button">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      onSubmit() {
        // TODO: Submit the form data to your backend
      }
    }
  }
  </script>
  
  <style>
  .login-screen {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #583939;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #ccc;
  }
  
  .title {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  </style>
  