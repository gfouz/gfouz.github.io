<template>
    <div class="slug-container">
        <div class="slug-grid">
            <section class="slug-section-one">
                <div class="section-one-container">
                    <div id="slug-nav-bar">
                        <NavBar></NavBar>
                    </div>
                    <h2>{{issues.title}}</h2>
                    <div class="slug-image">
                        <img :src="require(`~/assets/images/blog/${issues.img}`)" alt="programmer">
                    </div>
                    <div class="slug-author-date">
                        <p><strong>Author</strong>: {{issues.author.name}}</p>
                        <p><strong>Article last updated:</strong>
                            {{ dateFormatter(issues.updatedAt) }}
                        </p>
                    </div>
                </div>
            </section>
            <section class="slug-section-two">
                <div class="section-two-container">
                    <nuxt-content :document="issues" />
                </div>
            </section>

            <footer class="slug-footer">
                <div class="prev-next-wrapper">
                    <PrevNext :prev="prev" :next="next" />
                </div>
            </footer>
        </div>
    </div>

</template>
<script>

    import PrevNext from '../../components/global/PrevNext';
    import NavBar from '../../components/blog/NavBar'
    export default {
        components: {
            PrevNext,
            NavBar
        },
        async asyncData({ $content, params }) {

            const issues = await $content('articles', params.slug)
                .sortBy('createdAt', 'asc')
                .fetch();
            const [prev, next] = await $content('articles')
                .only(['title', 'slug'])
                .sortBy('createdAt', 'asc')
                .surround(params.slug)
                .fetch();
            return {
                issues, prev, next

            }

        },

        methods: {
            dateFormatter(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en', options)
            }
        }
    }



</script>
<style lang="scss">
    @import "../../assets/scss/pages/slug/slug";
</style>