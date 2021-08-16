<template>
    <div>
        <div class="form-container">
            <div class="form-box">
                <form action="http://formspree.io/gfouz1975@gmail.com" method="POST">
                    <div>
                        <label class="lable-style" for="input-name"></label>
                        <div class="form-items">
                            <input type="text" name="name" class="text-inputs" placeholder="Your name here!">
                        </div>
                        <label class="lable-style" for="email"></label>
                        <div class="form-items">
                            <input type="email" name="_replyto" class="text-inputs" placeholder="Your email address!">
                        </div>
                        <label class="lable-style" for="message" </label>
                            <div class="form-items">
                                <textarea name="body" class="text-inputs msg-area" placeholder="Message"></textarea>
                            </div>

                            <p><input type="submit" value="Submit" class="dark-btn"></p>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    form {
        display: inline-block;
    }

    .form-container {
        max-width: 400px;
        height: auto;
        background-color: rgb(13, 14, 29);
    }

    .form-items {
        padding: 0.5em 0;
    }



    .form-box {
        text-align: center;
        width: 320px;
        margin: 0 auto;
        background-color: $contact-base;
    }



    .dark-btn {
        color: $burnt-yellow;
        background-color: rgb(63, 60, 60);
        padding: 0.7em 2em;
        margin: 1em auto 2em auto;
        font-weight: bolder;
        border-radius: 9px;
        border:1px solid transparent;
    }

    .dark-btn:hover {
        border: 0.3px dashed greenyellow;
        color: rgb(8, 248, 28);
        background-color: rgb(0, 0, 0);
    }



    .text-inputs {
        border: 1px solid $LIGHT-GY;
        border-radius: 8px;
        text-align: left;
        text-indent: 1em;
        height: 50px;
        width: 320px;
        resize: none;
        color: white;
        background-color: $contact-base;
    }

    .msg-area {
        resize: none;
        height: 130px;

    }
</style>