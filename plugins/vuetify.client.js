import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const customTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#0A42A5',
        'primary-darken-1': '#3700B3',
        secondary: '#20b97c',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#bfeaff',
        success: '#4CAF50',
        warning: '#FB8C00',
        caution: '#EED202',
        redWarning: '#CC0202',

        psychologyOfRetirement: '#6AD39E',
        fitnessWellness: '#20B97C',
        activitiesHobbies: '#20B97C',
        socialChangeAndVolunteering: '#007d71',
        travel: '#55DDD1',
        livingDownsizing: '#93EAE4',
        assistingTheNextGeneration: '#8AD8FF',
        healthcareDentalPhysiotherapy: '#BAE8FF',
        financialPlanning: '#071777',
        estatePlanningLaw: '#1F57B1',
        insurance: '#479AD6',
        retirementIncome: '#023284',
        assistingNextGeneration: '#8ad8ff'
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'customTheme',
            themes: {
                customTheme,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
