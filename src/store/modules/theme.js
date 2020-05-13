export default {
    state: {
        isLight: true,
        switcherUrl: '@/assets/switcher-light.svg'
    },
    mutations: {
        toggleTheme(state) {
            state.isLight = !state.isLight
        }
    }
}