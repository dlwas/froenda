<template>
    <nav class="navbar">
        <div class="navbar__main">
            <div class="navbar__brand">
                <a href="/">froenda</a>
            </div>
            <div class="navbar__bars">
                <NavbarToggle />
            </div>
        </div>
        <div class="navbar__links" v-show="this.$store.state.mobile.isHigher" :class=" {'navbar__links--active' : this.$store.state.mobile.isHigher} ">
            <div class="links__menu">
                <ul class="menu__links">
                    <li class="menu__item"><a href="#projects">{{ $t(`navbar.projects`) }}</a></li>
                    <li class="menu__item"><a href="#tools">{{ $t(`navbar.tools`) }}</a></li>
                    <li class="menu__item"><a href="#about">{{ $t(`navbar.about`) }}</a></li>
                    <li class="menu__item"><a href="#contact">{{ $t(`navbar.contact`) }}</a></li>
                </ul>
            </div>
            <div class="links__external">
                <div class="external__item">
                    <a href="https:www.instagram.com/_dariuszwasilewski/" rel="noopener" target="_blank">
                        <img src="@/assets/icons/instagram.svg" alt="_dariuszwasilewski | Instagram">
                    </a>
                </div>
                <div class="external__item theme__switcher" @click="toggleTheme">
                    <div class="theme__item"><span>Light</span></div>
                    <div class="theme__item">
                        <div class="theme__base">

                            <div class="theme__dot theme__dot--active" />
                        </div>
                    </div>
                    <div class="theme__item"><span>Dark</span></div>
                </div>
                <div class="external__item lang__switcher" @click="toggleLang">
                    <div class="lang__item" :class="{ 'lang__item--active': !this.$store.state.i18n.isEnglish}">Pl
                    </div>
                    <div class="lang__item" :class="{ 'lang__item--active': this.$store.state.i18n.isEnglish}">En
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import NavbarToggle from '@/components/NavbarToggle'

    export default {
        name: 'SectionNavbar',
        components: {
            NavbarToggle
        },
        methods: {
            toggleTheme() {
                this.$store.commit('toggleTheme')
            },
            toggleLang() {
                this.$store.commit('toggleLang')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .navbar {
        @include setFlexCenter;
        width: 100%;
        height: $navbar__height;
        background-color: $bg__primary;

        &__main {
            @include setFlexCenter;
            @include setContainer;
            width: 100%;
            justify-content: space-between;
        }

        &__brand {
            font-weight: $font__weight__500;
            text-transform: uppercase;
        }

        &__bars {}

        &__links {}

        &--active {}
    }

    .links {

        &__menu {}

        &__external {}

        &--active {}
    }

    .external {

        &__item {}

        &--active {}
    }

    .theme {

        &__switcher {}

        &__item {}

        &__base {}

        &__dot {

            &--active {}
        }
    }

    .lang {

        &__item {

            &--active {}
        }

        &__switcher {}
    }
</style>