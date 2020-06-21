<template>
    <div class="links">
        <a class="links__item" v-for="(itemLink, index) in item" :key="index" :href="itemLink.url">
            {{ $t(`projects.links.${index}`) }}
        </a>
    </div>
</template>

<script>
    export default {
        name: 'GetProjectItemLinks',
        props: {
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
    .links {
        color: black;

        &__item {
            @include showUnderline($color__primary, -.5rem);
            font-family: $font__monda;
            line-height: 125%;
            font-size: 1rem;
            padding: .5rem 1rem;
            cursor: pointer;
            color: $text__secondary !important;
        }
    }
</style>