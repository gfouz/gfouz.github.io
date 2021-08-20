<template>
    <div>
        <div id="blog-header">
            <Header></Header>
        </div>
        <div class="blog-grid">
            <section class="blog-section1">
                <h1>HEADLESS CMS WITH NUXT JS</h1>
                <div>
                    <img src="../assets/images/blog/puzzle.jpg" alt="blog-image"
                        title="Incluyo una experiencia personal.">
                </div>
                <h1>TAKE A LOOK AT...</h1>

            </section>
            <section class="blog-section2">
                <Gallery :items="list"></Gallery>
                
                <h1>WRITING MAY BE EXCITING!</h1>
                
            </section>
        </div>

        <div id="blog-footer">
            <a href="https://github.com/gfouz">
                <strong>
                    GFOUZ &copy;{{new Date().getFullYear()}}
                </strong>
            </a>
        </div>
    </div>
</template>

<script>
    import Header from '../components/blog/Header';
    import Gallery from '../components/blog/Gallery';
    export default {
        components: {
            Header,
            Gallery
        },
        async asyncData({ $content, params }) {

            const list = await $content('articles')
                .only(['slug', 'title', 'img', 'path'])
                .fetch();

            return { list }
        }

    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/pages/blog/blog.scss';
</style>