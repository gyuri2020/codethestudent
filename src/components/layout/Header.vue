<template>
<div class="text-center">
  <v-app-bar
      app
      color="grey darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="web Logo"
          class="shrink mr-2"
          contain
          :src="require('../../assets/shirt.png')"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Web site Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="150"
          :src="require('../../assets/webtitle.png')"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/gyuri2020/codethestudent"
        target="_blank"
        text
      >
        <span class="mr-2">codethestudent</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</div>
</template>

<script>
export default {};
</script>

<style></style>