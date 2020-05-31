<template>
    <section class="projects">

        <SectionName name="projects" />

        <div class="projects__items" v-for="(itemProject, name, index) in this.$db.projects" :key="index">
            <div class="projects__item" :class="{ 'projects__item--even': index % 2 === 1}">
                <GetProjectItemImageAndName :item="itemProject.name"/>
                <div class="item__information">
                    <GetProjectItemDescription :item="itemProject.name" class="information__technologies" />
                    <GetProjectItemTags :item="itemProject.data.tags" class="information__technologies" />
                    <GetProjectItemLinks :item="itemProject.data.links" class="information__links" />
                </div>
            </div>
        </div>

        <SeeMore url="#seemore" />
    </section>
</template>

<script>
    import SectionName from '@/components/SectionName.vue'

    import SeeMore from '@/components/SeeMore.vue'

    import GetProjectItemImageAndName from '@/components/SectionProjects/GetProjectItemImageAndName.vue'
    import GetProjectItemTags from '@/components/SectionProjects/GetProjectItemTags.vue'
    import GetProjectItemLinks from '@/components/SectionProjects/GetProjectItemLinks.vue'
    import GetProjectItemDescription from '@/components/SectionProjects/GetProjectItemDescription.vue'

    export default {
        name: 'SectionProjects',
        components: {
            SectionName,
            SeeMore,
            GetProjectItemImageAndName,
            GetProjectItemTags,
            GetProjectItemLinks,
            GetProjectItemDescription
        }
    }
</script>

<style lang="scss" scoped>
    .projects {
        margin-top: 5rem;
        padding-top: 5rem;
        position: relative;

        &__items {
            margin-top: 7rem;
            display: flex;
            flex-direction: column;
        }

        &__item {
            @include setContainer;
            margin-top: 20rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
            display: flex;

            background-color: $bg__third;

            @media #{$mobile},
            #{$mobile-tablet},
            #{$tablet-laptop} {
                margin-top: 10rem;
                flex-direction: column;
            }

            &--even {

                @media #{$laptop-desktop},
                #{$desktop-widescreen},
                #{$fullhd} {
                    flex-direction: row-reverse;
                }
            }
        }
    }

    .item {

        &__information {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-self: center;
            color: $text__fourth;

            @media #{$laptop-desktop},
            #{$desktop-widescreen},
            #{$fullhd} {
                padding-left: 2rem;
                padding-right: 2rem;
            }
        }
    }

    .information {

        &__description {
            display: flex;
            margin-bottom: 2rem;
        }

        &__technologies {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }

        &__links {
            display: flex;
        }
    }
</style>