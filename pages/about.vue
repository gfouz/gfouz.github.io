<template>
    <div>
        <div class="about--container">
            <header>
                <Header></Header>
            </header>
               <section class="first--stage">
                  <div class="first__stage--article">
                          <h3>Brief introduction</h3>
                    <p>
                      I began learning C plus plus in 2017 in order to write firmwares for
                      micro-controllers. I was studying this language for more than a year
                      but eventually i heard talk about Node js and its great advantages,
                      and from that time on i haven't quit learning because these things
                      are really interesting to me. Things such as React and Express JS have drawn all my attention so that i have studied these technologies. But more recently i discovered one of the best and modern tools that is used to create web applications and i refer to Vue JS and its ecosystem which
                      is my focus of attention right now.
                
                    </p>
                  </div>

                  <div>
                      <div class="first__stage--image-container">
                          <div class="first__stage--sphere1">frontend developer</div>
                          <div class="first__stage--sphere2"></div>
                          <div class="first__stage--icon">
                            <a href="http://github.com/gfouz">
                                  <img src="../assets/images/about/green/github.svg" width="30px">
                                  <p>SEE MY WORK HERE!</p>
                            </a>
                           
                          </div>
                      </div>
                  </div>
               </section>
            <footer>
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
   .about--container {
    min-height: 100vh;
     display: grid;
     grid-template-rows: 100px auto 100px;
     grid-template-columns: 1fr;
   }
   .first--stage {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-evenly;
     align-items: center;
   }
   .first__stage--article {
     color: $DARK-GY;
     width: 320px;
     height: 300px;
     margin: 1em 0;
     h3 {
        margin: 0.5em 0;
     }
   }
   .first__stage--image-container {
      position: relative;
      border: 1px solid #000000;
      width: 320px;
      height: 300px;
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .first__stage--sphere1 {
       position: absolute;
       top: 0;
       right: 20px;
       width: 120px;
       height:120px;
       border-radius: 50%;
       font-size: 14px;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       background-color: rgba(212, 212, 212, 0.300);
   }
   .first__stage--sphere2 {
       width: 150px;
       height: 150px;
       border-radius: 50%;
       background-image: url('../assets/images/about/about.jpg');
       background-size: cover;
       background-position: center;
      
   }
   .first__stage--icon {
      position: absolute;
      bottom: 30px;
      left: 50px;
      font-family: literata;
      color: darkgreen;
      a {
        color: #1ab601;
      }
   }
</style>