import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            snackBar: {
                state: false,
                message: '',
                colour: 'secondary',
                timeOut: 10000
            }
        }
    },

    actions: {
        setSnackbar(snackbarValues) {
            this.snackBar = snackbarValues
        },
    },
    // getters: {},
})
