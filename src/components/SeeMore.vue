<template>
    <div class="more" v-show="this.$db.root.show.sectionProjects.childs.seeMore">
        <a :href="this.url">
            <p>{{$t('utilities.seemore') }}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'SeeMore',
        props: {
            url: String
        }
    }
</script>

<style lang="scss" scoped>
    .more {
            @include setFlexCenter;
            margin-top: 10rem;
            margin-bottom: 5rem;
            color: $text__secondary;

            p {
                padding: .75rem 2.25rem;
                color: $text__secondary;
                font-family: $font__monda;
                border: 1px solid $text__secondary;
                cursor: pointer;
            }
        }
</style>