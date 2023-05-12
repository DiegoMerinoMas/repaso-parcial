<template>
    <pv-card class="post-card">
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
            <pv-button icon="pi pi-thumbs-up" @click="likePost" />
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
    beforeRouteUpdate(to, from, next) {
        if (to.params.id !== from.params.id) {
            this.fetchPostData();
        }
        next();
    },
    created() {
        this.$toast.success('¡Acción completada con éxito!');
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
        },
        likePost() {
            let postObject = this.post;
            const postService = new PostApiService();
            const updatedLikes = this.post.likes + 1;
            const postId = this.$route.params.id;
            // const updatedData = { likes: updatedLikes };
            const updatedData = { ...postObject, likes: updatedLikes };
            postService.updatePost(postId, updatedData)
                .then(response => {
                    this.post.likes = response.data.likes;
                })
                .catch(error => {
                    console.log(error);
                });
            // postService.updatePost(postId, updatedData)
            //     .then(response => {
            //         this.post.likes = response.data.likes;
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        },
    }
}
</script>

<style scoped>
.post-card {
    width: 400px;
    margin: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.post-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.post-card h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
}

.post-card p {
    margin: 10px;
}

.post-card .p-button {
    margin: 10px;
}
</style>