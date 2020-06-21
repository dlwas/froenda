<template>
    <div class="tools">
        <ArticleWrapper :isRotated="true" />
        <SectionName name="tools" :isDark="true" />

    </div>
</template>

<script>
    import SectionName from '@/components/SectionName.vue'
    import ArticleWrapper from '@/components/ArticleWrapper'

    export default {
        name: 'Tools',
        components: {
            SectionName,
            ArticleWrapper
        }
    }
</script>

<style lang="scss">
    .tools {
        color: $text__primary;
    }
</style>