<template>
    <div>
        <footer>
            <div class="footer-links">
                <h2>GFOUZ {{new Date().getFullYear()}}</h2>
                <div style="width: fit-content; margin: 0 auto;">
                    <Icons></Icons>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    import Icons from './Icons';
    export default {
        components: {
            Icons,
        }
    };
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/pages/contact/_footer.scss';
</style>