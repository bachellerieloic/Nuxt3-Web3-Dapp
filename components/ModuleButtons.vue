
<script>
export default {
  props: {
    color: {
      default: "primary",
      type: String,
      validator (value) {
        return ["primary", "secondary", "tertiary"].includes(value)
      }
    }
  },
}
</script>

<script setup>
import { moduleButtons } from '~/assets/moduleButtons'
import { reactive } from "vue";

const state = reactive({
  areas: {}
})

state.areas = moduleButtons

const getTextSize = (vuetify, inital = 16, scaling = 5) => {
  let maxSize = 1280;
  return (inital + scaling * Math.min(vuetify.display.width, maxSize) / maxSize) + 'px'
}
</script>

<template>
  <div>
    <v-container 
      class="grey lighten-5 mb-6"
      style="max-width: 950px;"
    >
      <v-row>
        <v-col 
          class="pa-0"
          md="3"
          sm="4"
          cols="6"
          v-for="area in state.areas" 
          :key="area.title" 
        >
          <NuxtLink :to="'/keysToRetirement/'+area.link" style="text-decoration: none;">
            <v-card 
              class="px-3 px-sm-8 pt-2 pt-sm-4 rounded-xl card"
              :style="{background: 'linear-gradient(to top,' + area.bottomColor + ' 0px, ' + area.bottomColor + ' 50px, ' + area.primary + ' 50px, ' + area.primary + ' 100%)'}"
            >
              <div 
                :style="{height: '100%', rowGap: '10px'}"
                class="d-flex flex-column justify-space-between"
              >
                <span 
                  style="font-weight: 700; color: white;"
                  :style="{fontSize: getTextSize($vuetify, (area.baseSize) && area.baseSize )}"
                >
                  {{ area.title }}
                </span>
                <div :style="{maxWidth: area.width, width: '100%', position: 'relative'}" class="mx-auto d-flex flex-shrink-1 flex-grow-1">
                  <v-img class="img" :src="'/img/moduleButtons/' + area.src" />
                </div>
              </div>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="sass" scoped>
.img
  max-height: 100%
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  width: 100%

.card
  height: 160px
  margin: 10px
  box-shadow: none
  transition: box-shadow 0.2s
  font-family: sans-serif
  cursor: pointer

.card:hover
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px

*
  font-family: 'Poppins', sans-serif
</style>