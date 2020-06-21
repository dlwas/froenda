<template>
    <div class="icon">
        <a v-if="linkUrl" :href="linkUrl" class="iccon__link">
            <img :src="getImageUrl" :alt="getImageAlt" :target="imgTarget">
        </a>
        <div v-else class="icon__noLink">
            <img :src="getImageUrl" :alt="getImageAlt" :target="imgTarget">
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
            }
        }
    }
</script>

<style lang="scss">
    .icon {
        @include setFlexCenter;
        @include setSquare(5rem);

        img {
            width: 100%;
            height: 100%;
        }

        &__link {
            @include resetLinkStyle;

            a {
                img {
                    color: green;
                }
            }
        }

        &__noLink {
            a {
                img {
                    color: green;
                }
            }
        }
    }
</style>