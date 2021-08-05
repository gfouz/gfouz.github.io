<template>
    <div>
        <div id="blog-header">
            <Header></Header>
        </div>
        <div class="blog-grid">
            <section class="blog-section1">
                <h1>HEADLESS CMS WITH NUXT JS</h1>
                <div>
                    <img src="../assets/images/blog/city.jpg" alt="blog-image"
                        title="Incluyo una experiencia personal.">
                </div>
                <h1>TAKE A LOOK AT...</h1>

            </section>
            <section class="blog-section2">
                <h1>CLICK ON THESE LINKS:</h1>
                <div class="blog-items">
                    <h3>ARTICLES:</h3>
                    <div v-for="item of list" class="dynamic-list">
                        <div>
                            <NuxtLink :to="`/book/${item.slug}`" style="text-decoration: none;">
                                <p class="links">{{item.title}}</p>
                            </NuxtLink>
                        </div>

                    </div>
                </div>
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
    export default {
        components: {
            Header,
        },
        async asyncData({ $content, params }) {

            const list = await $content('articles')
                .only(['slug', 'title'])
                .fetch();

            return { list }
        }

    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/pages/blog/blog.scss';
</style>