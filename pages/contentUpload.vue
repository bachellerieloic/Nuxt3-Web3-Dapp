<script>
export default {
  data: () => ({
    areasOfRetirement: [
      "psychologyOfRetirement", "personalWellness", "activitiesAndHobbies", "socialChangeAndVolunteering",
      "travel", "livingAndDownsizing", "healthcare", "assistingTheNextGeneration", "financialPlan",
      "retirementIncome", "estatePlan", "insurance"
    ],
    contentTypes: ["article", "podcast", "book", "video"],
  }),
}
</script>

<template>
  <NuxtLayout name="default">
    <div class="d-none">
      <v-btn @click="removeAllContent()">
        DELETE ALL CONTENT
      </v-btn>
      <v-btn @click="addAllContent()">
        ADD ALL CONTENT (from moduleHomepages.js)
      </v-btn>
    </div>

    <div style="max-width: 1200px;" class="mx-auto px-2">
      <div class="mb-6" :style="{ backgroundColor: 'rgb(191 234 255)', width: '100%', borderRadius: '10px' }">
        <v-row class="py-12 mx-auto d-flex align-center" style="max-width: 1000px" no-gutters>
          <v-col class="mx-auto">
            <h1 class="font-weight-black text-primary ml-15" style="font-size: 3.2rem;">
              Content Upload Portal
            </h1>
          </v-col>
          <v-col>
            <v-img src="/img/assessments/estate-plan-assessment.svg" height="180"/>
          </v-col>
        </v-row>
      </div>

      <div class="mb-10">
        <h3 class="text-h4 font-weight-bold text-primary mb-5">Content Type</h3>
<!--                  <template v-for="item in ['Article', 'Podcast', 'Book', 'Video']" :key="item">-->
        <div>
          <template v-for="item in ['Article', 'Podcast', 'Book', 'Video']" :key="item">
            <v-btn
                class="text-primary pa-12 mr-10 text-capitalize text-h6 font-weight-bold rounded-xl"
                :class="state.contentType === item.toLowerCase() ? 'bg-info text-primary' : ''"
                style="width: 180px;height: 140px" @click="state.contentType = item.toLowerCase()">
              <template #default>
                <div style="width: 100px">
                  <span class="text-primary">{{ item }}</span>
                  <v-img src="/img/assessments/estate-plan-assessment.svg" with="100%" class="mt-2"/>
                </div>
              </template>
            </v-btn>
          </template>
        </div>
      </div>

      <div class="">
        <v-row>
          <v-col cols="6">
            <h3 class="text-h4 font-weight-bold text-primary mb-5 text-capitalize">
              <span class="text-capitalize text-primary">{{ state.contentType}} information</span>
            </h3>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Title</h3>
              </v-col>
              <v-col cols="9">
                <v-text-field
                    v-model="state.title"
                    label="" variant="solo" hide-details
                />
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Author</h3>
              </v-col>
              <v-col cols="9">
                <v-text-field
                    v-model="state.author"
                    label="" variant="solo" hide-details
                />
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Publisher</h3>
              </v-col>
              <v-col cols="9">
                <v-text-field
                    v-model="state.publication"
                    label="" variant="solo" hide-details
                />
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Date</h3>
              </v-col>
              <v-col cols="9">
                <v-text-field
                    v-model="state.date"
                    label="" variant="solo" hide-details
                />
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Tags</h3>
              </v-col>
              <v-col cols="9">
                <v-combobox
                    v-model="state.tags"
                    :items="state.tags"
                    label=""
                    multiple
                    chips variant="solo" hide-details
                ></v-combobox>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Topic</h3>
              </v-col>
              <v-col cols="9">
                <v-select
                    :items="areasOfRetirement"
                    v-model="state.areaOfRetirement"
                    label="Select the area of retirement"
                    variant="solo"
                    class="ma-0 pa-0" hide-details
                />
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Link</h3>
              </v-col>
              <v-col cols="9">
                <v-text-field
                    v-model="state.source"
                    label="" variant="solo" hide-details
                />
              </v-col>
            </v-row>
            <v-row class="d-flex align-center">
              <v-col cols="3">
                <h3 class="ma-0 pa-0 font-weight-medium">Read Time</h3>
              </v-col>
              <v-col cols="9">
                <v-text-field
                    v-model="state.readTime"
                    label="" variant="solo" hide-details
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>

          <v-col cols="5" class="">
            <h3 class="text-h4 font-weight-bold text-primary mb-5 text-capitalize">
              <span class="text-capitalize text-primary">{{ state.contentType}} Thumbnail</span>
            </h3>
            <input type="file" accept="image/png, image/gif, image/jpeg" @change="onFileChange" id="fileUpload" class="d-none"/>

            <div class="w-100 d-flex flex-column justify-content-center text-center">
              <v-btn color="secondary" component="span" @click="getFile" class="mx-auto text-capitalize rounded-lg mb-4" prepend-icon="mdi-image">
                Select an image file
              </v-btn>
              <v-img v-if="state.image" :src="state.image" width="350" class="rounded-lg mx-auto" />
            </div>


          </v-col>
        </v-row>
      </div>

      <h3 class="text-h4 font-weight-bold text-primary mt-10 mb-5 text-capitalize">
        <span class="text-capitalize text-primary">{{ state.contentType}} Description</span>
      </h3>
      <v-textarea
        v-model="state.description"
        label="Content Description"
        variant="solo"
      />

      <v-btn @click="save()" class="big-button mx-auto" color="secondary">
        <span class="text-capitalize text-white">Upload {{ state.contentType}}</span>
      </v-btn>

      <v-divider class="my-16"/>

      <div class="d-flex flex-wrap justify-space-between">
        <div
          v-for="content in state.allContent"
          :key="content.id"
          :style="{backgroundColor: '#eee', flex: '0 0 550px'}"
          class="pa-4 ma-4 rounded-xl d-flex justify-space-around align-center"
          cols="12"
          md="6"
        >
          <div>
            <p style="white-space: nowrap; max-width: 380px; overflow-x: hidden;" class="mt-0 mb-1">{{content.title}}</p>

            <p>{{content.publication}}</p>
            <p>{{content.areaOfRetirement}}</p>

            <v-btn @click="removeContent(content.id)" color="error">
              Delete Content
            </v-btn>
          </div>

          <img :src="content.img" style="max-height: 100px; max-width: 100px; object-fit: cover;" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {API, graphqlOperation} from "@aws-amplify/api";
import { Storage } from 'aws-amplify'
import { moduleHomepages } from '~/assets/moduleHomepages'
import {reactive, computed} from "vue";
import {createContent, deleteContent} from "~/src/graphql/mutations";
import {listContents} from "~/src/graphql/queries";
import { useContentStore } from "~/stores/content";

const contentStore = useContentStore();

const state = reactive({
  title: '',
  author: '',
  publication: '',
  description: '',
  length: '',
  date: '',
  source: "",
  img: '',
  contentType: "article",
  areaOfRetirement: "travel",
  readTime: '',
  file: null,
  image: null,
  tags: [],
  allContent: []
})

const getFile = function () {
  let fileUpload = document.getElementById('fileUpload')
  if (fileUpload != null) {
    fileUpload.click()
  }
}

const onFileChange = (e) => {
  const files = e.target.files || e.dataTransfer.files;
  if (!files.length)
    return;
    createImage(files[0]);
    state.file = files[0];
}

const createImage = (file) => {
  let image = new Image();
  let reader = new FileReader();
  let vm = this;

  reader.onload = (e) => {
    console.log('e', e)
    state.image = e.target.result;
  };
  reader.readAsDataURL(file);
}

const save = async () => {
  if (prompt("Type ADD to confirm the creation of content.") !== "ADD") return false

  const fileKey = new Date().getTime()
  console.log('TEST KEY', fileKey)
  // const { key } = await Storage.put(fileKey, file, { level: 'public', contentType: file.type})



  const { data } = await API.graphql(
      graphqlOperation(createContent, {
        input : {
          title: state.title,
          author: state.author,
          publication: state.publication,
          description: state.description,
          length: state.length,
          date: state.date,
          source: state.source,
          img: state.img,
          contentType: state.contentType,
          areaOfRetirement: state.areaOfRetirement
      }})
  )
  getAllContent();
  contentStore.forceRefresh();

  console.log('Create', data)
}

const removeContent = async (idRemove) => {
  //if (prompt("Type REMOVE to confirm the removal content.") != "REMOVE") return false

  const { data } = await API.graphql(
    graphqlOperation(deleteContent, {
      input : {
        id: idRemove
    }})
  )

  contentStore.forceRefresh();

  getAllContent();
  console.log('remove', data)
}

const addAllContent = () => {
  Object.keys(moduleHomepages).forEach((area) => {
    Object.keys(moduleHomepages[area].learningCenterData).forEach((contentType) => {
      Object.keys(moduleHomepages[area].learningCenterData[contentType]).forEach(async (contentPiece) => {
        const currentContent = moduleHomepages[area].learningCenterData[contentType][contentPiece]
        const { data } = await API.graphql(
        graphqlOperation(createContent, {
          input : {
            title: currentContent.title,
            author: currentContent.author,
            publication: currentContent.publication,
            description: currentContent.description,
            length: currentContent.length,
            date: currentContent.date,
            source: currentContent.source,
            img: currentContent.img,
            contentType: contentType.substring(0, contentType.length - 1),
            areaOfRetirement: area
          }})
        )

        console.log(data);
      })
    })
  })
}

const removeAllContent = () => {
  state.allContent.forEach((content) => removeContent(content.id))
}

const getAllContent = async () => {
  const { data } = await API.graphql(
      graphqlOperation(listContents, {limit: 1000})
  )

  state.allContent = data.listContents.items;
  console.log("Getall", data.listContents.items)
  return data.listContents.items;
}
getAllContent();

</script>


<style lang="sass" scoped>

.big-button
  text-transform: none
  font-size: 2rem
  font-weight: 700
  padding: 35px 40px
  border-radius: 20px
  letter-spacing: normal
  text-indent: 0
  box-shadow: none !important
</style>
