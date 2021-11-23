<template>
  <v-app>
    <Header/>
    <v-main>
      <!-- <HelloWorld/> -->
      <Body2/>
    </v-main>
    <!--<Footer/>-->
  </v-app>
</template>

<script>

import Header from "./components/layout/Header.vue";
//import Footer from "./components/layout/Footer.vue";
//import Body from "./components/Body";
import Body2 from "./components/Body2";

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header,
    //Footer,
    //Body,
    Body2
  },

  data: () => ({
    //
  }),
};
</script>
