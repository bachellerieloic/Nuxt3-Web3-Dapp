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

              <v-form class="mx-auto" @submit.prevent="login()">
                <input type="email" name="email" style="position:absolute; opacity: 0;">
                <input type="password" name="password" style="position:absolute; opacity: 0;">
                <v-text-field
                    v-model="state.formLogin.email"
                    label="E-mail"
                    type="text"
                    color="primary"
                    variant="solo"
                    @keyup.enter="() => login()"
                />
                <v-text-field
                    v-model="state.formLogin.password"
                    type="password"
                    name="input-10-1"
                    label="Password"
                    variant="solo"
                    color="primary"
                    @keyup.enter="() => login()"
                ></v-text-field>
                <v-btn
                    color="secondary"
                    class="background-gradient gr mx-auto px-8 mb-4"
                    :loading="userStore.loginFormLoading"
                    rounded
                    @click="login"
                >
                  SIGN IN
                </v-btn>
              </v-form>

              <v-row class="mx-auto text-center">
                <v-col cols="12" class="pb-0">
                  <span class="">Don't have an account?</span>
                  <v-btn
                      variant="text"
                      size="small"
                      class="px-2 text-capitalize"
                      to="/register"
                  >
                    Register
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="state.errors" class="mt-4 text-center">
                <v-alert v-for="(error, index) in state.errors" :key="index" dismissible type="error">
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


<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../stores/user';
const userStore = useUserStore()
const layout = 'auth'

const state = reactive({
  showPassword : false,
  loading : false,
  formError : null,
  formLogin : {
    email: '',
    password: ''
  },
  errors : []
})

const login = () => userStore.login(state.formLogin)

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

<style lang="sass" scoped>
.error
  color: red

.v-text-field__details
  margin-bottom: 0
</style>

