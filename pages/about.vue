<template>
    <div>
        <div class="about-container">
            <header class="about-header">
                <Header></Header>
            </header>
            <main class="about-main1">
                <div class="about-pht-box1">
                    <img src="../assets/temporal/relaxing.jpg" alt="">
                </div>
            </main>
            <main class="about-main2">
                <div class="about-pht-box2">
                    <img src="../assets/temporal/food.jpg" alt="">
                </div>
            </main>
            <section class="about-fr1">
                <h4>A LITTLE ABOUT ME</h4>
                <p>
                    I began learning C plus plus in 2017 in order to write firmwares for
                    micro-controllers. I was studying this language for more than a year
                    but eventually i heard talk about Node js and the wonder that it is,
                    and from that time on i haven't quit learning because these things
                    became my world. Things such as React and Express JS have drawn
                    all my attention so that i have studied these technologies. But more
                    recently i discovered one of the best and modern tools that is used to
                    create web applications and i refer to Vue JS and its ecosystem which
                    is my focus of attention right now.
                </p>
            </section>

            <section class="about-fr2">
                <div><img src="../assets/temporal/solve.jpg" alt=""></div>
                <h4>GIT-BASED HEADLESS CMS</h4>
                <p>
                    Nuxt is based on a powerful modular architecture that can be used
                    to build applications that are optimized out of the box while providing
                    the best developer experience (from the NuxtJS website). This main buzz
                    about NuxtJS is that it allows you build either spa or ssr apps easily,
                    and this is very cool.
                </p>
            </section>

            <section class="about-fr3">
                <div>
                    <img src="../assets/temporal/puzzle.jpg" alt="" srcset="">
                </div>
                <h4>NUXT CONTENT MODULE</h4>
                <p>
                    I really enjoy working with the Nuxt_js content module, its api is
                    easy to learn and very very powerful and it is fast and light. you may
                    write in a content/ directory and then fetch your Markdown, JSON or
                    another similar kinds of files through a MongoDB like API that is
                    acting as a Git-based Headless CMS. It has been a very very nice
                    experience to work with so intuitive and great tool.
                </p>
            </section>
            <section class="about-fr4">

                <h4>IMPORTANT FOR ME</h4>
                <p>
                    The number one is responsiveness. A responsive layout is the guarantee
                    that any user on any device will have the best experience on your
                    website so that to accomplish this objective i made friend with some
                    powerful tools such as CSS GRID and FLEX BOX. The number two is CSS
                    pre-processors called Sass that allows you to use variables, nested
                    syntax and other advantages that at the same time allow a clear way of
                    targeting elements, a better organized code and prevent the need to
                    rewrite css rules and selectors multiple times.
                </p>
            </section>
            <footer class="about-footer">
                <h1>GFOUZ &copy;{{new Date().getFullYear()}}</h1>
                <Icons></Icons>
            </footer>
        </div>

    </div>
</template>

<script>
    import Header from '../components/about/Header';
    import Icons from '../components/about/Icons';
    export default {
        components: {
            Header,
            Icons
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/pages/about/about';
</style>