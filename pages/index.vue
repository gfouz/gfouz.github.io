<template>
  <div class="main--container">
    <h1>GFOUZ PORTFOLIO {{new Date().getFullYear()}}</h1>
    <h2>Lover of React and Vue JS .</h2>
    <a href="https://github.com/gfouz">
      <!--<img src="../assets/images/landingpage/github-white.svg" alt="" width="50px">-->
      <h2>See my code !</h2>
      <img src="../assets/icons/git-alt.svg" width="40px">
    </a>
    <Burger @toggle="toggle" />
    <Sidebar :open="scroll" />
  </div>
</template>
<script>
  import Sidebar from '../components/landingpage/Sidebar';
  import Burger from '../components/landingpage/Burger';
  export default {

    components: {
      Sidebar,
      Burger
    },
    data: () => {
      return {
        scroll: false
      }
    },
    methods: {
      toggle(open) {
        this.scroll = open;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main--container {
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: $XDARK-GY;
    font-family: literata;
  }

  h1 {
  
    font-size: 2em;
    color: rgb(255, 254, 254);

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  h2 {
    margin: 1em 0;
    color: rgb(255, 255, 255);
  }
  a {
    text-decoration: none;
  }

  
</style>


