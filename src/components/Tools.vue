<template>
    <div class="tools">
        <ArticleWrapper :isRotated="true" />
        <SectionName name="tools" :isDark="true" />

        <div class="tools__content">
            <div class="column">
                <h3 class="content__subtitle">
                    {{ $t("tools.items.main") }}
                </h3>
                <div class="content__icons row">
                    <!-- <Icon imgUrl="tech/xxx" title="xxx" /> -->
                    <Icon imgUrl="tech/html" title="html" />
                    <Icon imgUrl="tech/css" title="css" />
                    <Icon imgUrl="tech/sass" title="sass" />
                    <Icon imgUrl="tech/js" title="javascript" />
                    <Icon imgUrl="tech/vue" title="vue.js" />
                    <Icon imgUrl="tech/figma" title="figma" />
                </div>
            </div>
            <div class="column">
                <h3 class="content__subtitle">
                    {{ $t("tools.items.other") }}
                </h3>
                <div class="content__icons row">
                    <Icon imgUrl="tech/bulma" title="bulma" />
                    <Icon imgUrl="tech/bootstrap" title="bootstrap" />
                    <Icon imgUrl="tech/gsap" title="gsap" />
                    <Icon imgUrl="tech/fontawesome" title="fontawesome" />
                    <Icon imgUrl="tech/nuxt" title="nuxt" />
                </div>
            </div>
            <div class="column">
                <h3 class="content__subtitle">
                    {{ $t("tools.items.basic") }}
                </h3>
                <div class="content__icons row">
                    <Icon imgUrl="tech/php" title="php" />
                    <Icon imgUrl="tech/phpmyadmin" title="phpmyadmin" />
                    <Icon imgUrl="tech/csharp" title="csharp" />
                </div>
            </div>
        </div>

        <ArticleWrapper />
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
        @include setContainer;
        color: $text__primary;

        &__content {
            @include setContainer;
            padding-top: 3rem;
            padding-bottom: 5rem;
            background-color: $bg__primary;
        }
    }

    .content {
        @include setContainer;
        background-color: $bg__primary;

        &__subtitle {
            margin-top: 5rem;
            font-size: 1rem;
            font-weight: $font__weight__400;
        }

        &__icons {
            display: flex;
            flex-wrap: wrap;
            margin-top: 2rem;

            @media #{$mobile},
            #{$mobile-tablet},
            #{$tablet-laptop} {
                @include setFlexCenter;
            }
        }
    }

    .icon {
        margin: 2rem;
    }
</style>