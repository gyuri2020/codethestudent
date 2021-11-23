<template>
  <div class="container">
    <div class="category">
      <v-card
        height="400"
        width="256"
        class="mx-auto"
      >
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                카테고리
              </v-list-item-title>
              <v-list-item-subtitle>
                옷을 추천해 드려용ㅎㅎ
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <v-divider vertical></v-divider>
    <div class="contents">
      추천
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Body',
    data: () => ({

    })
  }
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    width: 100%;
    height: 100%;

  }
  .category {
    width: 10%;
    height: 100%;
  }
  .contents {
    width: 80%;
    height: 100%;
    margin-left: 20px;
  }
</style>