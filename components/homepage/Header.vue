<template>
  <div>
    <header class="header-container">
      <div class="nav-header">
        <div style="width: 120px;">
          <img src="../../assets/images/homepage/header/logo.png"/>
        </div>
        <NuxtLink to="/blog">
          <h4>BLOG</h4>
        </NuxtLink>
        <NuxtLink to="/about">
          <h4>ABOUT</h4>
        </NuxtLink>
        <NuxtLink to="/contact">
          <h4>CONTACT</h4>
        </NuxtLink>
      </div>
      <div class="title">
        <h1 style="margin-bottom:0;">PORTFOLIO</h1>
      </div>

      <div class="line-box">
        <div class="h-line"></div>
      </div>
      <p class="message-2">OPENED MIND TO NEW IDEAS AND TECHNOLOGIES</p>
    </header>

  </div>
</template>

<script>
  export default {


  }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/pages/homepage/header/header.scss';
</style>