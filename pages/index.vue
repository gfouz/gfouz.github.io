<template>
  <div class="main-container">
    <div class ="main__title">
          <h1>PORTFOLIO {{new Date().getFullYear()}}</h1>
          <h5>GFOUZ</h5>
          <a href="https://github.com/gfouz">
          <img src="../assets/icons/git-alt.svg" width="30px">
          </a>
    </div>  
    
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
  .main-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    background-color: $XDARK-GY;
    font-family: literata;
    background: url('../assets/images/home/pen.jpg') no-repeat center;
    background-size: cover;
    @media (min-width:600px) {
      align-items: flex-end
    }

  }
  .main__title {
    h1,h5 {
      color: #cdc058;
      margin: 1em 0 0 0;
    }
    img {
      margin: 1.5em 0;

    }
    @media (min-width:600px) {
      margin: 2.5em 2.5em;
    }
  }

  h1 {
  
    font-size: 2em;
    color: rgb(255, 254, 254);

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  
  a {
    text-decoration: none;
  }

  
</style>


