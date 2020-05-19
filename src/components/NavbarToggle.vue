<template>
    <img :src="this.$store.state.mobile.showMobileNavbar ? openUrl : closeUrl"
        v-show="this.$store.state.mobile.isMobile" @click="toggleNavbarMobile()" alt="mobile switcher">
</template>

<script>
    import {
        debounce
    } from 'vue-debounce'

    export default {
        data() {
            return {
                openUrl: 'icons/navbar-bars.svg',
                closeUrl: 'icons/navbar-times.svg',
                innerWidth: ''
            }
        },
        methods: {
            toggleNavbarMobile() {
                this.$store.commit('toggleShowMobileNavbar')
            },
            handleWindowResize(event) {
                this.innerWidth = window.innerWidth
                const debounceFn = debounce(() => {
                    this.setMobileData()
                }, '400ms')
                debounceFn(event)
            },
            setMobileData() {
                if (this.innerWidth <= 769) {
                    this.$store.commit('setIsMobile', true)
                    this.$store.commit('setIsHigher', false)
                } else {
                    this.$store.commit('setIsMobile', false)
                    this.$store.commit('setIsHigher', true)
                }
            }
        },
        mounted() {
            this.handleWindowResize()
            window.addEventListener('resize', this.handleWindowResize)
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleWindowResize)
        }
    }
</script>

<style lang="scss" scoped>
    img {
        @include setSquare(1rem)
    }
</style>