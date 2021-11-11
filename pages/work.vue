<template>
    <div class="grid--container">
        <div class="main">
            <h1 class="main__title">Work<span class="main__author">By GFOUZ</span></h1>
        </div>
        <header class="topbar">
            <NuxtLink to="/" class="topbar__item">home</NuxtLink>
            <NuxtLink to="/blog" class="topbar__item">blog</strong></NuxtLink>
            <NuxtLink to="/about" class="topbar__item">about</NuxtLink>
            <NuxtLink to="/contact" class="topbar__item">contact</NuxtLink>
        </header>

        <section class="work-profile">
            <div class="work-profile__item">
                <img alt="men at work 51524010 yailin" src="../assets/images/work/studying.png"
                    class="work-profile__image">
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
                <img alt="NextJs logo" src="../assets/icons/next.svg" width="140px" class="work-profile__icon">
                <div class="work-profile__content">
                    <h3 class="work-profile__title">NextJs is a two-edged "sword"</h3>
                    <p class="work-profile__paragraph">
                        It's super fast With the help of Server-side rendering and static-site generation
                        loads the site blazing fast. It's SEO friendly, you can customize your own
                        <meta> tags to improve your Search Engine Optimisation.
                        Wide features out of the box: minifying javascript, doing code splitting, lazy loading,
                        prefetching assets and much more...<span> <a href="https://nextjs.org">official site</a> </span>
                    </p>
                    <div class="work-profile__bias">
                         <img alt="award icon" src="../assets/icons/award.svg" width="20px">
                        <h5 class="work-profile__title">I enjoy working with ReactJs</h5>
                    </div>
                </div>
            </div>
        </section>
        <section class="react-logo">
            <img alt="atom icon" src="../assets/images/work/atoms.png" class="react-logo__image">
        </section>

        <article class="github-projects">

             <div class="github-projects__container">
                <h3 class="github-projects__title">SOME OF MY SKILLS</h3>
                <h5 class="github-projects__skill">HTML</h5>
                <h5 class="github-projects__skill">CSS</h5>
                <h5 class="github-projects__skill">JAVASCRIPT</h5>
                <img src="../assets/images/work/programmer.png" alt="programmer" class="github-projects__image">
                <h5>I use ReactJs & VueJs Technologies</h5>
            </div>

            <div class="github-projects__container">
               <div >
                     <h3 class="github-projects__title">GITHUB'S PROJECTS</h3>
                <div class="github-projects__link-container">
                   <a href="https://github.com/gfouz" class="github-projects__link">SSG with NuxtJs</a>
                   <a href="https://github.com/gfouz" class="github-projects__link">CMS with NextJs</a>
                   <a href="https://github.com/gfouz" class="github-projects__link">Express Server NodeJS</a>
                </div>
                
                
                <div class="github-projects__picture">.</div>
                <div class="github-projects__subcontainer">
                     <p>I see great advantages to work</p>
                     <p>with SCSS or SASS and</p>
                     <p>styled-components is among my</p>
                     <p>favorite css in js technologies.</p>
                </div>
              </div>
               
               
          </div>
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
        font-family: Times New Roman, serif;
        background: url('../assets/images/work/flowers.jpg') no-repeat top right;
        background-size: cover;
    }

    .main__title {
        color: #b7e4f9;
        font-size: 2.5em;
    }

    .main__author {
        position: relative;
        top: 30px;
        left: -40px;
        font-size: 0.7em;
        color: #b7e4f9;
    }

    .topbar {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: #b7e4f9;
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
        &__item {
             display: flex;
             flex-direction: column;
             justify-content: flex-start;
             align-items: center;
             padding: 0 4px;
             width: 350px;
             height: 400px;
             margin: 0;

        }

        @media (min-width: 32em) {
            flex-direction: row;
            justify-content: space-evenly;
            margin: 2em 0;
        }
    }

    
    .work-profile__title {
        margin: 1em 0 0 0;
        color: #107897;
    }

    .work-profile__image {

        max-width: 100%;
        height: auto;
    }
    .work-profile__icon {
        align-self: flex-start;
    }

    .work-profile__paragraph {
        color: #505050;
    }

    .work-profile__bias {
        color: #404040;
        margin: 1em 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            margin: 1em 0;
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

    .github-projects {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        color: #607d8b;
        margin: 2em 0;

        @media (min-width: 32em) {
            flex-direction: row;
            justify-content: space-evenly;
        }

        &__container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 350px;
            height: 300px;
            margin: 1em 0;
        
        }

        &__subcontainer {
            
            margin: 1em 0;
        }

        &__image {
            max-width: 100%;
            height: auto;
        }
        &__picture {
            margin: 1em 0 0 0;
            color: transparent;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: url('../assets/images/work/gfouz.png') no-repeat top;
            background-size: 50px;
        }
        &__link {
            display: block;
            color: inherit;
            text-decoration: none;
        }
        &__icon {
           display: block;
           margin: 2em auto;
        }

    
    }



    footer {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #107897;
        background-color: #b7e4f9;
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
     /* extra classes */ 
    .flex-evenly {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>