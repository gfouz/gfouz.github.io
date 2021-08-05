<template>
  <div>
    <footer>
      <div class="home-footer">

        <div class="info">
          <div style="width: 120px;">
            <img src="../../assets/images/homepage/footer/logo.png"
              style="min-width:80px; max-width: 100%; height: auto"/>
          </div>
          <h1>
            GFOUZ &copy;{{new Date().getFullYear()}}
          </h1>
        </div>
        <!-- this is the second element-->
        <div class="photo-container"></div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/pages/homepage/footer';
</style>