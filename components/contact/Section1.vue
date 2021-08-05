<template>
    <div>
        <section class="contact-section1">
            <div class="pages-links">
                <div>
                    <NuxtLink to="/">
                        <h4>HOME</h4>
                    </NuxtLink>
                    <NuxtLink to="/blog">
                        <h4>BLOG</h4>
                    </NuxtLink>
                    <NuxtLink to="/about">
                        <h4>ABOUT</h4>
                    </NuxtLink>
                    <NuxtLink to="/contact">
                        <h4>CONTACT</h4>
                    </NuxtLink>
                </div>

            </div>
            <strong class="blur">
                PORTFOLIO MADE WITH NUXT.
            </strong>
            <ContactCard></ContactCard>
            <strong class="blur" style="margin: 1em 0 1em 0;">
                JAMSTACK TECHNOLOGY.
            </strong>
        </section>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/pages/contact/_sectionOne';
   
</style>