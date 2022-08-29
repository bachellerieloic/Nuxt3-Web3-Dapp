<template>
  <div>
    <Link rel="preconnect" href="https://fonts.googleapis.com"/>
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <Link
        href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap"
        rel="stylesheet"
    />
    <v-app>
      <NuxtPage/>
<!--      <v-footer class="justify-center">-->
<!--        <div class="text-uppercase text-caption mr-4">-->
<!--          <span>RetireMint © {{ new Date().getFullYear() }}. All Rights Reserved</span>-->
<!--        </div>-->
<!--      </v-footer>-->

      <v-snackbar
          v-model="appStore.snackBar.state"
          :timeout="appStore.snackBar.timeOut"
          :color="appStore.snackBar.colour"
          location="bottom right"

      >
        {{ appStore.snackBar.message }}
        <template v-slot:actions>
          <v-btn
              variant="text"
              @click="appStore.setSnackbar({
                state: false,
              })"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-app>
  </div>
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
  console.log('HERE 2', err);
}


</script>
