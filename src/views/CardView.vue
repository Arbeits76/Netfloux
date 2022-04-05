<template>
  <div class="cards">
    <h1>{{ title }}</h1>
    <img alt="Vue logo" :src="src"/>
    <h2 v-if="resume">{{ overview }}</h2>
    <button @click="delpoy" v-if="noresume">details</button>
    <button @click="undeploy" v-if="resume">Retour</button>

  </div>
</template>
<script>
export default {
  props: {
    title: { type: String },
    overview: { type: String },
    src: { type: String },
  },
  data() {
    return {
      resume: false,
      back: false,
      noresume: true,
    };
  },
  methods: {
    delpoy() {
      (this.resume = true), (this.noresume = false), console.log("coucou");
    },
    undeploy() {
      (this.resume = false), (this.noresume = true), console.log("salut");
    },
  },
};
</script>








<!--
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

    <button>Installed CLI Plugins</button>
    <div v-if="installed">
      <ul>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
            target="_blank"
            rel="noopener"
            >babel</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener"
            >eslint</a
          >
        </li>
      </ul>
    </div>
    <button>Essential Links</button>
    <div v-if="esential">
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    </div>
    <button>Ecosystem</button>
    <div v-if="ecosystem">
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    </div>
  </div>
</template>



<script>
export default {

  props: {
    msg: String,
  },
  data() {
    return {
      installed: false,
      esential: false,
      ecosystem: false,
    };
  },
};
</script>
  -->
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
  background-color: black;
}
h1 {
  margin: 40px 0 0;
  color: red;
  white-space: nowrap;
  text-overflow: ellipsis;
}
h2 {
  margin: 40px 0 0;
  color: red;
}
h3 {
  margin: 40px 0 0;
  color: red;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



