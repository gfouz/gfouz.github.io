<template>
  <div class="prev-next-container">
    <NuxtLink v-if="prev" :to="{ name: 'book-slug', params: { slug: prev.slug } }" class="nuxt-link">
       <strong>PREV</strong>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="{ name: 'book-slug', params: { slug: next.slug } }" class="nuxt-link">
      <strong>NEXT</strong>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
<style lang="scss">
  .nuxt-link {
    color: teal;
  }

  .prev-next-container {
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    height: 40px;
     background-color: rgb(171, 221, 221);
  }

</style>