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
    font-family: $font-montserrat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>