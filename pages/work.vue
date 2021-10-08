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
        <img src="../assets/images/work/slimed.svg" class="downside--wave">
     <section class="github--links">

          <img src="../assets/icons/git-alt.svg" alt="atom" width="80px" />
          <div class="link__list">
              <h3>Follow me on Github!</h3>
              <div class="link__list--items">
                   <a href="http://github.com/gfouz">1 Portfolio 2021 Nuxt</a> 
                   <a href="http://github.com/gfouz">2 Markdown to JSX</a>
                   <a href="http://github.com/gfouz">3 CMS Next JS</a>  
              </div>
          </div>
             <h3>Mobile first and Responsive design</h3>
     </section>
     <article class="picture--section">
         <div class="picture__container">
             <div class="picture__item--container">
                <div class="picture__image1--container"></div>
                 <h3>Awesome Universe!</h3>
             <p>It seems like science fiction—once-bright stars becoming invisible, crushed by their own gravitational force, with nothing, not even light, escaping their grasp. Many astronomers believe that such black holes may be commonplace in the universe. Would you like to know more about them? The story begins in the beautiful northern constellation called Cygnus, meaning “the Swan.”
            </p>
             </div>
             
         </div>
         <div class="picture__container">
             <div class="picture__item--container">
                <div class="picture__image2--container"></div>
                 <h3>Science fiction or reality</h3>
             <p>By the early 1900’s, scientists were beginning to make these visionaries’ dreams come true. According to the book Die Großen, German physicist H.Oberth spent years trying to make Jules Verne’s dreams a reality.But, he was not the only one. “Braun and his colleagues in Germany read Wells and Verne when they were children. They decided that when they grew up, they would make it all come true.”
            </p>
             </div>
             
         </div>
        
         <div class="picture__container">
              <div class="picture__item--container">
                   <div class="picture__image3--container"></div>
                  <h3>Creation or Evolution?</h3>
             <p>Certain features of the circulatory system of trees and plants are so amazing that many scientists regard them as almost miraculous. First, how is the water pumped two or three hundred feet above the ground? Root pressure starts it on its way, but in the trunk another mechanism takes over. Water molecules hold together by cohesion...   read more here: 
                 <a href="https://jw.org">Jw.org</a>
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
         <h4>I use <span>React</span> or VueJS to create web!</h4>
         <img src="../assets/icons/html.svg" width="20px">
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
        grid-template-rows: 70px 70px 300px auto 200px 80px;
        grid-template-columns: 1fr;
    }
    header {
        z-index: 1;
        width: 100%;
        height:70px;
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
    .downside--wave {
        transform: rotateX(180deg);
        position: relative;
        top: -2px;
    }
    .github--links {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items:center;
       h3 {
         text-align: center;
         font-family: literata;
         color: $DARK-GY;
         margin-top: 2em;
         text-transform: uppercase;
       }
    }
    .link__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .link__list--items {
        a {
            display: block;
            color: #009575;
            text-decoration: none;
            font-weight: bolder;
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
        background-image: url('../assets/images/work/stars.jpg');
        background-size: cover;
        background-position: bottom;
    }
     .picture__image2--container {
        width: 100%;
        height: 200px;
        background-image: url('../assets/images/work/matrix.jpg');
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
       .react--logo{
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