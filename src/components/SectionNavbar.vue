<template>
    <!-- navbar--active -->
    <nav class="navbar" :class="{ 'navbar--active': !this.$store.state.mobile.isMobile }">
        <div class="navbar__left">
            <div class="navbar__leftBrand">
                <div class="navbar__brand">
                    <a href="/">froenda</a>
                </div>
                <div class="navbar__bars">
                    <NavbarToggle />
                </div>
            </div>
            <div class="navbar__leftLinks">
                <div class="navbar__links">
                    <ul>
                        <li class="links__item"><a href="#projects">{{ $t(`navbar.projects`) }}</a></li>
                        <li class="links__item"><a href="#tools">{{ $t(`navbar.tools`) }}</a></li>
                        <li class="links__item"><a href="#about">{{ $t(`navbar.about`) }}</a></li>
                        <li class="links__item"><a href="#contact">{{ $t(`navbar.contact`) }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="navbar__right">
            <div class="right__item social__item">
                <a href="https:www.instagram.com/_dariuszwasilewski/" rel="noopener" target="_blank">
                    <img src="@/assets/icons/instagram.svg" alt="_dariuszwasilewski | Instagram">
                </a>
            </div>
            <div class="right__item theme__switcher" @click="toggleTheme">
                <div class="theme__item"><span>Light</span></div>
                <div class="theme__item">
                    <div class="theme__base">
                        <div class="theme__dot theme__dot--active" />
                    </div>
                </div>
                <div class="theme__item"><span>Dark</span></div>
            </div>
            <div class="right__item lang__switcher" @click="toggleLang">
                <div class="lang__item" :class="{ 'lang__item--active': !this.$store.state.i18n.isEnglish}">Pl
                </div>
                <div class="lang__item" :class="{ 'lang__item--active': this.$store.state.i18n.isEnglish}">En
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
    // active =/= desktop
    .navbar {
        @include setContainer;
        @include setFlexCenter;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        background-color: $bg__primary;
        padding-top: 1.5rem;

        &__left {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        &__leftBrand {
            @include setFlexCenter;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        &__brand {
            text-transform: uppercase;
            font-weight: $font__weight__500;
        }

        &__leftLinks {
            @include setFlexCenter;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }

        &__links {
            width: 100%;
            height: 100%;

            ul {
                width: 100%;
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                text-align: center;
                font-size: 3rem;
            }
        }

        &__bars {}


        &__right {
            @include setFlexCenter;
            width: 100%;
            // height: 100%;
        }
    }

    .links {

        &__item {}
    }

    .right {
        &__item {
            @include setFlexCenter;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: .5rem;
            font-size: 1rem;
        }
    }

    .theme {
        &__item {
            @include setFlexCenter;
            width: 100%;
            height: 100%;
            // @include setSquare(2rem);
        }
    }

    .lang {
        &__item {
            @include setFlexCenter;
            width: 100%;
            height: 100%;
        }
    }

    .social {
        &__item {
            @include setFlexCenter;
            width: 100%;
            height: 100%;
        }
    }

    // active == desktop
    .navbar--active {
        @include setContainer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: auto;
        height: $navbar__height;
        background-color: $bg__primary;
        // padding-top: 1.5rem;

        & .navbar__left {
            width: auto;
            height: 100%;
            display: flex;
            flex-direction: row;
        }

        & .navbar__leftBrand {
            width: auto;
            display: flex;
            justify-content: flex-start;
        }

        & .navbar__brand {
            text-transform: uppercase;
            font-weight: $font__weight__500;
        }

        & .navbar__leftLinks {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            margin-top: 0rem;
            margin-left: 2rem;
        }

        & .navbar__links {
            width: auto;
            height: 100%;
            display: flex;
            flex-direction: row;

            ul {
                width: auto;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                text-align: center;
                align-items: center;
                font-size: 1rem;
            }
        }

        & .navbar__bars {}


        & .navbar__right {
            @include setFlexCenter;
            width: auto;
            height: 100%;
        }
    }

    .navbar--active,
    .links {

        &__item {
            padding: 0rem 1rem;
        }
    }

    .navbar--active,
    .right {
        &__item {
            @include setFlexCenter;
            width: auto;
            display: flex;
            justify-content: flex-start;
            padding: .5rem;
            font-size: 1rem;
        }
    }

    .navbar--active,
    .theme {
        &__item {
            @include setFlexCenter;
            width: auto;
            height: 100%;
            // @include setSquare(2rem);
        }
    }

    .navbar--active,
    .lang {
        &__item {
            @include setFlexCenter;
            width: auto;
            height: 100%;
        }
    }

    .navbar--active,
    .social {
        &__item {
            @include setFlexCenter;
            width: auto;
            height: 100%;
        }
    }
</style>