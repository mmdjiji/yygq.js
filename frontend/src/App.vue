<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <Header msg="阴阳怪气编码" />
  <Main />
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media screen and (max-width: 960px) {
  #app {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
@media screen and (max-width: 1280px) and (min-width: 960px) {
  #app {
    margin-left: 10rem;
    margin-right: 10rem;
  }
}
@media screen and (min-width: 1280px) {
  #app {
    margin-left: 20rem;
    margin-right: 20rem;
  }
}
</style>
