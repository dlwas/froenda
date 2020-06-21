<template>
    <!-- navbar--active -->
    <nav class="navbar">
        <div class="navbar__brand">
            <a href="/">froenda</a>
        </div>
        <!-- <div class="navbar__links" @click="toggleLang">
            <div class="navbar__linksItem">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>
        </div> -->
        <div class="navbar__lang" @click="toggleLang">
            <div class="navbar__langItem" :class="{ 'navbar__langItem--active': !this.$store.state.i18n.isEnglish}">
                Pl
            </div>
            <div class="navbar__langItem" :class="{ 'navbar__langItem--active': this.$store.state.i18n.isEnglish}">
                En
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
            toggleLang() {
                this.$store.commit('toggleLang')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        @include setContainer;
        @include setFlexCenter;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: $navbar__height;
        background-color: $bg__primary;

        &__brand {
            @include setFlexCenter;
            height: 100%;
            text-transform: uppercase;
            font-weight: $font__weight__500;
            font-size: 1rem;

            a {
                @include setFlexCenter;
                height: 100%;
            }
        }

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
    }
</style>