<template>
    <h3 class="section__name">
        {{ $t(`${ this.name }.name`) }}
    </h3>
</template>

<script>
    export default {
        name: 'SectionName',
        props: {
            name: {
                type: String
            }
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

            @media #{$mobile},
            #{$mobile-tablet},
            #{$tablet-laptop} {
                text-align: center;
            }
        }
    }
</style>