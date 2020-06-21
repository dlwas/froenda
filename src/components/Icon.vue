<template>
    <div class="icon">
        <a v-if="linkUrl" :href="linkUrl" class="iccon__link">
            <img :src="getImageUrl" :alt="getImageAlt" :target="imgTarget">
            <div class="icon__title">
                {{ title }}
            </div>
        </a>
        <div v-else class="icon__noLink">
            <img :src="getImageUrl" :alt="getImageAlt" :target="imgTarget">
            <div class="icon__title">
                {{ title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Icon',
        computed: {
            getImageUrl() {
                if (this.imgUrl | !this.imgUrl == "") {
                    return require(`../assets/icons/${this.imgUrl}.svg`)
                } else {
                    return require(`../assets/icons/missingIcon.svg`)
                }
            },
            getImageAlt() {
                if (this.imgAlt | !this.imgAlt == "") {
                    return this.imgAlt
                } else {
                    return `icon ${this.imgUrl}`
                }
            }
        },
        props: {
            linkUrl: {
                type: String,
                default: ""
            },
            imgUrl: String,
            imgAlt: String,
            imgTarget: {
                type: String,
                default: "_blank"
            },
            title: {
                type: String,
                default: "ion title"
            }
        }
    }
</script>

<style lang="scss">
    .icon {
        @include setFlexCenter;
        @include setSquare(5rem);

        img {
            @include setSquare(5rem);
        }

        &__link {
            @include resetLinkStyle;
        }

        &__noLink {}

        &__title{
            @include setFlexCenter;
            margin-top: .5rem;
            font-size: .75rem;
            font-weight: $font__weight__400;
            color: $text__third;
            text-transform: uppercase;
        }
    }
</style>