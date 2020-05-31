<template>
    <div class="image">
        <h3> {{ $t(`projects.items.${item}.name`) }} </h3>
    </div>
</template>

<script>
    export default {
        name: 'GetProjectItemImageAndName',
        props: {
            item: String
        }
    }
</script>

<style lang="scss" scoped>
    .image {
        @include setBgImage('../../assets/header-background.webp');
        display: flex;
        align-self: center;
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        min-height: 100%;

        h3 {
            @include setFlexCenter;
            text-align: center;
            background-color: rgba($bg__primary, 0.7);
            width: 100%;
            font-size: 4rem;
            font-weight: $font__weight__700;
        }

        @media #{$mobile},
        #{$mobile-tablet},
        #{$tablet-laptop} {
            margin-bottom: 3rem;
            margin-top: -15vw;
            min-height: 40vh;
        }

        @media #{$mobile} {
            margin-bottom: 2rem;
            min-height: 30vh;
        }

        @media #{$laptop-desktop},
        #{$desktop-widescreen},
        #{$fullhd} {
            margin-top: -5vw;
            min-height: 37vh;
        }
    }
</style>