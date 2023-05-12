<script>
import AppToolbar from './components/toolbar.component.vue'
import AppHome from './components/home.component.vue'
import AppPost from './components/post.component.vue'
import PageNotFound from './components/page-not-found.component.vue'

export default{
  name: 'App',
  components:{AppToolbar, AppHome, AppPost, PageNotFound},
  data(){
    return{
      drawe: false,
      items:[
        {label: "Home", to:"/home"},
        {label: "Posts", to: "/posts/:id"},
        {label: "Page not found", to:"/page-not-found"}
      ],
    };
  },
};
</script>

<template>
  <AppToolbar></AppToolbar>
  <RouterView/>
</template>

<style>
</style>
