<template>
    <!-- navbar--active -->
    <nav class="navbar">
        <div class="navbar__brand">
            <a href="/">froenda</a>
        </div>
        <div class="navbar__other">
            <div class="navbar__links">
                <div class="navbar__linksItem">
                    <Icon linkUrl="https://www.instagram.com/_dariuszwasilewski/" imgUrl="instagram"
                        imgAlt="Instagram | @_dariuszwasilewski" />
                </div>
            </div>
            <div class="navbar__lang" @click="toggleLang">
                <div class="navbar__langItem" :class="{ 'navbar__langItem--active': !this.$store.state.i18n.isEnglish}">
                    Pl
                </div>
                <div class="navbar__langItem" :class="{ 'navbar__langItem--active': this.$store.state.i18n.isEnglish}">
                    En
                </div>
            </div>
        </div>

        <!-- fixed right menu -->
        <div class="navbar__menu">
            <div class="navbar__menuItem" v-scroll-to="'.navbar'">
                <img :src="this.iconDot" alt="Go to: Top">
            </div>

            <div class="navbar__menuItem" />

            <div class="navbar__menuItem" v-scroll-to="'.projects'">
                <img :src="this.iconDot" alt="Go to: Projects">
            </div>
            <div class="navbar__menuItem" v-scroll-to="'.tools'">
                <img :src="this.iconDot" alt="Go to: Tools">
            </div>
            <div class="navbar__menuItem" v-scroll-to="'.about'">
                <img :src="this.iconDot" alt="Go to: About">
            </div>
            <div class="navbar__menuItem" v-scroll-to="'.contact'">
                <img :src="this.iconDot" alt="Go to: Contact">
            </div>

            <div class="navbar__menuItem" />

            <div class="navbar__menuItem" v-scroll-to="'.footer'">
                <img :src="this.iconDot" alt="Go to: Footer">
            </div>
        </div>
    </nav>
</template>

<script>
    import Icon from '@/components/Icon'

    export default {
        name: 'Navbar',
        components: {
            Icon
        },
        methods: {
            toggleLang() {
                this.$store.commit('toggleLang')
            }
        },
        data() {
            return {
                iconDot: require(`../assets/icons/dot.png`)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .navbar {
        @include setContainer(6vw);
        @include setFlexCenter;
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: $navbar__height;
        background-color: $bg__primary;

        // experimental
        // @include setFixed;
        // box-shadow: 0px 2px 8px rgba(102, 102, 102, 0.13);

        &__brand {
            @include setFlexCenter;
            text-transform: uppercase;
            font-weight: $font__weight__500;
            font-size: 1rem;

            a {
                @include setFlexCenter;
                height: 100%;
                padding-top: .5rem;
                padding-bottom: .5rem;
                cursor: pointer;
            }
        }

        &__other {
            @include setFlexCenter;
        }

        &__links {
            margin-right: 1rem;
        }

        &__linksItem {}

        &__lang {
            @include setFlexCenter;
            height: 100%;
        }

        &__langItem {
            @include setFlexCenter;
            @include setSquare(2.25rem);
            cursor: pointer;

            &--active {
                background-color: $bg__secondary;
                color: $text__primary;
            }
        }

        &__menu {
            // @include setFlexCenter;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: fixed;
            z-index: 1000;
            bottom: 2rem;
            right: 2vw;
            height: 100vh;
        }

        &__menuItem {
            padding: .25rem;

            img {
                @include setSquare(1.25rem);
                border-radius: 50%;
                filter: invert(50%);
                cursor: pointer;

                &:hover {
                    background-color: red;
                }
            }
        }
    }
</style>