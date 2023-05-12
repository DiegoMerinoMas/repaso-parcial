<template>
    <pv-card>
        <template #header>
            <h2>{{ post.title }}</h2>
        </template>
        <template #title>
            <p>{{ post.resume }}</p>
            <p>{{ post.content }}</p>
        </template>
        <template #footer>
            <img :src="post.photoUrl" height="300" width="300" />
            <p> likes 👍 : {{ post.likes }}</p>
        </template>
    </pv-card>
</template>

<script>
import { PostApiService } from '../services/post-api.services';

export default {
    name: 'Post',
    data() {
        return {
            post: {},
        };
    },
    created() {
        this.fetchPostData();
    },
    methods: {
        fetchPostData() {
            const postId = this.$route.params.id; // Obtener el ID del post desde la ruta
            const postService = new PostApiService();
            postService.getPostById(postId)
                .then(response => {
                    this.post = response.data; // Asignar los datos del post al objeto post
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<style></style>