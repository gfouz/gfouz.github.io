<template>
    <div>
        <div class="current-navbar">

            <NuxtLink to="/">
                <h4>HOME</h4>
            </NuxtLink>
            <NuxtLink to="/blog">
                <h4>BLOG</h4>
            </NuxtLink>
            <NuxtLink to="/about">
                <h4>ABOUT</h4>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    .current-navbar {
        display: flex;
        width: 100%;

        a {
            text-decoration: none;
            padding: 1em;
            color: rgb(179, 179, 179);
            font-style: italic;
            font-size: 14px;
            transition: all 0.3s;
        }

        a:hover {
            color: rgb(155, 1, 155);
        }

    }
</style>