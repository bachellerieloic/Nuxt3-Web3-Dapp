<script>
export default {
  data: () => ({
    tab: null
  }),
}
</script>

<script setup>
import { moduleHomepages } from "~/assets/moduleHomepages";
import { reactive } from "vue";
import { useToolStore } from "~/stores/tool";

const toolStore = useToolStore();
const route = useRoute()
const router = useRouter()

const state = reactive({
  currentTool: {},
  allTools: {},
  showAll: false,
  multipleAssessments: false,
  toolTypeActive: "Calculator",
  toolCategories: [
      {
        title: "Calculators",
        img: "calculator.svg",
        key: "Calculator",
      },
      {
        title: "Resources",
        img: "resource.svg",
        key: "Resource",
      },
      {
        title: "Quizzes",
        img: "quiz.svg",
        key: "Quiz",
      },
      {
        title: "Comparison Tools",
        img: "comparison.svg",
        key: "Comparison Tool",
      },
    ],
})

// toolStore.fetchTools();


const filterType = (allTools, type) => {
  let filteredTools = Object.assign({}, allTools); //copy the allTools object

  for (const content in filteredTools) {
    if (filteredTools[content].type !== type) {
      delete filteredTools[content];
    }
  }
  return filteredTools;
};

const getCurrentArea = () => {
  return moduleHomepages[route.params.areaOfRetirement].title;
};

const getColor = (returnHex = false) => {
  if (returnHex) {
    switch (moduleHomepages[route.params.areaOfRetirement].colorType){
      case "blue":
        return "#06146a"
      case "teal":
        return "#5cdfd7"
      case "green":
        return "#30b080"
    }
  }
  return moduleHomepages[route.params.areaOfRetirement].colorType;
};

const getToolLink = (tool) => {
  if (tool.page !== "") return tool.page
  return "/keysToRetirement/area-" + tool.areaOfRetirement + "/tool-" + tool.id;
}

const lineBreak = (text) => {
  return text.split(/[\?\.!]/g).join(".\n\n");
}

if (moduleHomepages && toolStore.getSingleTool(route.params.tool)) {
  state.currentTool = toolStore.getSingleTool(route.params.tool);
  state.allTools = toolStore.getTools(route.params.areaOfRetirement);

  window.scrollTo(0, 0);

} else if ( moduleHomepages && toolStore.getTools(route.params.areaOfRetirement)) {
  state.allTools = toolStore.getTools(route.params.areaOfRetirement);
  state.showAll = true
  state.multipleAssessments = Object.keys(filterType(state.allTools, 'Assessment')).length > 1

  //trim unnesicary tool types here
  state.toolCategories = state.toolCategories.filter((item) => Object.keys(filterType(state.allTools, item.key)).length > 0);

  window.scrollTo(0, 0);
} else {
  router.push("/");
}
</script>

<template>
  <NuxtLayout name = "default">
    <ToolsBanner
      :areaOfRetirement="route.params.areaOfRetirement"
      :backLink="state.showAll ? '/keysToRetirement/' + route.params.areaOfRetirement : '/keysToRetirement/area-' + route.params.areaOfRetirement + '/tool-all'"
    />

    <!--Single tool-->
    <div v-if="!state.showAll">
      <div style="max-width: 650px" class="text-center mx-auto mt-12 mb-6 mt-5">
        <h2 :style="{color: state.currentTool.titleColor}">{{state.currentTool.name}}</h2>
        <p style="font-size: 1.4rem; line-height: 1.5; white-space: pre-wrap;" class="mt-16 mb-13 font-weight-normal">{{lineBreak(state.currentTool.description)}}</p>

        <div class="d-flex flex-column align-center">
          <img
            style="width: 90%; max-width: 400px; max-height: 500px"
            :src="state.currentTool.img"
            class="my-16"
          />

          <a :href="state.currentTool.source" target="_blank">
            <v-btn
              :style="{ backgroundColor: state.currentTool.buttonColor }"
              class="button mt-14"
            >
              {{ state.currentTool.buttonText }}
            </v-btn>
          </a>
        </div>

        <h4 class="text-left" style="margin-top: 300px">Disclaimer</h4>
        <p
          class="text-left mt-2 mb-8"
          style="font-size: 1rem; font-style: italic"
        >
          Any results, advice or calculations displayed on this third-party
          website are made available for informational purposes only and do not
          constitute financial, health or legal advice. By using this online
          tool, you agree that you are leaving our site for a third-party site.
        </p>
      </div>
    </div>

    <!--All tools-->
    <div class="mb-16 mx-auto" v-else>
      <div style="position: relative; height: 220px; margin-top: 70px;">
        <h1 class="banner-text text-center">{{getCurrentArea()}} Assessment{{state.multipleAssessments ? 's' : ''}}</h1>
        <img
          style="height: 130px; position: absolute; left: calc(50vw + 320px); top: 50%; transform: translateY(-50%)"
          :src="'/img/tools/toolTypes/'+ getColor() +'/assessment.svg'"
        />
      </div>

      <div style="column-gap: 10px; row-gap: 50px; max-width: 1240px;" class="d-flex mx-auto px-3 flex-wrap">
        <div
          v-for="assessment in filterType(state.allTools, 'Assessment')"
          :key="assessment.name"
          style="border-radius: 25px; min-height: 350px; column-gap: 20px; row-gap: 50px;"
          :style="{backgroundColor: assessment.backgroundColor, flex: state.multipleAssessments ? '1 1 390px' : '0 1 100%', maxWidth: state.multipleAssessments ? '450px' : '950px', textAlign: state.multipleAssessments ? 'left' : 'center'}"
          class="d-flex flex-column justify-space-between align-center mx-auto"
        >
          <div class="d-flex flex-column justify-space-between text-white mx-9 mt-12 mb-8">
            <h2>{{assessment.name}}</h2>
            <p class="mt-7">{{assessment.subHeader}}</p>
          </div>
          <div
            style="column-gap: 10px; max-width: 370px"
            class="d-flex mx-auto mb-8"
          >
            <NuxtLink :to="getToolLink(assessment)">
              <v-btn
                style="
                  color: #1d1d1f;
                  font-size: 1.15rem;
                  padding: 36px 35px;
                  min-width: 175px;
                "
                class="button"
              >
                {{ assessment.buttonText }}
              </v-btn>
            </NuxtLink>
            <NuxtLink v-if="assessment.completed" to="/">
              <v-btn
                style="
                  color: #1d1d1f;
                  font-size: 1.15rem;
                  padding: 36px 35px;
                  min-width: 175px;
                "
                class="button"
              >
                My results
              </v-btn>
            </NuxtLink>
          </div>
        </div>
      </div>

      <v-tabs
        centered
        :show-arrows="$vuetify.display.smAndDown"
        style="margin-top: 150px; max-width: 1100px;"
        class="mx-auto"
        :slider-color="getColor(true)"
        v-model="tab"
      >
        <template
          v-for="(category, i) in state.toolCategories"
          :key="category.title"
        >
          <v-tab
            :value="category.key"
            class="px-5"
            style="font-size: 1.25rem;"
            :style="{color: tab == category.key ? getColor(true) : '#1d1d1f'}"
          >
            {{category.title}}
          </v-tab>
          <v-divider
            v-if="state.toolCategories[i+1]"
            vertical
            class="mx-8 mt-1"
            length="75%"
            thickness="2"
          />
        </template>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item
          v-for="(category) in state.toolCategories"
          :value="category.key"
          :key="category.title"
          class="mt-10"
          :style="{display: Object.keys(filterType(state.allTools, category.key)).length > 0  ? 'default' : 'none'}"
        >
          <div style="position: relative; height: 220px">
            <h1 class="banner-text text-center">{{category.title}}</h1>
            <img
              style="height: 130px; position: absolute; left: calc(50vw + 260px); top: 50%; transform: translateY(-50%)"
              :src="'/img/tools/toolTypes/'+ getColor() +'/'+category.img"
            />
          </div>

          <div
            v-for="tool in filterType(state.allTools, category.key)"
            :key="tool.name"
            style="border-radius: 10px; min-height: 180px; column-gap: 20px; row-gap: 50px; max-width: 950px;"
            :style="{backgroundColor: tool.backgroundColor}"
            class="d-flex flex-column flex-md-row justify-space-between align-center mx-4 mx-md-auto px-10 py-5 mt-6"
          >
            <div class="d-flex flex-column justify-space-between text-white text-center text-md-left">
              <h2>{{tool.name}}</h2>
              <p class="mt-2">{{tool.subHeader}}</p>
            </div>
            <NuxtLink :to="getToolLink(tool)">
              <v-btn
                style="color: #1d1d1f; font-size: 1.15rem; padding: 36px 30px;"
                class="button"
              >
                {{tool.buttonText}}
              </v-btn>
            </NuxtLink>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </NuxtLayout>
</template>


<style lang="sass" scoped>
.banner-text
  max-height: 100%
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  max-width: 600px
  color: #1d1d1f

.button
  text-transform: none
  font-weight: 700
  font-size: 1.5rem
  padding: 35px 40px
  letter-spacing: normal
  border-radius: 60px
  transition: box-shadow 0.2s, transform 0.2s
  color: white

.button:hover
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px
  transform: translate(0px, -3px)

h1
  font-weight: 700
  font-size: 2.8rem

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

span
  max-width: 100%

</style>
