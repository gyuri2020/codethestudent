<template>
  <v-app>
    <Header/>
    <v-main>
      <Content/>
    </v-main>
  </v-app>
</template>

<script>

import Header from "./components/layout/Header.vue";
import Content from "./components/Content";

export default {
  name: 'App',

  components: {
    Header,
    Content,
  },

  data: () => ({
    
  }),
};
</script>
