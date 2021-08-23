<template>
    <div class="gallery-container">
        <div class="grid-container">

            <div v-for="(item, index) in items" class="item"  :style="{'background-image':'url(' + require('~/assets/images/blog/' + item.img) + ')'}">
                <NuxtLink :to="`/book/${item.slug}`">
                    <p>{{item.title}}</p>
                </NuxtLink>
            </div>

        </div>
    </div>
</template>
<script>
    
    export default {
        props: {
            items: {
                type: Object,
                default: () => { }
            }

        },
        data: () => {
            return {
                image: '~/assets/images/blog/bible'
            }
        },
       
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/pages/blog/gallery.scss';
</style>