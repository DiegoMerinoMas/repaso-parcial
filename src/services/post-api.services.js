import http from "../core/http-common";
const asciiArt = `
DIEGO MARTIN MERINO MAS
  Marca de agua de codigo, PERINO
  (Pepe the frog edited by Diego Merino to look like a me)                                                                      
                                              ,      /                      
                       ,                /   %@@@@@@@@@&                     
                     *@@@@@@@@@@@@@@%  &@@@@@@@@@@@@@&&%&@(.                
                 .@@@@@@@@,&@@@@@@@@&#@@@@(&@@@@@@@@&.#%%/./&@@@@&          
               &@@@@@@#@@@@@@@%&@@@&%#%&&@@@(@@@/&@@@,@@/,  ,@@@,@@         
             &@@@@@@@@@@@@@#@@/@@@*@@%/#@@@@&%@@@,@@@/  &@ &@  @@@@%        
           .@@@@@@@@@@@@@@@/@@@(@* @@      @@@@@@@@@@   @/  .   @@ ,        
       . *@@@@@@@@@@@#&&@@@&#@@@@   @% @@. .@@.@@@@@@&   (    %@*&.         
       .@@@@@@@@@@@@@@@@@@@%,(@@@    @/    &@@@@&%.@@@@@@@@@%@@@( .         
    . %@@@@@@@@@@@@@@@@@@@@,%*#%%#,@@@@@@@@@@@@@@@@@.@@&/. (%%%%/           
     *@@@@@@@@@@@@@@@@@@@@@@(%%(###%%%%%%%%%%%%%%%%%%%%%%%(    ,            
     @@@@@@@@@@@@@@@@@@@@@@@@@/%%/###.((((*.(############.(%%%,             
     @@@@@@@@@@@@@@@@@@@@@@@@@@@&(%%((((((((((((/.######.((((((%            
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*%%%((((((((((((((((((((((%% .          
      .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(#%%%%#((((((((#%%%%%.              
    ////*    (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#####,     *               
   ////////////*.     ,*#&&&&&&&%#(**,.         ,./,*,/////////             
  .//////////////////////////////////////////////*#***/ ////////// *     
    ////////////////////////////////////////////////*/**/////////// .   
      ////////////////////////////////////////////,**,/////////`;

export class PostApiService {
  getAllPost() {
    console.log(asciiArt);
    return http.get("/posts");
  }
  getPostById(id) {
    return http.get(`/posts/${id}`);
  }
  createPost(data) {
    return http.post("/posts", data);
  }
  updatePost(id, data) {
    return http.put(`/posts/${id}`, data);
  }
  deletePost(id) {
    return http.delete(`/tutorials/${id}`);
  }
  getAllTruck() {
    return http.get("/food-trucks");
  }
  getTruckById(id) {
    return http.get(`/food-trucks/${id}`);
  }
  createTruck(data) {
    return http.post("/food-trucks", data);
  }
  updateTruck(id, data) {
    return http.put(`/food-trucks/${id}`, data);
  }
  deleteTruck(id) {
    return http.delete(`/food-trucks/${id}`);
  }
}
