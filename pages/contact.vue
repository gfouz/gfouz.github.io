<template>
    <div class="contact-box">
        <header>
            <div class="contact-header">
                <div class="contact-logo-box">
                    <img src="../assets/images/contact/yellow.png" style="max-width:100%; height: auto;">
                </div>
                <div class="message-box">
                    <div class="message-2">
                        <h3 style="display: inline-block;">TAKE A LOOK !</h3>
                    </div>
                    <div class="message-1">
                        <h3 style="display: inline-block;">CONTACT ME</h3>
                    </div>
                    <div class="message-3">
                        <h3 style="display: inline-block;">AT MY BLOG</h3>
                    </div>
                </div>
            </div>
        </header>
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
            <strong style="margin: 1em 0 10px 0;" class="blur"> </strong>
            <ContactCard></ContactCard>
            <strong style="margin: 1em 0 1em 0;" class="blur">
                JAMSTACK TECHNOLOGY.
            </strong>
        </section>
        <section class="contact-section2">
            <p><strong>YOU MAY ALSO DROP A COMMENT HERE:</strong></p>
            <div style="width: fit-content;margin: 0 auto;">
                <Form></Form>
            </div>

            <strong style="margin: 1em;">
                <a href="http://github.com/gfouz">
                    GITHUB'S PROFILE
                </a>
            </strong>
        </section>
        <footer>
           
                <h4>GFOUZ {{new Date().getFullYear()}}</h4>
                <div class="footer-icons">
                    <Icons></Icons>
              
            </div>

        </footer>
    </div>


</template>

<script>
    import Form from '../components/contact/Form';
    import ContactCard from '../components/contact/ContactCard';
    import Icons from '../components/contact/Icons';
    export default {
        components: {
            Form,
            ContactCard,
            Icons,
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/pages/contact/contact.scss';
    
</style>