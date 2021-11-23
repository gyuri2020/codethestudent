<template>
  <footer id="footer">
    <div class="footer-info">
      <div class="icons">
        <a v-clipboard:copy="email" @click="copy"><v-icon>mdi-email-outline</v-icon></a>
        <a href="https://github.com/gyuri2020/codethestudent"><v-icon>mdi-github</v-icon></a>
        <a href="https://gyuri2020.github.io/codethestudent"><v-icon>mdi-link-variant</v-icon></a>
      </div>
      <div class="footer-bottom">
        <span> © 2021 codethestudent </span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      email: 'tjd8899@gmail.com'
    }
  } 
};
</script>

<style lang="scss" scoped>
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    background-color: transparent;
    &:link {
      color: white;
    }
    &:active {
      color: white;
    }
    &:hover {
      outline-width: 0;
    }
    &:visited {
      color: white;
    }
  }
  #footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #FFFFFF;
    color:#aaaaaa;
    padding: 1rem;
  }
  .footer-info {
    padding-bottom: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .footer-bottom {
    font-size:16px;
  }
  .icons {
    margin-top:16px;
    margin-bottom:16px;
    & > a{
      margin: 16px 16px 16px 16px;
    }
  }
  img {
    width:20px;
    height:20px;
    filter: invert(36%) sepia(3%) saturate(0%) hue-rotate(153deg) brightness(94%) contrast(88%);
  }
</style>