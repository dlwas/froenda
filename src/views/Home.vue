<template>
  <div class="home">
    <SectionHeader v-show="this.$db.root.show.sectionHeader.this" />
    <SectionProjects v-show="this.$db.root.show.sectionProjects.this" />
    <SectionTools v-show="this.$db.root.show.sectionTools.this" />
  </div>
</template>

<script>
  // import Carousel from 'vue-carousel/src/Carousel.vue'
  // import Slide from 'vue-carousel/src/Slide.vue'
  // $i18n.locale = 'pl' // to change
  import SectionHeader from '@/components/SectionHeader'
  import SectionProjects from '@/components/SectionProjects'
  import SectionTools from '@/components/SectionTools'


  export default {
    name: 'Home',
    components: {
      SectionHeader,
      SectionProjects,
      SectionTools
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