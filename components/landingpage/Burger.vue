<template>

  <button @click = "clicked">
    <div   :class = "isOpen ? 'primary-light up' : 'primary-dark'"></div>
    <div   :class = "isOpen ? 'primary-light middle' : 'primary-dark'"></div>
    <div   :class = "isOpen ? 'primary-light down' : 'primary-dark'"></div>
  </button>

</template>
<script>
  export default {
    
    data: () => {
      return {
        isOpen: false,
      }
    },
    methods: {
         clicked () {
        if (this.isOpen == true) {
          this.isOpen = false;
          this.$emit("toggle", this.isOpen);
        } else {
          this.isOpen = true;
          this.$emit("toggle", this.isOpen);
        }

      }
    }
  }

</script>
<style lang="scss" scoped>
  button {
    position: absolute;
    top: 7%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }

  .primary-dark {
    background-color:black;
    transition: all 0.5s;
  }
  .primary-light {
    background-color: white;
    transition: all 0.5s;
    }
  .up {
    transform: rotate(33deg);
  }

  .middle {
    transform: translateX(20px);
    background-color: transparent;
  }
  .down {
    transform: rotate(-33deg);
  }
  div {
    width: 2rem;
    height: 0.3rem;
    margin: 0.1em 0;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
   
  }
  
</style>