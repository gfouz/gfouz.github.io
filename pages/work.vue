<template>
    <div class="grid--container">
        <header>
            <div class="nav__list">
                <NuxtLink to="/"><strong>HOME</strong> </NuxtLink>
                <NuxtLink to="/blog"><strong>BLOG</strong></NuxtLink>
                <NuxtLink to="/about"><strong>ABOUT</strong></NuxtLink>
                <NuxtLink to="/contact"><strong>CONTACT</strong></NuxtLink>
            </div>

        </header>
       
        <section class="github--links">

            <img src="../assets/icons/git-alt.svg" alt="atom" width="60px" style="margin: 2em 0;" />
            <nav class="link__list">
                
                <a href="https://github.com/gfouz">
                       <h3>Take a look at my code!</h3>
                       <p>Portfolio 2021 Nuxt</p> 
                       <p> Markdown to JSX </p>
                       <p> CMS Next JS </p>
                </a>
                
            </nav>
            <h4>Mobile first and Responsive design</h4>
        </section>
        <article class="picture--section">
            <div class="picture__container">
                <div class="picture__item--container">
                    <div class="picture__image1--container"></div>
                    <h3>Goals and hopes!</h3>
                    <p>
                        When we are faced with difficult times as we are now with the effects of a worldwide pandemic, it is easy to get discouraged and lose hope.  Hope is a vital component of human existence, and it is needed to find happiness and peace during times that might otherwise lead us to be discouraged.  As Andrew Carnegie so clearly pointed out, setting a goal can keep your thoughts focused, direct your energy, and inspire the hope that is needed to move through and beyond a moment of despair.
                    </p>
                </div>

            </div>
            <div class="picture__container">
                <div class="picture__item--container">
                    <div class="picture__image2--container"></div>
                    <h3>Imagination & inspiration</h3>
                    <p>The ability to imagine things pervades our entire existence. It influences everything we do, think about and create. It leads to elaborate theories, dreams and inventions in any profession 
                    and ultimately, imagination influences everything we do regardless of our profession.    
                    </p>
                </div>

            </div>

            <div class="picture__container">
                <div class="picture__item--container">
                    <div class="picture__image3--container"></div>
                    <h3>How to enhance your imagination</h3>
                    <p>
                       Start with the end in mind, you firstly need to know your goal and have a vision of what you want to achieve. Many people don’t have a clear vision of what they would like to achieve. Instead, they are held back from what they want to achieve by focusing on the obstacles that get in the way. So that it is very meaningful to know why your vision is so important to you.
                    </p>

                </div>

            </div>
        </article>
        <article class="technologies--profile">
            <div class="flex--row">
                <img src="../assets/icons/react.svg" width="40px" class="react--logo">
                <h5>Made with Nuxt!</h5>
                <img src="../assets/icons/vue.svg" width="40px">
            </div>
            <img src="../assets/icons/html.svg" width="20px">
            <h4>I use <span>React</span> or VueJS to create web!</h4>

        </article>
        <footer>
            <h4>GFOUZ &copy; 2021</h4>
            <p>technologies: html css scss javascript nuxtjs</p>
        </footer>
    </div>
</template>
<script>
    export default {}
</script>

<style lang="scss" scoped>
    .grid--container {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 70px  350px auto 200px 80px;
        grid-template-columns: 1fr;
    }

    header {
        z-index: 1;
        width: 100%;
        height: 70px;
        display: flex;
        background-color: $GREY-700;
    }

    .nav__list {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
            color: #ffffff;
            text-decoration: none;
        }
    }

   

    .github--links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            text-align: center;
            font-family: literata;
            color: $DARK-GY;
            margin-top: 3em;
            text-transform: uppercase;
        }
    }

    .link__list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
       
        a {
             color: #009575;
             text-decoration: none;
             font-weight: bolder;
        }
        h3 {
            color: $DARK-GY;
        }
    }

    

    .picture--section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .picture__container {
        width: 320px;
        height: auto;
        margin: 1em 1em;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .picture__item--container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        color: $DARK-GY;

        p {
            padding: 0.5em 0;
            text-align: left;
        }

        h3 {

            margin-top: 0.7em;
            margin-bottom: -0.5em;
        }
    }

    .picture__image1--container {
        width: 100%;
        height: 200px;
        background-image: url('../assets/images/work/children-school.jpg');
        background-size: cover;
        background-position: bottom;
    }

    .picture__image2--container {
        width: 100%;
        height: 200px;
        background-image: url('../assets/images/work/book-glasses.jpg');
        background-size: cover;
        background-position: center;
    }

    .picture__image3--container {
        width: 100%;
        height: 200px;
        background-image: url('../assets/images/work/beatle.jpg');
        background-size: cover;
        background-position: center;
    }

    .technologies--profile {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        h4 {
            color: #616161;
        }

        h5 {
            margin: 0 2em;
        }

        span {
            color: #fe0202;
        }

    }

    footer {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #009575;
        background-color: #e0f7fa;
    }


    .flex--column {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    .flex--row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
        .react--logo {
            animation: react--icon infinite 20s linear;
        }
    }

    @keyframes react--icon {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>