<template>
    <div class="header">
        <div class="header__bg">
            <div class="header__background">
                <div class="background__layer" />
                <div class="background__image" />
            </div>
            <ArticleWrapper />
            <div class="header__arrows">
                <img src="@/assets/icons/arrows.svg" alt="arrows icon" v-scroll-to="'.projects'">
            </div>
        </div>
        <div class="header__temp temp">
            <p class="temp__title"> {{ $t('header.title') }} </p>
            <p class="temp__subtitle"> {{ $t('header.subtitle') }} </p>
            <p class="temp__trade">{{ $t('header.trade') }} </p>
            <p class="temp__quote"> {{ $t('header.quote') }} </p>
            <button class="temp__btn" v-scroll-to="'.projects'"> {{ $t('header.btn') }} </button>
        </div>
    </div>
</template>

<script>
    import ArticleWrapper from '@/components/ArticleWrapper'

    export default {
        name: "Header",
        components: {
            ArticleWrapper
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        @include setPositionTopLeft;
        position: relative;
        width: 100%;
        height: 100vh;

        &__background {
            @include setBackgroundSizes;
        }

        &__temp {
            @include setBackgroundSizes;
            @include setPositionTopLeft;
            position: absolute;
            padding-top: $navbar__height;
        }

        &__arrows {
            @include setFlexCenter;
            margin: 3.5vh 0;

            img {
                cursor: pointer;
            }
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
            background-attachment: fixed;
            opacity: 0.08;
        }
    }

    .temp {
        @include setContainer(6vw);

        @media #{$mobile} {
            @include setContainer(12vw);
        }

        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__title {
            font-size: 4rem;
            font-weight: $font__weight__700;
            height: 4.5rem;

            @media #{$mobile} {
                font-size: 3rem;
            }
        }

        &__subtitle {
            font-size: 3.75rem;
            font-weight: $font__weight__500;
            height: 4.5rem;

            @media #{$mobile} {
                font-size: 2.75rem;
            }
        }

        &__trade {
            margin-top: 1rem;
            color: $text__third;
            font-size: 1rem;
        }

        &__quote {
            margin-top: 4rem;
            font-size: 1rem;
        }

        &__btn {
            @include setFlexCenter;
            margin-top: 1rem;
            padding: .75rem 2.25rem;
            width: 70%;
            outline: none;
            border: none;
            font-family: $font__monda;
            font-size: 1rem;
            cursor: pointer;

            color: $text__primary;
            background-color: $bg__secondary;

            &:hover {
                color: $text__secondary;
                background-color: white;
            }

            @media #{$mobile} {
                width: 100%;
            }
        }
    }
</style>