export default {
    state: {
        isMobile: true,
        isHigher: false, // this.$store.state.mobile.isHigher
        showMobileNavbar: true
    },
    mutations: {
        toggleNavbarMobile(state, commit) {
            commit('setIsMobile', !state.isMobile)
            commit('setIsHigher', !state.isHigher)
        },
        setIsMobile(state, isTrue) {
            state.isMobile = isTrue
        },
        setIsHigher(state, isTrue) {
            state.isHigher = isTrue
        },
        toggleShowMobileNavbar(state) {
            state.showMobileNavbar = !state.showMobileNavbar
        },
        setShowMobileNavbar(state, isTrue) {
            state.showMobileNavbar = isTrue
        }
    }
}