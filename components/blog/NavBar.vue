<template>
    <div>
        <div class="links-to-pages">

            <NuxtLink to="/">
                <h4>HOME</h4>
            </NuxtLink>
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
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    .links-to-pages {
        display: flex;
        border: 1px solid rgb(238, 236, 236);
          
        a {
            text-decoration: none;
            padding: 1em;
            color: rgb(179, 179, 179);
            font-style: italic;
            transition: all 0.3s;
          }
      a:hover {
         color: rgb(155, 1, 155);
      }

    }
</style>