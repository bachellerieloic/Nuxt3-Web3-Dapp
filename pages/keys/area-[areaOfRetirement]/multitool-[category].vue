<script>
export default {
  data: () => ({
    multitools: {
      vacationPlannerApps: {
        name: "Vacation Planner Apps",
        description: "Travel is an investment in yourself, and to make the most out of that investment you should do the planning to get to everything you want to do and everything you want to see. These are the best apps out there to help you make your next vacation the best it can be. Use these tools to help you discover, organize and plan your best trip yet.",
        md: "4",
        buttons: [
          {
            img: "/img/tools/travel/TripIt.png",
            link: "https://www.tripit.com/web"
          },
          {
            img: "/img/tools/travel/Lonely Planet Logo.png",
            link: "https://www.lonelyplanet.com/guides"
          },
          {
            img: "/img/tools/travel/Skratch Logo.png",
            link: "https://www.skratch.world/"
          },
        ]
      },
      accomodationApps: {
        name: "Accomodation Apps",
        description: "Who says your next stay has to be at a hotel? Explore a world of amazing houses, villas, condos and more that you can call home while you’re on vacation. Use these tools to help find, plan and save on your next dream vacation stay.",
        md: "6",
        buttons: [
          {
            img: "/img/tools/travel/Vrbo Logo.jpg",
            link: "https://www.vrbo.com/en-ca/"
          },
          {
            img: "/img/tools/travel/Airbnb Logo.png",
            link: "https://www.airbnb.ca/"
          },
        ]
      },
      flightPlanners: {
        name: "Flight Planners",
        description: "Getting to your destination as quickly and as affordably as possible will set your vacation off on the right foot. Don’t spend any more than you have to and don’t get caught on unnecessary connecting flights. Use these tools to help you save time and money on your next flight.",
        md: "6",
        buttons: [
          {
            img: "/img/tools/travel/Skyscanner Logo.png",
            link: "https://www.skyscanner.ca/"
          },
          {
            img: "/img/tools/travel/Kayak Logo.png",
            link: "https://www.ca.kayak.com/flights"
          },
        ]
      },
    }
  }),
}
</script>

<script setup>
import { moduleHomepages } from '~/assets/moduleHomepages'
import { reactive } from "vue";
const route = useRoute()
const router = useRouter()

const state = reactive({
  allTools: {},
  currentMultitool: ""
})

if(moduleHomepages && moduleHomepages[route.params.areaOfRetirement]) {
  state.allTools = moduleHomepages[route.params.areaOfRetirement]["tools"]
  state.currentMultitool = route.params.category

  window.scrollTo(0, 0);
} else {
  router.push('/')
}

const lineBreak = (text) => {
  return text.split(/[\?\.!]/g).join(".\n\n");
}
</script>

<template>
  <NuxtLayout name = "default">
    <ToolsBanner :areaOfRetirement="route.params.areaOfRetirement" :back-link="'/keysToRetirement/area-' + route.params.areaOfRetirement + '/tool-all'"/>

    <div style="max-width: 800px" class="text-center mx-auto px-2 mt-5">
      <h1>{{multitools[state.currentMultitool].name}}</h1>
      <p style="font-size: 1.4rem; line-height: 1.4; white-space: pre-wrap;" class="mt-16">{{lineBreak(multitools[state.currentMultitool].description)}}</p>
    </div>

    <div style="margin-top: 200px; max-width: 1200px;" class="mx-auto">
      <v-row>
        <v-col 
          v-for="(button, i) in multitools[state.currentMultitool].buttons"
          :key="i"
          style="height: 350px;" 
          class="d-flex flex-column align-center justify-space-between px-6 mt-8" 
          cols="12" :md="multitools[state.currentMultitool].md"
        >
          <div style="height: 200px;" class="d-flex align-center justify-center">
            <img 
              style="width: 400px; max-width: 100%; max-height: 200px; object-fit: cover;"
              :src="button.img"
            />
          </div>
          <a :href="button.link" target="_blank">
            <v-btn
              class="button"
            >
              Check for yourself
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </div>

    <div class="mx-auto" style="max-width: 1000px">
      <h4 class="text-left" style="margin-top: 300px;">Disclaimer</h4>
      <p class="text-left mt-2 mb-8" style="font-size: 1rem; font-style: italic;">Any results, advice or calculations displayed on this third-party website are made available for informational purposes only and do not constitute financial, health or legal advice. By using this online tool, you agree that you are leaving our site for a third-party site.</p>
    </div>

  </NuxtLayout>
</template>


<style lang="sass" scoped>
.button
  text-transform: none
  font-weight: 700
  font-size: 1.5rem
  padding: 35px 40px
  letter-spacing: normal
  border-radius: 60px  
  box-shadow: none !important
  transition: box-shadow 0.2s, transform 0.2s
  background-color: #1fb97b
  color: white
  width: 300px

.button:hover
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px
  transform: translate(0px, -3px)  

h1
  font-weight: 700
  font-size: 3rem

h2
  font-weight: 700
  font-size: 2.3rem
  line-height: 1.3

h4
  font-weight: 800
  font-size: 1.3rem

p
  line-height: 1.3
  font-size: 1.3rem
  font-weight: 350

a
  text-decoration: none

.similar-card
  transition: box-shadow 0.2s, transform 0.2s

.similar-card:hover
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px
  transform: translate(0px, -10px)

*
  font-family: 'Poppins', sans-serif
  //border: 1px gray solid

</style>