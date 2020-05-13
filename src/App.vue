<template>
  <div id="app">
    <SectionNavbar />
    <router-view />
    <SectionFooter />
  </div>
</template>

<script>
  import SectionNavbar from '@/components/SectionNavbar.vue'
  import SectionFooter from '@/components/SectionFooter.vue'

  export default {
    name: 'App',
    components: {
      SectionNavbar,
      SectionFooter
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