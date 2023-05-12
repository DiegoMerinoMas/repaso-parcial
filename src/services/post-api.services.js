import http from '../core/http-common';

export class PostApiService{
    getAllPost(){
        console.log('hola');
        return http.get('/posts');
    }
    getPostById(id){
        return http.get(`/posts/${id}`);
    }
    createPost(data){
        return http.post('/posts', data);
    }
    updatePost(id, data){
        return http.put(`/posts/${id}`, data);
    }
    deletePost(id){
        return http.delete(`/tutorials/${id}`);
    }
    getAllTruck(){
        return http.get('/food-trucks');
    }
    getTruckById(id){
        return http.get(`/food-trucks/${id}`);
    }
    createTruck(data){
        return http.post('/food-trucks', data);
    }
    updateTruck(id, data){
        return http.put(`/food-trucks/${id}`, data);
    }
    deleteTruck(id){
        return http.delete(`/food-trucks/${id}`);
    }
}