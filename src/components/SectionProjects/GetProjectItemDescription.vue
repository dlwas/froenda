<template>
    <div class="description">
        <p> {{$t(`projects.items.${item}.description`) }} </p>
    </div>
</template>

<script>
    export default {
        name: 'GetProjectItemDescription',
        props: {
            item: String
        }
    }
</script>

<style lang="scss" scoped>
    .description {
        font-size: 1.25rem;
        line-height: 125%;
    }
</style>