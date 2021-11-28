<template>

  <section class = 'my-10 py-10  application'>

    <div class="d-flex justify-space-around mb-6">
      <div class='mx-8'>
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-toolbar
            color="grey darken-1"
            dark
          >
            
            <v-spacer></v-spacer>
            <v-toolbar-title>관심 카테고리</v-toolbar-title>
            <v-spacer></v-spacer>


          </v-toolbar>

          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
            >
            
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                @click="changeInput(child.title)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </div>

    <div>
      <v-row>
        <v-col
          v-for = 'item in search_result'
          :key = 'item.index'
          class="mx-7"
          max-width="200"
          cols="3"
        >
          <v-card class=' mx-4'>

            <a :href=item.link >
              <v-img
                :src=item.image
                height="200px"
                width="350px"
              ></v-img>
            </a>

            <h4 v-html=item.title class="font-weight-medium">
            </h4>

            <v-card-subtitle>
              {{item.brand}}
            </v-card-subtitle>

            <v-card-text>
              <h4>최저가: {{item.lprice}}</h4>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>

  <Footer />
  </section>
</template>


<script>

  import Footer from "./layout/Footer.vue";
  import api from '../api'

  export default {

    components: {
    Footer,
    },

    data: () => ({
      search_result : {},
      input: "musinsa",
      items: [
        {
          items: [
            { title: '긴팔 티셔츠' },
            { title: '맨투맨/스웨트 셔츠' },
            { title: '후드 티셔츠' },
            { title: '니트/스웨터' },
            { title: '셔츠/블라우스' }

          ],
          title: '😎 상의 Top',
        },
        {
          items: [
            { title: '후드집업' },
            { title: '롱패딩' },
            { title: '숏패딩' },
            { title: '레더/라이더스 재킷' },
            { title: '블레이저 재킷' },
            { title: '가디건' }
          ],
          title: '😆 아우터 Outer',
        },
        {
          items: [
            { title: '데님 팬츠' },
            { title: '트레이닝/조거 팬츠' },
            { title: '코튼 팬츠' },
            { title: '레깅스' },
          ],
          title: '😋 바지 Pants',
        },
        {
          items: [
            { title: '미니스커트' },
            { title: '미디스커트' },
            { title: '롱스커트' },
          ],
          title: '🥰 스커트 Skirt',
        },
        {
          items: [
            { title: '구두' },
            { title: '로퍼' },
            { title: '부츠' },
            { title: '슬리퍼' },
            { title: '컨버스/단화' },
          ],
          title: '😌 신발 Shoes',
        },
      ],
    }),

  methods: {

    async getSearchResult(input) {
      try {
        const res = await api.getProducts(input)
        this.search_result = res.items
        console.log(this.search_result)
      } catch (err) {
        console.log(err)
      }
    },
    changeInput(search){
      console.log(search)
      this.input = search
      search = 'musinsa ' + search
      this.getSearchResult(search)

    },
  },

  mounted: function(){
    this.getSearchResult('musinsa');
  }

}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap');

section {
  font-family: 'Nanum Gothic', sans-serif;
}

</style>


