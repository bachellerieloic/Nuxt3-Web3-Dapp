<template>
  <NuxtLayout name="default">
    <v-row class="">
      <v-col cols="12" class="text-center">
        <NuxtLink href="/">
          <img src="/img/logos/RetireMint_logo.svg" :width="$vuetify.display.xs ? 250 : 300" class="mx-auto pb-0 mb-6" alt="retiremint-logo"/>
        </NuxtLink>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn :to="'/login'">Login</v-btn>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn :to="'/register'">Register</v-btn>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()
</script>
