<template>
    <div class="header">
        <div class="header__bg">
            <div class="header__background">
                <div class="background__layer" />
                <div class="background__image" />
            </div>
            <ArticleWrapper />
            <div class="header__arrows">
                <img src="@/assets/icons/arrows.svg" alt="arrows icon">
            </div>
        </div>
        <div class="header__temp temp">
            <p class="temp__title">
                Welcome
            </p>
            <p class="temp__subtitle">
                I'm Dariusz
            </p>
            <p class="temp__trade">
                Front-end Web Developer
            </p>
            <p class="temp__quote">
                Encoding the future with passion and commitment
            </p>
            <button class="temp__btn">
                I would like to see projects
            </button>
        </div>
    </div>
</template>

<script>
    import ArticleWrapper from '@/components/ArticleWrapper'

    export default {
        components: {
            ArticleWrapper
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        @include positionTopLeft;
        position: relative;
        width: 100%;
        height: 100vh;

        &__background {
            @include backgroundSizes;
        }

        &__temp {
            @include backgroundSizes;
            @include positionTopLeft;
            position: absolute;
            padding-top: $navbar__height;
        }

        &__arrows {
            @include setFlexCenter;
            margin: 3.5vh 0;
            cursor: pointer;
        }
    }

    .background {

        &__layer {
            position: absolute;
            z-index: -100;
            width: 100%;
            height: 80%;
            background-color: $bg__primary;
        }

        &__image {
            position: absolute;
            z-index: -99;
            width: 100%;
            height: 80%;
            background-image: url('../assets/header-background.webp');
            background-repeat: repeat-x;
            background-position: top;
            background-size: auto;
            // background-attachment: fixed;
            opacity: 2%;
        }
    }

    .temp {

        &__title {}

        &__subtitle {}

        &__trade {}

        &__quote {}

        &__btn {}
    }
</style>