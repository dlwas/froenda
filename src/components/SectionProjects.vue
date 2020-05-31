<template>
    <section class="projects">

        <SectionName name="projects" />

        <div class="projects__items" v-for="(itemProject, name, index) in this.$db.projects" :key="index">
            <div class="projects__item" :class="{ 'projects__item--even': index % 2 === 1}">
                <div class="item__image">
                    <h3> {{ $t(`projects.items.${itemProject.name}.name`) }} </h3>
                </div>
                <div class="item__information">
                    <div class="information__description description">
                        <p> {{$t(`projects.items.${itemProject.name}.description`) }} </p>
                    </div>
                    <div class="information__technologies technologies">
                        <div class="technologies__item" v-for="itemTech in itemProject.data.tags" :key="itemTech">
                            {{ itemTech }}
                        </div>
                    </div>
                    <div class="information__links links">
                        <a class="links__item" v-for="(itemLink, index) in itemProject.data.links" :key="index"
                            :href="itemLink.url">
                            <!-- TODO: v-show="$db.root.show.sectionProjects.childs.links[name][itemLink]" -->
                            {{ $t(`projects.links.${index}`) }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="projects__more" v-show="this.$db.root.show.sectionProjects.childs.seeMore">
            <a href="#">
                <p>see more</p>
            </a>
        </div>
    </section>
</template>

<script>
    import SectionName from '@/components/SectionName.vue'

    export default {
        name: 'SectionProjects',
        components: {
            SectionName
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

        &__more {
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
    }

    .item {

        &__image {
            @include setBgImage('../assets/header-background.webp');
            display: flex;
            align-self: center;
            background-size: cover;
            background-attachment: fixed;
            width: 100%;
            min-height: 100%;

            h3 {
                @include setFlexCenter;
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

    .description {
        font-size: 1.25rem;
        line-height: 125%;
    }

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

    .links {
        color: black;

        &__item {
            @include showUnderline($color__primary);
            position: relative;
            font-family: $font__monda;
            line-height: 125%;
            font-size: 1rem;
            padding: .5rem 1rem;
            cursor: pointer;
            color: $text__secondary !important;
        }
    }
</style>