<template>
    <div class="about">
        <SectionName name="about" />

        <div class="about__texts">
            <p>
                {{ $t("about.items.texts[0]") }}
            </p>
            <p>
                {{ $t("about.items.texts[1]") }}
            </p>
            <p>
                {{ $t("about.items.texts[2]") }}
            </p>
        </div>
    </div>
</template>

<script>
    import SectionName from '@/components/SectionName.vue'

    export default {
        name: 'About',
        components: {
            SectionName
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        color: $text__secondary;
        margin-top: 5rem;


        &__texts {
            @include setContainer(6vw);

            @media #{$mobile} {
                @include setContainer(12vw);
            }

            margin: 0 auto;
            margin-top: 5rem;
            width: 50vw;

            @media #{$mobile},
            #{$mobile-tablet},
            #{$tablet-laptop} {
                width: 100%;
            }

            p {
                padding-bottom: 2rem;
                font-size: 1.125rem;

                &:last-child {
                    padding-bottom: 0rem;
                }
            }
        }


    }
</style>