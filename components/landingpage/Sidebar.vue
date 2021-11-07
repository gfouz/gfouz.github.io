<template>
    <div :class="open ? 'sidebar-container--close' : 'sidebar-container--open' ">
        <nav class="navbar__link-list">
            
               
               
                <div  class="navbar__item-box navbar__item--blinking blink--1">
                    <NuxtLink to="/blog" >
                        BLOG
                    </NuxtLink>
                </div>
                 <div class="navbar__item-box navbar__item--blinking blink--2">
                    <NuxtLink to="/work">
                       WORK
                    </NuxtLink>
                </div>
                 <div  class="navbar__item-box navbar__item--blinking blink--3">
                    <NuxtLink to="/about">
                        ABOUT
                    </NuxtLink>
                </div>
                
               
                 
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar',
        props: {
          open: {
            type: Boolean,
          }
        }
       
    }
</script>
<style lang="scss" scoped>
    
    .sidebar-container--open {
        position: absolute;
        top: 0;
        left: 0;
         flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 200px;
        background-color: #cdc058;
        transform: translateX(0);
        transition: 0.3s all;
        @media (max-width: 450px){
            width: 100%;
        }
    }
     .sidebar-container--close {
        position: absolute;
        top: 0;
        left: 0;
         flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 200px;
        background-color: lightblue;
        transform: translateX(-100%);
        transition: 0.3s all;
     }

    .navbar__link-list {
         display: flex;
         flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      
         
    }
    .navbar__item-box {
        margin: 1.3em 0;

    }
    .navbar__item-box a {
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bolder;
           letter-spacing: 3px;
           font-family: fantasy;
          color: rgb(32, 35, 44);
       
    }
    .navbar__item--blinking a {
        color: #000000;
        animation: alert 4s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;

    }
    .blink--1 a {
        animation-delay: 1s;
    }
     .blink--2 a {
        animation-delay:  2s;

    }
     .blink--3 a {
       animation-delay:  3s;
    }



   @keyframes alert {

     from {
       color: #ffffff;

     }

     to {
        color: #000000;
       
     }
   }
   
   
</style>