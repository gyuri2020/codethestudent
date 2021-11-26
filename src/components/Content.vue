<template>

  <section class = 'my-10 py-10 '>

    <div class="d-flex justify-space-around mb-6">
      <div class='mx-8'>
        <v-card
          class="mx-auto application"
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
                @click="changeinput(child.title)"
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
          v-for = 'item in items'
          :key = 'item.title'
          class="mx-auto"
          max-width="300"
          cols="4"
        >
          <v-card class=' mx-4'>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              {{item.title}}
            </v-card-title>

            <v-card-subtitle>
              {{input}}
            </v-card-subtitle>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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

  export default {

    components: {
    Footer,
    },

    data: () => ({
      input: "",
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
            { title: '원피스' },
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
    changeinput(search){
      console.log(search)
      this.input = search
    }
  }

}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');


  .application {
    font-family: 'Jua', sans-serif;
  }
</style>


