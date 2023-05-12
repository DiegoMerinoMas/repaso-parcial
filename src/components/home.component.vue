<template>
  <p class="title" style="margin-top: 3%">Popular post</p>
  <div class="container">
    <pv-card v-for="(popularPost, index) in popularPosts" :key="index" style="width: 21.9em">
      <template #header>
        <img alt="user header" :src="popularPost.photoUrl" width="350" height="350" />
      </template>
      <template #title> {{ popularPost.title }}</template>
      <template #footer>
        <router-link :to="'/posts/' + popularPost.id">
          <pv-button icon="pi pi-plus" label="See more" />
        </router-link>
      </template>
    </pv-card>
  </div>
  <p class="title">Our post</p>
  <div class="container">
    <pv-card v-for="(ourPost, index) in ourPosts" :key="index" style="width: 20em;">
      <template #header>
        <img alt="user header" :src="ourPost.photoUrl" width="300" height="300" />
      </template>
      <template #title>{{ ourPost.title }}</template>
      <template #footer>
        <router-link :to="'/posts/' + ourPost.id">
          <pv-button icon="pi pi-plus" label="See more" />
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<script>
import { PostApiService } from "../services/post-api.services";

export default {
  name: "home",
  data() {
    return {
      posts: [],
      popularPosts: [],
      ourPosts: [],
      postService: null,
    };
  },
  mounted() {
    this.postService = new PostApiService();
    this.postService
      .getAllPost()
      .then((response) => {
        this.posts = response.data;
        this.popularPosts = this.posts.sort((a, b) => b.likes - a.likes).slice(0, 3);
        this.ourPosts = this.posts.slice(3, this.posts.length);
        console.log(this.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style>
.container {
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

.title {
  text-align: center;
  font-size: xx-large;
}
</style>
