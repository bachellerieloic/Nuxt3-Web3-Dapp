
<script>
export default {
  data: () => ({
    navItems: [
        {
            title: "What is find a coach?",
            icon: "mdi-information-outline"
        },
        {
            title: "Find a Coach",
            icon: "mdi-magnify"
        },
        {
            title: "Coaching Advantage",
            icon: "mdi-bookmark-outline"
        }
    ]
  })
}
</script>

<template>
  <div class="px-3 py-5 d-flex">
    <div class="mx-auto d-flex justify-space-between align-center" style="max-width: 1200px; width: 100%;">
        <NuxtLink to="/" style="text-decoration: none;">
            <v-btn 
                elevation="0"
                rounded="lg"
                class="pa-1 pt-2"
                style="height: 100% !important;"
            >
                <img src="/img/logos/RetireMint_logo.svg" width="180" class="img"/>
            </v-btn>
        </NuxtLink>

        <div class="d-flex justify-space-between" style="column-gap: 20px;">
            <v-btn
                v-for="item in navItems"
                :key="item.title"
                elevation="0"
                rounded="lg"
                class="pa-1 pt-2"
                style="height: 100% !important; font-size: 0.85rem;"
            >
                <v-icon left>
                    {{item.icon}}
                </v-icon>
                {{item.title}}
            </v-btn>
        </div>

        <NuxtLink to="/login" style="text-decoration: none;">
            <v-btn
            class="button"
            rounded
            color="secondary"
            elevation="0"
            style="padding: 13px 20px; font-size: 1.05rem;"
            >
            Sign In
            </v-btn>
        </NuxtLink>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.img
  border-radius: 5px
  transition: background-color 0.2s

.button
  text-transform: none
  font-weight: 700
  font-size: 1.45rem
  padding: 32px 38px
  letter-spacing: normal
  border-radius: 60px
*
  font-family: 'Poppins', sans-serif
</style>