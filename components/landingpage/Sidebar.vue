<template>
    <div :class="open ? 'sidebar__container-close' : 'sidebar__container-open' ">
        <nav class="navbar__links">
            
               
               
                <div class="nav__item">
                    <NuxtLink to="/blog">
                        BLOG
                    </NuxtLink>
                </div>
                 <div class="nav__item">
                    <NuxtLink to="/about">
                        ABOUT
                    </NuxtLink>
                </div>
                
                <div class="nav__item">
                    <NuxtLink to="/work">
                       WORKS
                    </NuxtLink>
                </div>
                 <div class="nav__item">
                    <NuxtLink to="/contact">
                       CONTACT
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
    .sidebar__container-open {
        position: absolute;
        top: 0;
        left: 0;
         flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 200px;
        background-color: #ffffff;
        transform: translateX(0);
        transition: 0.3s all;
        @media (max-width: 450px){
            width: 100%;
        }
    }
     .sidebar__container-close {
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

    .navbar__links {
         display: flex;
         flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      
         
    }
    .nav__item {
         list-style-type: none;
          margin: 1rem 0;
        a{
           
            text-decoration: none;
            font-size: 1.2rem;
            font-family: literata;
            color: rgb(32, 35, 44);

        }
       
    }
   
   
</style>