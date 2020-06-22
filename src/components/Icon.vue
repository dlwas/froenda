<template>
    <div class="icon">
        <a v-if="linkUrl" :href="linkUrl" :target="imgTarget" class="icon__link">
            <img :src="getImageUrl" :alt="getImageAlt">
        </a>
        <div v-else class="icon__noLink">
            <img :src="getImageUrl" :alt="getImageAlt">
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
                default: "icon title"
            }
        }
    }
</script>

<style lang="scss">
    .icon {
        @include setFlexCenter;

        &__link {
            @include resetLinkStyle;

            img {
                @include setSquare(1.5rem);
                cursor: pointer;
            }
        }

        &__noLink {
            @include showUnderline($color__primary, -1.5rem);
            flex-direction: column;

            img {
                @include setSquare(5rem);
            }
        }

        &__title {
            @include setFlexCenter;
            margin-top: .5rem;
            font-size: .75rem;
            font-weight: $font__weight__400;
            color: $text__third;
            text-transform: uppercase;
        }
    }
</style>