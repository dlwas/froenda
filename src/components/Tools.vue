<template>
    <div class="tools">
        <ArticleWrapper :isRotated="true" />
        <SectionName name="tools" :isDark="true" />

        <div class="row">
            <div class="column">
                <Icon imgUrl="" imgAlt="icon" />
            </div>
        </div>
        <div class="row">
            <h3 class="subClass"></h3>
            <Icon imgUrl="tech/html" />
            <Icon imgUrl="tech/css" />
            <Icon imgUrl="tech/sass" />
            <Icon imgUrl="tech/vue" />
            <Icon imgUrl="tech/js" />
            <Icon imgUrl="tech/figma" />
        </div>
    </div>
</template>

<script>
    import SectionName from '@/components/SectionName.vue'
    import ArticleWrapper from '@/components/ArticleWrapper'
    import Icon from '@/components/Icon'

    export default {
        name: 'Tools',
        components: {
            SectionName,
            ArticleWrapper,
            Icon
        }
    }
</script>

<style lang="scss">
    .tools {
        color: $text__primary;
    }
</style>