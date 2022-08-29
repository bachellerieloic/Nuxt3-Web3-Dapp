<script>
export default {
  props: {
    areaOfRetirement: {type: String},
    backLink: {type: String}
  },
}

</script>

<script setup>
import { moduleHomepages } from '~/assets/moduleHomepages'
import { reactive } from "vue";

const state = reactive({
  homepages: moduleHomepages
})
</script>


<template>
  <div
    style="position: relative;"
    :style="{minHeight: $vuetify.display.xs ? '450px' : '300px', backgroundColor: state.homepages[areaOfRetirement].bannerColor}"
  >
      <div class="text-center text-white d-flex flex-column align-center banner-text pa-1">
        <h1 class="mb-5">{{state.homepages[areaOfRetirement].title}} Tools</h1>
        <p style="max-width: 400px">{{state.homepages[areaOfRetirement].bannerCopy}}</p>
      </div>
        <img
          class="banner-img"
          style="height: 210px;"
          :src="state.homepages[areaOfRetirement].bannerImg"
        />
    </div>

    <NuxtLink :to="backLink">
        <v-btn
          elevation="2"
          rounded="lg"
          class="pr-4 pl-2 py-3 mx-3 mt-6 back-button"
          variant="text"
          style="font-size: 1.1rem; color: #1d1d1f; font-weight: 400;"
        >
          <v-icon left class="mr-1 mb-0"> mdi-chevron-left </v-icon>
          Back
        </v-btn>
      </NuxtLink>
</template>

<style lang="sass" scoped>
.banner-text
  max-height: 100%
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 500px
  max-width: 100%

.banner-img
  max-height: 100%
  position: absolute
  bottom: 0
  left: calc(50vw + 300px)

h1
  font-weight: 700
  font-size: 3rem

p
  line-height: 1.3
  font-size: 1.3rem
  font-weight: 350

a
  text-decoration: none

.back-button:hover
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s

.back-button:hover
  background-color: #2057b1 !important
  color: white !important
  box-shadow: none !important


*
  font-family: 'Poppins', sans-serif

</style>
