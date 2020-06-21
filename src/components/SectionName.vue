<template>
    <h3 class="section__name" :class="{'section__name--dark': isDark}">
        {{ $t(`${ this.name }.name`) }}
    </h3>
</template>

<script>
    export default {
        name: 'SectionName',
        props: {
            name: String,
            isDark: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .section {
        &__name {
            @include setContainer;
            font-size: 3rem;
            font-family: $font__monda;
            font-weight: $font__weight__700;
            color: $text__fourth;
            background-color: white;

            @media #{$mobile},
            #{$mobile-tablet},
            #{$tablet-laptop} {
                text-align: center;
            }

            &--dark {
                color: $text__primary;
                background-color: $bg__primary;
            }
        }
    }
</style>