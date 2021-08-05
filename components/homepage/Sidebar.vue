<template>
    <div class="sidebar">
        <div style="border-bottom: 1px solid var(--DARK-GY);">
            <h3>CLICK HERE!</h3>
            <NuxtLink to="/blog">
                <h4 style="color: red;">BLOG</h4>
            </NuxtLink>
            <NuxtLink to="/about">
                <h4>ABOUT</h4>
            </NuxtLink>
            <NuxtLink to="/contact">
                <h4>CONTACT</h4>
            </NuxtLink>
        </div>
        <div style="border-left: 1px solid var(--DARK-GY) ;">
            <div style="margin-left:4px">
                <h4>TECHNOLOGIES USED:</h4>
                <p>HTML CSS</p>
                <p>SCSS SASS</p>
                <p>JAVASCRIPT</p>
                <p>AND NUXT JS</p>
            </div>

        </div>

        <div style="border-bottom: 1px solid var(--DARK-GY);">
            <Logos></Logos>
        </div>
    </div>
</template>

<script>
    import Logos from '../../components/homepage/Logos'
    export default {
        components: {
            Logos,
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/pages/homepage/sidebar';
</style>