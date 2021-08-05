<template>
    <div>
        <div class="slug-grid">
            <section class="slug-section-one">
                <div class="section-one-container">
                    <h2>{{issues.title}}</h2>
                    <div id="slug-nav-bar">
                        <NavBar></NavBar>
                    </div>
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
    .slug-author-date {
        color: teal
    }
    #slug-nav-bar {
        margin: 1em 0 2em 0;
    }
    .nuxt-content {
        pre {
            margin: 0 auto;
            max-width: 460px;

            @media (max-width: 460px) {
                max-width: 350px;
            }
        }

        text-align: left;

        p {
            color: $GY;
            margin: 0.4em 2em;
        }

        h2 {
            color: $LIGHT-GY;
            margin: 0.1em 1.3em;
        }
    }

    .prev-next-wrapper {
        width: 100%;
        margin: 0;

    }

    .come-back-home {
        color: teal;
        border-radius: 8px;

        p {
            color: teal;
            font-style: italic;
            font-size: 22px;
        }

        a {
            text-decoration: none;
        }
    }


    @media (max-width: 799px) {
        .slug-grid {
            font-size: calc(0.6em + 1vw);
            display: grid;
            grid-template-areas:
                "section1"
                "section2"
                "footer";
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 60px;
        }
    }




    .slug-image {
        max-width: 100%;
        height: auto;

        img {
            max-width: 100%;
            height: auto;
        }
    }

    .slug-section-one {
        grid-area: section1;
        display: flex;
        flex-direction: column;
        align-items: center;
       
    }

    .section-one-container {
        max-width: 100%;
        margin: 2em 1em;

        h2,
        button,
        img {
            margin: 0.5em 0;
        }

        button {
            color: teal;
            outline: none;
            border: none;
            padding: 0.7em 2em;
            border-radius: 8px;
            transition: all 1s;
            background-color: rgba(0, 128, 128, 0.103);
        }

        button:hover {
            color: white;
            background-color: black;

        }

        h2 {
            color: teal;
        }
    }

    .slug-section-two {
        grid-area: section2;
    }

    @media (min-width:800px) {
        .slug-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: fit-content 80px;
            grid-template-areas:
                "section1 section2"
                "footer   footer";

        }

        .section-one-container {
            margin: 1.3em 4em;
            max-width: 500px;
        }

        .slug-image {
            max-width: 100%;

            img {
                max-width: 100%;
                height: auto;
            }
        }

        .section-two-container {
            margin: 0 1em;
        }

        .nuxt-content {
            margin: 2em 2em;
        }

        .slug-section-one {
            padding-bottom: 40px;
        }

        .slug-section-two {
            padding-bottom: 40px;
        }
    }

    .slug-footer {
        position: fixed;
        bottom: 0;
        grid-area: footer;
        width: 100%;
        height: 40px;
        background-color: black;
    }
</style>