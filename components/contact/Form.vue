<template>
<div> 
    <div class="form-container">
        <div class="form-header">CONTACT ME</div>
        <img src="../../assets/images/contact/wave.svg" class="inverted-wave">
        <div class="form-box">
            <form action="http://formspree.io/giovanifjimenez@gmail.com" method="POST">
                <div>
                    <label class="lable-style" for="input-name">name</label>
                    <p><input type="text" name="name" class="text-inputs" id="input-name"></p>
                    <label class="lable-style" for="email">email</label>
                    <p><input type="email" name="_replyto"  class="text-inputs" id="email"></p>
                    <label class="lable-style" for="message">message</label>
                    <p><textarea name="body" class="text-inputs msg-area" id="message"></textarea></p>
                   
                    <p><input type="submit" value="Submit" class="wave-form-btn"></p>
                </div>
            </form>
        </div>
        <img src="../../assets/images/contact/wave.svg">
        <div class="form-footer"></div>
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
    position: relative;
    width: 270px;
    height: fit-content;
    /* border: 1px solid var(--LIGHT-GY); */
    background-color: white;
}

.form-header {
    position: relative;
    top: 1px;
	font-style: italic;
	font-weight: bolder;
	font-size: 20px;
	line-height: 50px;
	width: 100%;
	height: 10%;
	color: white;
	text-align: center;
    text-shadow: 0px 0px 9px black;
	background-color: rgb(240, 240, 240);
}
.form-box {
	width: 70%;
	margin: 0 auto;
	
}
.inverted-wave {
	transform: scale(-1);
}
.wave-form-btn {
	color: rgb(4, 0, 5);
	background-color: rgb(170, 170, 170);
	padding: 0.5em 1em;
    margin: 0.5em auto;
	font-weight: bolder;
	border-radius: 9px;
	border: 1px solid rgb(255, 255, 255);
    
}
.wave-form-btn:hover {
    color: rgb(8, 248, 28);
    background-color: rgb(226, 226, 226);
}
.form-footer {
    position: relative;
    bottom: 5px;
    width: 100%;
    height: 10%;
    background-color: rgb(214, 211, 211);
}
.text-inputs {
  border: 1px solid rgb(224, 224, 224);
  text-align: center;
  height: 25px;
  resize: none;
  border-radius: 5px;
}
.msg-area {
    resize: none;
    height: 40px;
}
.lable-style {
    color: rgb(133, 10, 81);
    font-weight: bolder;
}
</style>


