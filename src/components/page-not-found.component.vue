<template>
    <div>
      <h1>Page not found</h1>
      <p>The path {{ route.fullPath }} was not found.</p>
      <router-link to="/home">Return to Home</router-link>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      return { route };
    },
  };
  </script>