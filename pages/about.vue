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
                        are really interesting to me. Things such as React and Express JS have drawn all my attention so
                        that i have studied these technologies. But more recently i discovered one of the best and
                        modern tools that is used to create web applications and i refer to Vue JS and its ecosystem
                        which
                        is my focus of attention right now.

                    </p>
                </div>

                <div>
                    <div class="first__stage--image-container">
                        <div class="first__stage--sphere1">frontend-developer</div>
                        <div class="first__stage--sphere2"></div>
                        <div class="first__stage--icon">
                            <a href="http://github.com/gfouz">
                                <img src="../assets/images/about/green/github.svg" width="30px">
                                <p>See my work!</p>
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            <section class="second--stage">
                <img src="../assets/images/about/wave.svg" class="wave1">
                <div class="second__stage--childs-container">
                    <div class="second__stage--child1">
                        <h4>SOME SKILLS</h4>
                        <p>
                            I use modern JavaScript frameworks such as React and
                            Vue to create single page application or full static
                            sites so that among my skills are HTML, CSS, SCSS and
                            JAVASCRIPT. And i am not afraid of getting out of the
                            comfort zone and trying out new things.
                        </p>
                    </div>
                    <div class="second__stage--child2">
                        <img src="../assets/images/about/responsive.jpg" alt="responsive">
                        <h4>RESPONSIVE DESIGN</h4>
                    </div>
                </div>
                <img src="../assets/images/about/wave.svg" class="wave2">
            </section>

            <section class="third--stage">
                <div class="third__stage--projects-links">
            
                    <div class="third__stage--projects-list">
                        <h3>Follow me on github!</h3>
                        <a href="http://github.com/gfouz">Portfolio 2021 Nuxt JS</a>
                        <a href="http://github.com/gfouz">Markdown to JSX</a>
                        <a href="http://github.com/gfouz">CMS Next JS</a>
                    </div>
                    
                </div>
                <div class="third__stage--image">
                      <img src="../assets/images/about/atom.png" alt="atom" >
                      <p>Lover of React and Vue JS</p>
                </div>
            </section>
            <article>
                <div><Icons></Icons></div> 
            </article>
            <footer>
                <h3>GFOUZ&copy;{{new Date().getFullYear()}}</h3>
               
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
        grid-template-rows: 100px auto auto auto 100px 100px;
        grid-template-columns: 1fr;

    }

    .first--stage {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .first__stage--article {
        width: 320px;
        height: 300px;
        margin: 1em 0;

        h3 {
            margin: 0.5em 0;
            color: #009575;
        }
    }

    .first__stage--image-container {
        position: relative;
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
        height: 120px;
        color: #009575;
        border-radius: 50%;
        font-size: 10px;
        text-transform: uppercase;
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
        color: #009575;

        a {
            color: rgb(0, 149, 117);
        }

        p {
            font-weight: bolder;
        }
    }

    .second--stage {
        position: static;
        width: 100%;
        height: auto;

        @media (max-width: 660px) {
            position: relative;
            height: 640px;
        }
    }

    .second__stage--childs-container {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        display: flex;
        width: 100%;
        height: 250px;
        background-color: rgb(53, 51, 51);
        margin-top: -4px;
    }

    .second__stage--child1 {
        width: 320px;
        height: 170px;
        color: #ffffff;
        h4 {
            letter-spacing: 0.4em;
        }
    }

    .second__stage--child2 {
        width: 320px;
        height: 170px;
        color: #ffffff;
        font-family: literata;
        letter-spacing: 0.5em;

        @media (max-width: 660px) {
            position: absolute;
            bottom: 20px;
            height: 190px;
            margin: 1em auto;

            h4 {
                color: $DARK-GY;

            }
        }

        img {
            max-width: 100%;
            height: auto;

        }
    }

    .wave1 {
        position: relative;
        top: 2px;
    }

    .wave2 {
        position: relative;
        top: -2px;
        transform: rotateX(180deg);
    }
    .third--stage {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        padding: 2em 0;
    }
    .third__stage--projects-links{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 320px;
        height: auto;
        color: $DARK-GY;
        
         a {
            padding: 0.3em 0;
            display: block;
             color: #009575;
            text-decoration: none;
         }
    }
    .third__stage--projects-list {
        text-align: left;
    }
    .third__stage--image {
        width: 320px;
        height: auto;
        padding: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
            width: 130px;
        }
        p {
            margin: 0.5em 0;
        }
    }
    article {
       div {
         margin: 0 auto;
       }
    }
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: green;
        letter-spacing: 0.5em;
    }
</style>