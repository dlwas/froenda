<template>
  <div class="home">
    <Header />
    <Projects />
    <Tools />
    <About />
    <Contact />
  </div>
</template>

<script>
  // import Carousel from 'vue-carousel/src/Carousel.vue'
  // import Slide from 'vue-carousel/src/Slide.vue'
  // $i18n.locale = 'pl' // to change
  import Header from '@/components/Header'
  import Projects from '@/components/Projects'
  import Tools from '@/components/Tools'
  import About from '@/components/About'
  import Contact from '@/components/Contact'


  export default {
    name: 'Home',
    components: {
      Header,
      Projects,
      Tools,
      About,
      Contact
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    background-color: red;
  }

  .home {
    position: relative;
    width: 100%;
  }
</style>