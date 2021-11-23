<template>
  <v-app>
    <Header/>
    <v-main>
      <!-- <HelloWorld/> -->
      <Body/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Body from "./components/Body";

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header,
    Footer,
    Body
  },

  data: () => ({
    //
  }),
};
</script>
