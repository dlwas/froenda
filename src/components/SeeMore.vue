<template>
    <div class="seemore">
        <a :href="this.url">
            <p>{{$t(`utilities.${name}`)}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'SeeMore',
        props: {
            url: String,
            name: String
        }
    }
</script>

<style lang="scss" scoped>
    .seemore {
        @include setFlexCenter;
        margin-top: 5rem;
        margin-bottom: 5rem;
        color: $text__secondary;

        p {
            padding: .75rem 2.25rem;
            color: $text__secondary;
            font-family: $font__monda;
            border: 1px solid $text__secondary;
            cursor: pointer;

            &:hover {
                color: $text__primary;
                background-color: $bg__secondary;
            }
        }
    }
</style>