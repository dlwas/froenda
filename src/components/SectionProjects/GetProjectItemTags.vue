<template>
    <div class="technologies">
        <div class="technologies__item" v-for="itemTag in this.item" :key="itemTag">
            {{ itemTag }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GetProjectItemTags',
        props: {
            item: Array
        }
    }
</script>

<style lang="scss" scoped>
    .technologies {

        &__item {
            font-family: $font__monda;
            line-height: 125%;
            font-size: .8rem;
            margin: .25rem;
            padding: .5rem 1rem;
            background-color: rgba($bg__primary, 0.1);
            color: $text__secondary;
        }
    }
</style>