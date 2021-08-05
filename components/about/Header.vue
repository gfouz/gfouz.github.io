<template>
<div> 
     <header>
         <div class="about-links">
             <NuxtLink to="/"><strong>HOME</strong> </NuxtLink>
             <NuxtLink to="/blog"><strong>BLOG</strong></NuxtLink>
             <NuxtLink to="/contact"><strong>CONTACT</strong></NuxtLink>
             <div id="about-logo"><img src="../../assets/images/about/GN.png" alt="logo" width="100px"></div>
         </div>
     </header>
</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/pages/about/header';
</style>