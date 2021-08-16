<template>
    <div class="icons-container">
        <!-- Es importante definir el atributo width dentro de la clase
                     "logo-container" pues de lo contrario no se visualizan los iconos-->
        <div class="container-all">
             <div class="icon-names">
                <div><a href="http://https://api.whatsapp.com/send?phone=+5354278815">WHATSAPP</a></div>
                <div><a href="http://https://api.whatsapp.com/send?phone=+5354278815">TELEGRAM</a></div>
                <div><a href="http://gfouz.github.io">GITHUB</a></div>
                <div><a href="http://youtube.com">YOUTUBE</a></div>
             </div>
            <div class="icons-position">
                <div v-for="(item, index) in items" :key="index">
                    <a :href="item.href">
                        <div class="each-logo">
                            <img :src="require(`~/assets/icons/${item.name}.svg`)" />
                            <!-- style="max-width: 100%; height: auto; margin: 0.5em;"-->
                        </div>

                    </a>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        data: () => {
            return {
                items: [
                    { name: "whatsapp", href: "https://api.whatsapp.com/send?phone=+5354278815" },
                    { name: "telegram", href: "https://api.whatsapp.com/send?phone=+5354278815" },
                    { name: "github", href: "https://github.com/gfouz" },
                    { name: "youtube", href: "https://youtube.com" }
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    .icons-container {
        width: 320px;
        margin: 0 auto;
    }
    .icon-names {
        width: 319px;
        display: flex;
        justify-content:space-evenly;
        font-size: 0.8em;
        a {
            color: white;
            text-decoration: none;
        }
    }
    .container-all {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: auto;
        /* margin: 2em 0 0 0; */
    }

    .icons-position {
        display: flex;
    }
  
    .each-logo {
        margin: 0 1em;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 40px;
        height: 40px;

        img {
            width: 20px;
            height: auto;
        }
    }
</style>