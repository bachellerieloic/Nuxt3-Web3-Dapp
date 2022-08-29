import { defineStore } from 'pinia'
import { useAppStore } from './app'
import {getUser} from "~/src/graphql/queries";
import { useRouter } from "nuxt/app";
import {API, graphqlOperation} from "@aws-amplify/api";
import { useStorage } from '@vueuse/core'

import { useAssessmentStore } from "./assessment";

// import { useNuxtApp } from '#app'
// const { $auth } = useNuxtApp();

export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: null,
        authenticatedUser: useStorage('authenticatedUser', null),
        user: useStorage('user', {}),
        profile: useStorage('profile', {}),
        loginFormLoading: false,
        registerFormLoading: false
    }),
    actions: {
        setNewValue(newValue) {
            this.user = newValue
        },
        async login (formLogin) {
            const router = useRouter()
            // evt.preventDefault();
            this.loginFormLoading = true
            console.log('HERE login', formLogin)
            try {
                const amplifyUser = await this.auth.signIn(formLogin.email, formLogin.password);
                if(amplifyUser) {
                    console.log('amplifyUser', amplifyUser)
                    this.authenticatedUser = amplifyUser
                    const { data } = await API.graphql(
                        graphqlOperation(getUser, { id: amplifyUser.attributes.sub })
                    )
                    if(data.getUser) {
                        console.log('data getUser', getUser)
                        this.appStoreGetter.setSnackbar({
                            state: true,
                            message: 'Hi ' + data.getUser.profile.displayName + ', you are logged in',
                            colour: 'secondary',
                            timeout: 10000
                        })
                        if(data.getUser.profile) {
                            this.profile = data.getUser.profile
                        }

                        if(data.getUser.assessments && data.getUser.assessments.items) {
                            this.assessmentStoreGetter.assessments = data.getUser.assessments.items
                        }
                        delete data.getUser.profile
                        this.user = data.getUser
                    }
                    console.log('data', data)
                    router.push('/myRetireMint')
                }
                this.loginFormLoading = false
            } catch (error) {
                this.loginFormLoading = false
                console.log('HERE error ----> ', error)
                // setIsLoading(false)
                // if(error.code === 'UserNotFoundException') {
                //     setErrorMessage('No user was found with this email address')
                // }
                // if(error.code === 'NotAuthorizedException') {
                //     setErrorMessage('Make sure you have the correct password')
                // }
                //
                // setTimeout(() => {
                //     setErrorMessage(null)
                // }, 10000)
            }
        },

        async logout() {
            const router = useRouter()
            try {
                await this.auth.signOut();
                await router.push('/')
                this.user = null
                this.profile = null
            } catch (err) {
                console.log(err);
            }
        }

    },
    getters: {
        // user: state => this.user,
        appStoreGetter: () => useAppStore(),
        assessmentStoreGetter: () => useAssessmentStore()
    },
})
