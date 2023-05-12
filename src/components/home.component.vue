<template>
    <p class="title" style="margin-top: 3%;">Popular post</p>
    <div class="container">
      <pv-card v-for="(post, index) in posts" :key="index" style="width: 21.9em;">
        <template #header>
          <img alt="user header" :src="post.photoUrl" width="350" height="350"/>
        </template>
        <template #title> {{post.title}}</template>
        <template #footer>
          <router-link :to="'/posts/' + post.id">
            <pv-button icon="pi pi-plus" label="See more" />
          </router-link>
        </template>
      </pv-card>
    </div>
    <p class="title">Our post</p>
    <div class="container">
        <pv-card style="width: 20em;">
        <template #header>
          <img alt="user header" src="../assets/unnamed.jpg" width="300" height="300"/>
        </template>
        <template #title> Simple Card</template>
        <template #footer>
          <router-link to="/post">
            <pv-button icon="pi pi-plus" label="See more" />
          </router-link>
        </template>
      </pv-card>
    </div>
  </template>
  
  <script>
  import { PostApiService } from '../services/post-api.services';

  export default{
    name: "home",
    data(){
      return{
        posts: [],
        post: {},
        postService: null,
      };
    },
    mounted(){
      this.postService = new PostApiService();
      this.postService.getAllPost()
      .then((response) =>{
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch(error =>{
        console.log(error);
      })
    },
  }
  </script>
  
  <style>
  .container{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      margin-top: 3%;
      margin-bottom: 3%;
  }
  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .title{
    text-align: center;
    font-size: xx-large;
  }
  </style>