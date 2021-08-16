<template>
    <div class="contact-box">
        <header>
            <div class="contact-header">
                <div class="contact-logo-box">
                    <img src="../assets/images/contact/yellow.png" style="max-width:100%; height: auto;">
                </div>
                <div class="contact-navbar">
                      <NavBar></NavBar>
                </div>
            </div>
        </header>
        <section class="contact-section1">
            <div class="contact-info">
                <div class="contact-title">
                    <h1>HOW ARE YOU?</h1>
                </div>
                
                <div class="email-and-phone">
                    <div class="contact-email">
                        <h4>WRITE ME:</h4>
                        <a href="mailto:gfouz1975@gmail.com">
                            <h2>gfouz1975@gmail.com</h2>
                        </a>
                    </div>
                    <div class="contact-phone">
                        <h4>CALL ME:</h4>
                        <a href="+5354278815">
                            <h2>+5354278815</h2>
                        </a>
                    </div>
                </div>
                <div class="icons-section">
                        <Icons></Icons>
                </div>

            </div>

        </section>


        <section class="contact-section2">

            <div style="width: fit-content;margin: 0 auto;">
                <Form></Form>
            </div>
        </section>



        <footer>

            <h4>GFOUZ &copy; {{new Date().getFullYear()}}</h4>

        </footer>
    </div> 


</template>

<script>
    import NavBar from '../components/global/NavBar';
    import Form from '../components/contact/Form';
    import ContactCard from '../components/contact/ContactCard';
    import Icons from '../components/contact/Icons';
    export default {
        components: {
            NavBar,
            Form,
            ContactCard,
            Icons,
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/pages/contact/contact.scss';
</style>