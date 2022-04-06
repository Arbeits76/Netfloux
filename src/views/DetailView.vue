<template>
  <div class="details">
    <img
      class="poster"
      alt="Vue logo"
      :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
    />
    <div>
      <h1>{{ item.original_title }}</h1>
      <h3>Genres</h3>
      <div class="genres">
        <p v-for="genres in item.genres" :key="genres.id">{{ genres.name }}</p>
      </div>
      <p>{{ item.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "?api_key=d4ccd1acf9a19b03c7b99d6759cf46f3&language=en-US&page=1"
        );
        let data = await response.json();
        console.log(data);
        this.item = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  data() {
    return {
      item: null,
    };
  },
  created() {
    this.getData();
    console.info(this.item);
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  margin: 0 10%;
  justify-content: space-between;
  > .poster {
    width: 30%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    > h1 {
      margin: 0;
      color: crimson;
    }
    > h3 {
      margin: 0;
      color: lightpink;
    }
    > .genres {
      display: flex;
      justify-content: space-around;
      align-self: center;
      width: 60%;
      > p {
        margin-top: 0;
      }
    }
    > p {
      margin: 0 5%;
      color: white;
    }
  }
}
</style>