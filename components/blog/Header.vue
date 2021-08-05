<template>
  <div>
    <header class="header">
      <nav class="nav">
        <a href="http://github.com/gfouz" class="logo nav-link">gfouz</a>
        <button :class="isToggle ? 'nav-toggle' : 'nav-toggle nav-toggle_180deg'" @click="toggleNavMenu">
          <div style="width: 20px;"><img src="../../assets/icons/bars.svg"></div>
        </button>
        <!--this is the toggle button-->
        <ul :class="isToggle ? 'nav-menu' : 'nav-menu nav-menu_visible'">
          <li class="nav-menu-item">
            <NuxtLink to="/">
              <div style="display: flex;">
                <div class="nav-menu-icons">
                  <img src="../../assets/icons/home.svg" alt="home" width="15px">
                </div>
                <p class="nav-menu-link">home</p>
              </div>

            </NuxtLink>
          </li>
          <!-- this is about link to about link -->
          <li class="nav-menu-item">
            <NuxtLink to="/about">
              <div style="display: flex;">
                <div class="nav-menu-icons">
                  <img src="../../assets/icons/info.svg" alt="about" width="10px">
                </div>
                <p class="nav-menu-link">about</p>
              </div>
            </NuxtLink>
          </li>

          <!-- this is contact link to contact link -->
          <li class="nav-menu-item">
            <NuxtLink to="/contact">
              <div style="display: flex;">
                <div class="nav-menu-icons">
                  <img src="../../assets/icons/phone-square-alt.svg" alt="about" width="15px">
                </div>
                <p class="nav-menu-link">contact</p>
              </div>
            </NuxtLink>
          </li>
          <li class="nav-menu-item">
            <div class="flex-container">
              <div class="nav-menu-icons">
                <img src="../../assets/icons/github-white.svg" alt="about" width="15px">
              </div>
              <a href="https://github.com/gfouz">
                <span class="nav-menu-link">github profile</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isToggle: true,
      }
    },
    methods: {
      toggleNavMenu() {
        if (this.isToggle == true) {
          this.isToggle = false;
        } else {
          this.isToggle = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/pages/blog/header';
</style>



