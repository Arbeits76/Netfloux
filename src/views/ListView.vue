<template>
<div class="list">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!-- <Linklearn msg="sucess"/> -->
<img alt="Vue logo" src="../assets/telecharger.png">
<card-view v-for="item in items.results" 
            :key="item.id" 
            :title="item.title" 
            :overview="item.overview" 
            :src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path" />

  <li v-for="post in posts" :key="post.id">{{post.title}}   
  </li>
  
</div>
</template>

<script>
import CardView from './CardView.vue';
// import Linklearn from './views/Linklearn.vue'
export default {
  name: 'ListView',
  components: {
    CardView
    // Linklearn
  },
  methods:{
    async getData(){
      try {
        let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d4ccd1acf9a19b03c7b99d6759cf46f3&language=en-US&page=1");
        let data = await response.json();
        // this.title = data.results[0].title;
        // this.overview = data.results[0].overview;
        // this.title2 = data.results[1].title2;
        // this.overview2 = data.results[1].overview2;
        // this.title3 = data.results[2].title3;
        // this.overview3 = data.results[2].overview3;
        // console.log(this.title2);
        // console.log(this.overview2);
        // this.image_path = this.image_path+data.results[0].backdrop_path;
        // this.image_path2 = this.image_path2+data.results[1].backdrop_path;
        // this.image_path3 = this.image_path3+data.results[2].backdrop_path;
        // console.log(this.image_path);
        
        this.items=data ;
        console.log(this.items);
      } catch (error) {
        console.log(error);
      }
    }
  },
  data() {
    return {
   items: null

    }
  },
  created() {
    this.getData();
  },
  beforeUnmount() {console.log('je suis sur le poin de disparaite du DOM!')},
  unmounted() {console.log('Je suis supprimé')}
} 
</script>

<style>
.list {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  
}
html {
  background-color: black ;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
#link {
   text-align: center;
}
</style>





