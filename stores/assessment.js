import { defineStore } from 'pinia'
import { useAppStore } from './app'
import { useUserStore } from "./user";
import {getAssessment, getUser, listAssessments} from "~/src/graphql/queries";
import { useRouter } from "nuxt/app";
import {API, graphqlOperation} from "@aws-amplify/api";
import { useStorage } from '@vueuse/core'

// import { useNuxtApp } from '#app'
// const { $auth } = useNuxtApp();

export const useAssessmentStore = defineStore('assessmentStore', {
    state: () => ({
        assessments: useStorage('assessments', []),
    }),
    actions: {
        addSavedAssessment (assessment) {
            this.assessments.push(assessment)
        }
        // async login (formLogin) {
        //     const router = useRouter()
        //     // evt.preventDefault();
        //     this.loginFormLoading = true
        //     console.log('HERE login', formLogin)
        //     try {
        //         const amplifyUser = await this.auth.signIn(formLogin.email, formLogin.password);
        //         if(amplifyUser) {
        //             console.log('amplifyUser', amplifyUser)
        //             this.authenticatedUser = amplifyUser
        //             const { data } = await API.graphql(
        //                 graphqlOperation(getUser, { id: amplifyUser.attributes.sub })
        //             )
        //             if(data.getUser) {
        //                 this.appStoreGetter.setSnackbar({
        //                     state: true,
        //                     message: 'Hi ' + data.getUser.profile.displayName + ', you are logged in',
        //                     colour: 'secondary',
        //                     timeout: 10000
        //                 })
        //                 if(data.getUser.profile) {
        //                     this.profile = data.getUser.profile
        //                 }
        //                 delete data.getUser.profile
        //                 this.user = data.getUser
        //             }
        //             console.log('data', data)
        //             router.push('/myRetireMint')
        //         }
        //         this.loginFormLoading = false
        //     } catch (error) {
        //         this.loginFormLoading = false
        //         console.log('HERE error ----> ', error)
        //         // setIsLoading(false)
        //         // if(error.code === 'UserNotFoundException') {
        //         //     setErrorMessage('No user was found with this email address')
        //         // }
        //         // if(error.code === 'NotAuthorizedException') {
        //         //     setErrorMessage('Make sure you have the correct password')
        //         // }
        //         //
        //         // setTimeout(() => {
        //         //     setErrorMessage(null)
        //         // }, 10000)
        //     }
        // },
    },
    getters: {
        // user: state => this.user,
        appStoreGetter: () => useAppStore(),
        userStoreGetter: () => useUserStore()
    },
})
