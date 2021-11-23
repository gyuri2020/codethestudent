<template>

  <v-app>
    <Header/>

    <v-main>
      <HelloWorld/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
