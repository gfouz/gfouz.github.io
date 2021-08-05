<template>
    <!-- Es importante definir el atributo width dentro de la clase
         "logo-container" pues de lo contrario no se visualizan los iconos-->
    <div class="container-all">
        <div v-for="(item, index) in items" :key="index">
            <a :href="item.href">
                <div class="each-logo">
                    <img :src="require(`~/assets/icons/green/${item.name}.svg`)"
                        style="max-width: 100%; height: auto; margin: 0.5em;" />
                </div>

            </a>
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

<style scoped>
    .container-all {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 130px;
    }
    .each-logo {
        width: 35px;
    }
</style>