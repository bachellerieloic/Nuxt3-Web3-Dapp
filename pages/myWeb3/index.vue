<template>
  <NuxtLayout name="app">
    <v-row class="mt-10 justify-center d-flex">
      <v-col cols="12" class="text-center">
        <NuxtLink href="/">
          <img src="/img/logos/RetireMint_logo.svg" :width="$vuetify.display.xs ? 250 : 300" class="mx-auto pb-0 mb-6" alt="retiremint-logo"/>
        </NuxtLink>
      </v-col>
      <v-col cols="6" class="mx-auto text-center">
        <v-btn :to="'/myRetiremint/assessments'" class="mx-auto">Assessments</v-btn>
      </v-col>
      <v-col v-if="userStore.profile && userStore.profile.id" cols="12" class="text-center">
        <h2>You are</h2>
        <h2>{{ userStore.profile.displayName }}</h2>
        <br/>
        <div v-for="[key, value] in Object.entries(userStore.profile)" :key="key" >
          {{ key }} : {{ value }}
        </div>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script setup>
// Here, the auth object from the plugin is injected and used.
import { useAppStore } from '/stores/app';
import { useUserStore } from '/stores/user';
const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
import { useNuxtApp } from "#app";
const { $auth } = useNuxtApp();
userStore.auth = $auth
let currentAuthenticatedUser = undefined;
try {
  currentAuthenticatedUser = await $auth.currentAuthenticatedUser();
  console.log('currentAuthenticatedUser', currentAuthenticatedUser)
} catch (err) {
  console.log('HERE 3', err);
}


</script>
