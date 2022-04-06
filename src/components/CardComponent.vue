<template>
  <div class="cards">
    <h1>{{ title }}</h1>
    <img alt="Vue logo" :src="src" />
    <h2 v-if="resume">{{ overview }}</h2>
    <router-link :to="{ name: 'detail', params: { id: id } }">details</router-link>
  </div>
</template>

<script>
export default {
  name: "CardComponen",
  props: {
    title: { type: String },
    overview: { type: String },
    src: { type: String },
    id: { type: Number },
  },
  data() {
    return {
      resume: false,
      back: false,
      noresume: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30vw;
  text-overflow: ellipsis;
  background-color: #2c3e50;
  border-style: hidden;
  border-width: 0;
  border-radius: 0.313rem;

  > img {
    align-self: center;
    width: 100%;
  }
}
h1 {
  color: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 1.125rem;
}
a {
  margin: 10% 0  0  0;
  padding: 5%;
  text-decoration: none;
  align-self: center;
  font-weight: bold;
  color: #2c3e50;
  background-color: darkgrey;
  width: 90%;
  border-radius: 0 0 5px 5px;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>



