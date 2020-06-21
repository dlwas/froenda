<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: $font__montserrat;
    font-display: swap;
    word-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  #app {
    font-size: $font__size;
    color: $text__primary;

    a:link {
      @include resetLinkStyle;
    }

    a:visited {
      @include resetLinkStyle;
    }

    a:hover {
      @include resetLinkStyle;
    }

    a:active {
      @include resetLinkStyle;
    }
  }
</style>