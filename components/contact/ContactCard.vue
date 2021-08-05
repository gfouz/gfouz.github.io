<template>
    <div>
        <div class="contact-card">
            <div class="contact-fr1">
                <div id="triangle">
                    <div class="triangle-content">GFOUZ</div>
                </div>
                <div>
                    <h4>WEB DEVELOPER</h4>
                </div>
            </div>

            <div class="contact-fr2">
                <div class="contact-photo-box"></div>
            </div>

            <div class="contact-fr3">
                <h4>Name: Giovani Fouz Jiménez</h4>
                <h4>Skills:</h4>
                <p>HTML, CSS, SCSS, JAVASCRIPT</p>
                <p>VUE JS, NUXT.</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    .contact-card {
        color: var(--DARK-GY);
        display: flex;
        flex-wrap: wrap;
        width: 270px;
        height: 300PX;
        border: 1px solid rgb(177, 177, 177);
        border-bottom-right-radius: 9px;
        border-bottom-left-radius: 9px;
        background-color: rgb(255, 255, 255);
    }

    .contact-fr1 {
        position: relative;
        width: 50%;
        text-align: center;
        height: 50%;

        h4 {
            color: var(--dark-gr);
            font-style: italic;
        }
    }

    .contact-fr2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50%;
    }

    .contact-fr3 {
        width: 100%;
        height: 50%;

        p {
            margin-left: 1em;
            margin-right: 1em;
        }

        h4 {
            margin-left: 1em;
            margin-top: 2em;
        }
    }

    #triangle {
        width: 0;
        height: 0;
        border-left: 50px solid rgb(68, 65, 65);
        border-right: 50px solid transparent;
        border-top: 50px solid rgb(68, 65, 65);
        border-bottom: 50px solid transparent;
    }

    .triangle-content {
        position: absolute;
        transform: rotate(-45deg);
        top: 35px;
        left: 14px;
        color: rgb(253, 254, 255);
    }

    .contact-photo-box {
        width: 110px;
        height: 90%;
        border-radius: 10px;
        background-image: url('../../assets/images/contact/giov.jpg');
        background-position: center;
        background-size: cover;
    }
</style>