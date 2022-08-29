<template>
  <div>
    <v-navigation-drawer app v-model="state.isAppDrawerOpened" :expand-on-hover="true" :rail="state.isAppDrawerMinimized">
      <v-list mandatory>
        <div style="height: 56px" class="d-flex px-4 justify-center align-center">
          <img v-if="!state.isAppDrawerMinimized" src="../img/logos/RetireMint_logo.svg" class="w-100" alt="retiremint-logo" style="max-width: 150px"/>
          <img v-if="state.isAppDrawerMinimized" src="../img/logos/RetireMint_icon.svg" class="w-100" alt="retiremint-logo" style="max-width: 40px"/>
        </div>
        <v-divider></v-divider>
        <div class="px-3">
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item.value"
              :to="item.value"
              active-color="secondary"
              :active="checkRouteSelected(item)"
              :variant="checkRouteSelected(item) ? 'elevated' : 'plain'"
              rounded
              class="mt-2 rounded-lg"
              :class="state.isAppDrawerMinimized ? 'px-0' : '' "
          >
            <v-list-item-avatar start :class="state.isAppDrawerMinimized ? 'mx-1' : ''">
              <v-icon :icon="item.icon" :color="checkRouteSelected(item) ? 'white' : ''"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" :class="checkRouteSelected(item) ? '' : 'text-black'"/>
          </v-list-item>
        </div>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon :icon="state.isAppDrawerMinimized ? 'mdi-chevron-right' : 'mdi-chevron-left'"
                          @click="state.isAppDrawerMinimized = !state.isAppDrawerMinimized">
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon class="mr-2" @click="state.isAppDrawerOpened = !state.isAppDrawerOpened">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <NuxtLink to="/myRetireMint" class="text-decoration-none text-shades-black">
          My RetireMint
        </NuxtLink>
      </v-app-bar-title>
      <v-btn v-if="userStore.profile" @click="userStore.logout()">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="d-flex justify-center px-0">
        <slot />
      </v-container>
    </v-main>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useAppStore } from '/stores/app';
import { useUserStore } from '/stores/user';
const route = useRoute()

console.log('ROUTE PATH', route.path)

const state = reactive({
  isAppDrawerOpened: true,
  isAppDrawerMinimized: false,
  model: route.path
})

const items = [
  {
    text: 'Home',
    value: '/myRetireMint',
    icon: 'mdi-account-circle'
  },
  {
    text: 'Areas Of >> Retirement',
    value: '/myRetireMint/areas-of-retirement',
    icon: 'mdi-map-marker'
  },
  {
    text: 'Find A Coach',
    value: '/find-a-coach',
    icon: 'mdi-map-marker'
  },
  {
    text: 'My Profile',
    value: '/profile',
    icon: 'mdi-account-circle'
  },
  {
    text: 'Assessments',
    value: '/myRetiremint/assessments',
    icon: 'mdi-playlist-check'
  },
]

let findRouteMenuItem = items.find((item) => item.value === route.path)
console.log('findRouteMenuItem',findRouteMenuItem)

const titleFormat = (title) => {
  if(!title.contains('>>')) return title

  const titleSplit = title.split('>>')
  return titleSplit[0] + '/n' + titleSplit[1]
}

const checkRouteSelected = (item) => {
  if(item.value === route.path) return true
  else if(item.value !== '/' && route.path.includes(item.value)) return true

  return false
}


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
  console.log('HERE 1', err);
}
</script>
