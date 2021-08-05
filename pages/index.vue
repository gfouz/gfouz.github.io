<template>
  <div class="portfolio">
    <div class="grid-container">

      <div id="header">
        <div><Header></Header></div>
      </div>
      <div id="main">
        <Main></Main>
      </div>
      <div id="sidebar"><Sidebar></Sidebar></div>
      <div id="section-1">
        <Card1></Card1>
      </div>
      <div id="section-2">
        <Card2></Card2>
      </div>
      <div id="section-3">
         <Card3></Card3>
      </div>
      <div id="footer">
         <Footer></Footer>
      </div>

    </div>
  </div>

</template>

<script>
  import Header from '../components/homepage/Header'
  import Main from '../components/homepage/Main'
  import Card1 from '../components/homepage/Card1'
  import Card2 from '../components/homepage/Card2'
  import Card3 from '../components/homepage/Card3'
  import Sidebar from  '../components/homepage/Sidebar'
  import Footer from '../components/homepage/Footer'
  export default {
    components: {
      Header,
      Main,
      Card1,
      Card2,
      Card3,
      Sidebar,
      Footer
    },
    data: () => {
      return {
        textthree: [],
      }
    },
    //  async asyncData({ $content }) {
    //       const markdown = await $content('card3').fetch()
    //       const cms = markdown
    //       const { body: { children: [{ children: [children] }] } } = markdown
    //       return {
    //         cms,
    //         children
    //       }
    //     },
    //     created() {
    //       this.textthree = this.cms
    //     },

  };
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/homepage/index';
 
</style>