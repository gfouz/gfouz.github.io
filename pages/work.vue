<template>
    <div class="grid--container">
        <div class="main">
            <h1 class="main__title">Work<span class="main__author">By GFOUZ</span></h1>
        </div>
        <header class="topbar">
            <div class="topbar__container">
                <NuxtLink to="/" class="topbar__item">home</NuxtLink>
                <NuxtLink to="/blog" class="topbar__item">blog</strong></NuxtLink>
                <NuxtLink to="/about" class="topbar__item">about</NuxtLink>
                <NuxtLink to="/contact" class="topbar__item">contact</NuxtLink>
            </div>

        </header>
        <section class="work-profile">
            <div class="work-profile__item">
                <img src="../assets/images/work/studying.png" class="work-profile__image">
                <div class="work-profile__content">
                    <h3 class="work-profile__title">Why I choose React's technologies ?</h3>
                    <p class="work-profile__paragraph">
                        React has a lot to offer. It allows for faster and easier development with components, provides
                        excellent app performance thanks to Virtual DOM, and has a great community ready to help and
                        creating useful solutions. It enjoys the support and resources of one of the most successful
                        tech companies in the world. React's popularity has been steadily increasing over the years,
                        which is great news for everyone using it.

                    </p>
                </div>
            </div>
            <div class="work-profile__item">
                <img src="../assets/icons/next.svg" width = "140px">
                <div class="work-profile__content">
                    <h3 class="work-profile__title">NextJs is a two-edged "sword"</h3>
                    <p class="work-profile__paragraph">
                        It's super fast With the help of Server-side rendering and static-site generation 
                        loads the site blazing fast. It's SEO friendly, you can customize your own <meta> tags to improve your Search Engine Optimisation.
                        Wide features out of the box: minifying javascript, doing code splitting, lazy loading, prefetching assets and much more...
                    </p>
                    <div class="work-profile__others">
                         <img src="../assets/icons/award.svg" width="30px">
                         <h3>I am lover of ReactJs technologies!</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="react-logo">
             <img src="../assets/images/work/atoms.png" class="react-logo__image">
        </section>
        <article class="project">
            
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
        grid-template-rows: 300px 60px auto 100px auto 80px;
        grid-template-columns: 1fr;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        background: url('../assets/images/work/flowers.jpg') no-repeat top right;
        background-size: cover;
    }

    .main__title {
        color: #b7e4f9;
        font-family: Times New Roman, serif;
        ;
        font-size: 2.5em;
    }

    .main__author {
        position: relative;
        top: 30px;
        left: -40px;
        font-family: Times New Roman, serif;
        font-size: 0.7em;
        color: #b7e4f9;
    }

    header {
        z-index: 1;
        width: 100%;
        height: 60px;
        display: flex;
        background-color: #b7e4f9;
    }

    .topbar__container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .topbar__item {
        font-weight: bolder;
        color: #107897;
        text-decoration: none;
    }

    .work-profile {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.5em 0;
        @media (min-width: 32em){
            flex-direction: row;
            justify-content: space-evenly;
            margin: 2em 0;
        }
    }

    .work-profile__item {
        padding: 0 4px;
        width: 350px;
        height: 400px;
        margin: 0;
    }

    .work-profile__title {
        color: #107897;
    }

    .work-profile__image {
        
        max-width: 100%;
        height: auto;
    }
    
    .work-profile__paragraph {
        color: #505050;
    }
    .work-profile__others {
        color: #404040;
        margin: 1em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            margin: 0 0 1em 0;
        }
    }
    .react-logo {
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .react-logo__image {
        width: 80px;
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
   

    

    @media (prefers-reduced-motion: no-preference) {
        .react-logo__image {
            animation: turning infinite 20s linear;
        }
    }

    @keyframes turning {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>





