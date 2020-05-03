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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>