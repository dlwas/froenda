import i18n from '@/i18n'

export default {
    state: {
        currentLang: i18n.locale,
        isEnglish: true
    },
    mutations: {
        toggleLang(state) {
            state.isEnglish = !state.isEnglish
            i18n.locale = state.isEnglish ? 'en' : 'pl'
        }
    }
}