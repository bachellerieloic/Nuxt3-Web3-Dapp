<script>
export default {
  data: () => ({
    colors: [
      {name: "Background Color", refrence: "backgroundColor"},
      {name: "Title Color", refrence: "titleColor"},
      {name: "Button Color", refrence: "buttonColor"},
    ],
    areasOfRetirement: [
      "psychologyOfRetirement", "personalWellness", "activitiesAndHobbies", "socialChangeAndVolunteering",
      "travel", "livingAndDownsizing", "healthcare", "assistingTheNextGeneration", "financialPlan",
      "retirementIncome", "estatePlan", "insurance"
    ],
    contentTypes: ["Article", "Podcast", "Book", "Video"],
  }),
}
</script>

<template>
  <NuxtLayout name="default">
    <div style="max-width: 1200px;" class="mx-auto px-2">
      <h1>Tool Upload Page</h1>

      <div class="d-none">
        <v-btn @click="removeAllTools()">
          DELETE ALL TOOLS
        </v-btn>
        <v-btn @click="addAllTools()">
          ADD ALL TOOLS (from moduleHomepages.js)
        </v-btn>
      </div>

      <div class="d-flex flex-wrap">
        <div class="flex-grow-1 mx-1">
          <h3>Area of Retirement</h3>
          <v-select
            :items="areasOfRetirement"
            v-model="state.areaOfRetirement"
            label="Select the area of retirement"
            variant="outlined"
            class="rounded-xl"
          />
        </div>
        <div class="flex-grow-1 mx-1">
          <h3>Tool Type</h3>
          <v-select
            :items="toolTypes"
            v-model="state.type"
            label="Select the tool type"
            variant="outlined"
            class="rounded-xl"
          />
        </div>
      </div>

      <div class="d-flex flex-wrap">
        <div class="flex-grow-1 mx-1">
          <h3>Tool Name:</h3>
          <v-text-field
            v-model="state.name"
            label="Tool Name"
          />
        </div>
        <div class="flex-grow-1 mx-1">
          <h3>Tool Sponsor:</h3>
          <v-text-field
            v-model="state.sponsor"
            label="Tool Sponsor"
          />
        </div>
        <div class="flex-grow-1 mx-1">
          <h3>Button Text:</h3>
          <v-text-field
            v-model="state.buttonText"
            label="Button Text"
          />
        </div>
      </div>

      <div class="d-flex justify-space-between flex-wrap">
        <div
          v-for="colorfield in colors"
          :key="colorfield.name"
          class="mr-2"
        >
          <h3>{{colorfield.name}}:</h3>
          <v-color-picker
            v-model="state[colorfield.refrence]"
          />
        </div>
      </div>

      <h3>Tool Source (link):</h3>
      <v-text-field
        v-model="state.source"
        label="Tool Source"
      />

      <h3>Tool Description (short):</h3>
      <v-text-field
        v-model="state.subHeader"
        label="Tool Description"
      />

      <h3>Tool Description (long):</h3>
      <v-textarea
        v-model="state.description"
        label="Tool Description"
      />

      <h3>Tool Image:</h3>
      <img style="height: 100px;" :src="state.img" />
      <v-text-field
        v-model="state.img"
        label="Tool Image Link"
      />

      <h3>Custom Tools Page?:</h3>
      <p>Certain tools lead to pages that aren't the auto-generated pages. Enable this option to set the tools page manually.</p>
      <v-switch
        v-model="state.customPage"
      />
      
      <div class="mt-n5 mb-5" :style="{display: state.customPage ? 'block' : 'none'}">
        <p>This field is for the extension. E.g retiremint.co/assessments/travel would require the input: '/assessments/travel'</p>
        <v-text-field
          v-model="state.page"
          label="Tools page url"
        />
      </div>

      <v-btn
        @click="save()"
      >
        Submit
      </v-btn>

      <v-divider class="my-16"/>

      <h3>How the tool card will look (roughly):</h3>
      <v-carousel
        class="max-width mb-10"
        hide-delimiters
        style="height: auto;"
        :show-arrows="false"
      >
        <v-carousel-item>
          <v-row
            style="max-width: 78%; column-gap: 20px; border-radius: 60px; margin: 0px; color: #ffffff; max-width: 625px;"
            :style="{backgroundColor: state.backgroundColor}"
            class="mx-auto d-flex align-center pa-4 py-md-6 px-md-8 text-center text-md-left"
          >
            <v-col cols="12">
              <h3 style="min-height: 110px;" :style="{fontSize: $vuetify.display.smAndDown ? '1.8rem' : '2.2rem'}" class="mb-2">{{state.name}}</h3>
            </v-col>
            <v-col class="d-flex flex-column justify-space-between " style="min-height: 220px;">
              <p :style="{fontSize: $vuetify.display.smAndDown ? '1rem' : '1.18rem'}">{{state.subHeader}}</p>
              <div style="height: 200px;" class="d-flex d-md-none align-center justify-center">
                  <img
                    :src="state.img"
                    style="max-height: 160px; max-width: 100%; mix-blend-mode: normal; border-radius: 5px;"
                  />
              </div>
                  <v-btn
                    class="button"
                    rounded
                    color="white"
                    elevation="0"
                    style="color: #404040 !important; padding: 30px 30px; font-size: 1.2rem; width: 241px !important;"
                  >
                    {{state.buttonText}}
                  </v-btn>
            </v-col>
            <v-col
              style="height: 100%;"
              class="my-2 flex-column justify-space-around d-none d-md-flex"
            >
              <div
                style="height: 200px;"
                class="d-flex align-center justify-center"
              >
                  <img
                    :src="state.img"
                    style="max-height: 200px; max-width: 100%; border-radius: 5px; mix-blend-mode: normal;"
                  />
              </div>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>

      <v-divider class="my-16"/>

      <div class="d-flex flex-wrap justify-space-between">
        <div
          v-for="tool in state.allTools"
          :key="tool.id"
          :style="{backgroundColor: tool.backgroundColor, flex: '0 0 350px'}"
          class="pa-4 ma-4 rounded-xl d-flex justify-space-around align-center"
          cols="12"
          md="4"
        >
          <div>
            <h3 class="mt-0 mb-1">{{tool.name}}</h3>

            <p>{{tool.sponsor}}</p>
            <p>{{tool.areaOfRetirement}}</p>

            <v-btn @click="removeTool(tool.id)" color="error">
              Delete Tool
            </v-btn>
          </div>

          <img :src="tool.img" style="max-height: 100px; max-width: 100px; object-fit: cover;" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {API, graphqlOperation} from "@aws-amplify/api";
import { moduleHomepages } from '~/assets/moduleHomepages'
import {reactive, computed} from "vue";
import {createTool, deleteTool} from "~/src/graphql/mutations";
import {listTools} from "~/src/graphql/queries";
import { useToolStore } from "~/stores/tool";

const toolStore = useToolStore();

const state = reactive({
  name: "Retirement Tool",
  sponsor: "TMFG",
  backgroundColor: "#62C6E2",
  titleColor: "#489AD7",
  buttonColor: "#20B97C",
  subHeader: "A tool to help you plan for retirement.",
  description: "A tool to help you plan for retirement.",
  type: "Calculator",
  buttonText: "Check it out",
  areaOfRetirement: "travel",
  source: "https://www.retiremint.co/",
  img: "https://api.freelogodesign.org/assets/thumb/logo/5072150_400.png?t=637946206510000000",
  page: "/assessments/travel",
  customPage: false,

  allTools: []
})

const save = async () => {
  if (prompt("Type ADD to confirm the creation of a tool.") != "ADD") return false

  const { data } = await API.graphql(
      graphqlOperation(createTool, {
        input : {
          name: state.name,
          sponsor: state.sponsor,
          backgroundColor: state.backgroundColor,
          titleColor: state.titleColor,
          buttonColor: state.buttonColor,
          subHeader: state.subHeader,
          description: state.description,
          type: state.type,
          buttonText: state.buttonText,
          areaOfRetirement: state.areaOfRetirement,
          source: state.source,
          page: state.customPage ? state.page : "",
          img: state.img,
      }})
  )
  getAllTools();
  toolStore.forceRefresh();

  console.log('Create', data)
}

const removeTool = async (idRemove) => {
  if (prompt("Type REMOVE to confirm the removal of a tool.") != "REMOVE") return false

  const { data } = await API.graphql(
    graphqlOperation(deleteTool, {
      input : {
        id: idRemove
    }})
  )

  //console.log("InDEL", data.deleteTool)
  toolStore.forceRefresh();
  
  getAllTools();
  console.log('remove', data)
}

const addAllTools = () => {
  Object.keys(moduleHomepages).forEach((area) => {
    Object.keys(moduleHomepages[area].tools).forEach(async (toolName) => {
      const tool = moduleHomepages[area].tools[toolName] 
      const { data } = await API.graphql(
        graphqlOperation(createTool, {
          input : {
            name: tool.name,
            sponsor: tool.sponsor,
            backgroundColor: tool.backgroundColor,
            titleColor: tool.titleColor,
            buttonColor: tool.buttonColor,
            subHeader: tool.subHeader,
            description: tool.description,
            type: tool.type,
            buttonText: tool.buttonText,
            areaOfRetirement: area,
            source: tool.source,
            page: /\/keysToRetirement\/area-\w+\/tool-tool\d+/g.test(tool.page) ? '' : tool.page,
            img: tool.img,
        }})
      )
      console.log(data);
    })
  })
}

const removeAll = () => {
  state.allTools.forEach((tool) => removeTool(tool.id))
}

const getAllTools = async () => {
  const { data } = await API.graphql(
      graphqlOperation(listTools, {limit: 1000})
  )

  state.allTools = data.listTools.items;
  console.log("Getall", data.listTools.items)
  return data.listTools.items;
}
getAllTools();

</script>


<style lang="sass" scoped>
h3
  margin-bottom: 15px
  margin-top: 30px 
</style>