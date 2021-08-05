<template>
<div> 
    <header>
        <div class="contact-header">
            <div class="contact-logo-box">
                <img src="" style="max-width:100%; height: auto;">
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
</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>

   .contact-header {
        position: relative;
        text-align: center;
        background-color: rgb(68, 65, 65);
        width: 100%;
        height: 100px;
        color: rgb(255, 238, 0);
        font-size: 25px;
         }   

  .contact-logo-box {
        position: relative;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
    }
      
        .message-box {
            font-size: 20px;
             @media (max-width:599px) {
            font-size: 14px;
        
             }
        }
</style>



