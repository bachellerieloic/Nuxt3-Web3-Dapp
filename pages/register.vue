<script setup>
import {mapActions} from 'pinia'
import { useUserStore } from '../stores/user';
// const { currentRoute } = useRouter()
const userStore = useUserStore()
const layout = 'auth'
// const imageUrl = require('~/assets/keedly.svg')

const showPassword = false
const loading = false
const formError = null
const formLogin = {
  email: '',
  password: ''
}
const errors = []

const login = () => userStore.login()

// valid: false,
//     emailRules: [
//   v => !!v || 'E-mail is required',
//   v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
// ],
//     passwordRules: [
//   v => !!v || 'Password is required',
//   v => (v || '').length >= 5 || 'Min 5 characters',
//   v => (v || '').length <= 20 || 'Max 20 characters'
// ]

</script>


<template>
  <NuxtLayout name="auth">
    <v-card class="rounded-lg mt-10">
      <v-card-text>
        <v-row align="center">

          <v-col cols="12" class="mx-auto text-center px-0">
            <v-responsive max-width="450" class="mx-auto text-center pa-4 pa-sm-8">
              <div class="mb-6">
                <NuxtLink href="/">
                  <img src="/img/logos/RetireMint_logo.svg" :width="$vuetify.display.xs ? 250 : 300" class="mx-auto pb-0 mb-6" alt="retiremint-logo"/>
                </NuxtLink>
              </div>
              <v-form class="mx-auto" @submit.prevent="login">
                REGISTER FORM
              </v-form>
              <v-row class="mx-auto text-center mt-6">
                <v-col cols="12" class="pb-0">
                  <span class="">Already have an account?</span>
                  <v-btn
                      variant="text"
                      size="small"
                      class="px-2 text-capitalize"
                      to="/login"
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="errors" class="mt-4 text-center">
                <v-alert v-for="(error, index) in errors" :key="index" dismissible type="error">
                  {{ error }}
                </v-alert>
              </v-row>
            </v-responsive>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </NuxtLayout>
</template>

<style lang="sass" scoped>
.error
  color: red

.v-text-field__details
  margin-bottom: 0
</style>

