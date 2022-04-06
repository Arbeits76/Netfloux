<template>
  <div class="list">
    <card-component
      v-for="item in items.results"
      :key="item.id"
      :title="item.title"
      :overview="item.overview"
      :src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path"
      :id="item.id"
    />
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
// import Linklearn from './views/Linklearn.vue'
export default {
  name: "ListView",
  components: {
    CardComponent,
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=d4ccd1acf9a19b03c7b99d6759cf46f3&language=en-US&page=1"
        );
        let data = await response.json();
        this.items = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  data() {
    return {
      items: null,
    };
  },
  created() {
    this.getData();
  },
};
</script>

<style>
#app {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  background-color: black;
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1%;
  justify-items: center;
}
#link {
  text-align: center;
}
</style>





