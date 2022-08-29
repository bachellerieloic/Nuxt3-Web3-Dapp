<script>
export default {
  props: {
    content: {type: Object},
    similarContent: {type: Object},
    contentType: {type: String},
    areaOfRetirement: {type: String},
  },

  data: () => ({
    rating: 4.5,
    bannerButtons: [
      {
        title: "Like",
        icon: "mdi-heart-outline"
      },
      {
        title: "Share",
        icon: "mdi-send"
      },
    ]
  })
}

</script>

<script setup>
import { moduleHomepages } from '~/assets/moduleHomepages'
import { moduleButtons } from '~/assets/moduleButtons'

const limitCharacters = (text, limit) => {
  return text.length > limit ? text.slice(0,limit-2) + '...' : text;
}

const filterSimilar = (allContent, currentContent, returnNum = 2) => {
  let filteredContent = Object.assign({}, allContent) //copy the allContent object
  let foundContent = 0;
  for (const content in filteredContent) {
    if (filteredContent[content] == currentContent || foundContent >= returnNum){ 
      delete filteredContent[content] 
    }
    else foundContent++ 
  }
  return filteredContent
} 

const areaToTitle = (area) => {
  return moduleHomepages[area].title
}

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const visitButtonText = (contentType) => {
  switch (contentType) {
    case "articles":
      return "Read the article";
    case "podcasts":
      return "Listen to the podcast";
    case "books":
      return "Read the book";
    case "videos":
      return "Watch the video";
    default:
      return "Check it out";
  }
}
</script>


<template>
  <div 
    style="max-width: 1200px;"
    :style="{borderRadius: $vuetify.display.width <= 1200 ? '0px' : '10px', backgroundColor: moduleButtons[areaOfRetirement].primary }"
    class="pa-3 mx-auto"
  >
    <div 
      style="max-width: 820px;" 
      class="d-flex justify-space-between align-center mx-auto"
    >
      <NuxtLink :to="'/keysToRetirement/' + areaOfRetirement">
      <v-btn
        elevation="0"
        rounded="lg"
        class="pa-1"
        variant="text font-weight-normal"
        style="height: 100% !important; color: white; font-size: 1.3rem; text-transform: none; letter-spacing: normal;"
      >
        {{areaToTitle(areaOfRetirement)}}
      </v-btn>
      </NuxtLink>
      <div>
        <div class="d-flex justify-space-between" style="column-gap: 20px;">
          <v-btn
            v-for="item in bannerButtons"
            :key="item.title"
            elevation="0"
            rounded="lg"
            class="pa-1"
            variant="text"
            style="height: 100% !important; color: white; font-size: 0.95rem; text-transform: none;"
          >
            <v-icon left class="mr-2">
                {{item.icon}}
            </v-icon>
            {{item.title}}
          </v-btn>
        </div>
      </div>
    </div>
  </div>

  <v-row
    style="max-width: 800px;"
    :style="{columnGap: $vuetify.display.smAndDown ? '20px' : '60px', maxHeight: $vuetify.display.smAndDown ? '100%' : '350px'}"
    class="mx-auto mt-13 px-3 d-flex align-center ma-0"
    cols="4" md="6"
    no-gutters
  >
    <v-col class="d-none d-sm-flex">
      <div class="d-flex justify-center">
        <a :href="content.source" target="_blank">
          <img
            :src="content.img"
            style="height: 335px; max-height: 100%; max-width: 100%; object-fit: cover; box-shadow: rgb(38, 57, 77) 0px 7px 13px -10px;"
            :style="{borderRadius: contentType == 'books' ? '20px' : '40px'}"
          />
        </a>
      </div>
    </v-col>
    <v-col
      style="max-height: 100%;"
      class="mb-3 d-flex flex-column justify-space-between"
      cols="12" sm="8" md="6"
    >
      <a :href="content.source" target="_blank">
        <h3 style="color: #414040; font-size: 1.8rem;">{{content.title}}</h3>
      </a>
      <div class="d-flex justify-space-between align-center mt-10" style="column-gap: 10px;">
        <div class="flex-shrink-0">
          <img
            :src="content.img"
            style="max-width: 100%; max-height: 300px; width: 100%; box-shadow: rgb(38, 57, 77) 0px 7px 13px -10px;"
            class="d-block d-sm-none rounded-lg mb-7"
          />
          <p style="font-size:1.1rem;">{{content.author}}</p>
          <p style="font-size:1.1rem;" class="mt-n1 mb-4">{{content.publication}}</p>
          <p style="font-size:1.1rem;">{{content.length}} {{content.date != "" && '&nbsp•&nbsp ' + content.date}}</p>
        </div>
      </div>
    </v-col>
  </v-row>

  <div
    style="max-width: 800px;"
    class="mx-auto mt-14 px-3"
  >
    <h4 class="mb-6">Description</h4>
    <p style="text-align: justify;">{{limitCharacters(content.description,350)}}</p>
    <div class="d-flex justify-center">
      <a :href="content.source" target="_blank">
        <v-btn
          class="button mx-auto"
          rounded
          style="margin-top: 80px;"
          color="secondary"
          elevation="0"
        >
          {{visitButtonText(contentType)}}
        </v-btn>
      </a>
    </div>
  </div>

  <div style="background-color: #f4f4f4; margin-top: 130px;">
    <div 
      style="max-width: 850px;"
      class="mx-auto pa-1 text-center"
    >
      <h4 class="mt-12">Similar {{capitalizeFirst(contentType)}}</h4>
      <v-row class="ma-0 mt-8 justify-center">
        <v-col
          v-for="item in filterSimilar(similarContent, content)"
          :key="item.title"
          :style="{display: item == content ? 'none' : 'block'}"
          cols="12" md="6"
        >
          
          <NuxtLink :to="item.page">
            <div
              class="bg-white text-left rounded-xl d-flex align-center pa-3 similar-card"
              style="height: 100%;"
            >
              <img
                :src="item.img"
                style="height: 150px; max-height: 100%; max-width: 40%; object-fit: cover; border-radius: 15px;"
                :style="{display: $vuetify.display.width <= 350 ? 'none' : 'block'}"
              />
              <div class="ml-4">
                <h4 style="font-size: 1rem;" class="mt-2">{{item.title}}</h4>
                <p style="font-size: 0.95rem;" class="mt-2">{{item.author}} - {{item.publication}}</p>
              </div>
            </div>
          </NuxtLink>
        </v-col>
      </v-row>
      <div class="mb-16"></div>
    </div>
  </div>

  <div style="max-width: 800px;" class="mx-auto pa-1 mt-14 mb-16 d-none">
    <h4>Reviews</h4>
    <div class="d-flex align-center mt-3">
      <v-icon class="ma-0" style="fontSize: 4rem; color: #1fb97b;">mdi-star</v-icon>
      <h5 class="font-weight-medium ml-2" style="fontSize: 3.5rem; line-height: 1;">4.2</h5>
      <div class="ml-6">
        <p style="font-size: 1.1rem;" class="font-weight-bold">Excellent</p>
        <p style="font-size: 1.1rem;">3 reviews</p>
      </div>
    </div>

    <div class="mt-16">
      <div class="py-3 px-5">
        <div class="d-flex align-center">
          <h5 style="font-size: 1.5rem;" class="font-weight-normal">Fredrick Rosencrantz</h5>
          <v-divider
            class="mx-4"
            vertical
          />
          <v-rating 
            color="secondary"
            v-model="rating"
            density="comfortable"
            hover
            readonly
            value="5"
            half-increments
            size="30"
          />
        </div>
        <p style="font-size: 1.25rem;" class="mt-2 text-justify">This piece of content has helped me learn a lot about retiremtent, a valuable tool in the arsenal of any retiree. Also, look how great the UI is, top notch design work.</p>
        <v-divider class="my-5 mx-auto" style="max-width: 30%;" />
      </div>
    </div>

    <div class="mt-10 pa-5 rounded-xl" style="background-color: #f4f4f4;">
      <h4>Leave a Review</h4>
      <div class="d-flex align-center mt-6">
        <h5 style="font-size: 1.3rem;" class="text-bold mr-2">Rating: </h5>
        <v-rating 
          color="secondary"
          density="comfortable"
          hover
          half-increments
          size="37"
        />
      </div>
      <h5 style="font-size: 1.3rem;" class="text-bold mt-6">Comment: </h5>
      <v-textarea 
        class="mt-3"
        label="Write Your Review Here"
      />
      <div class="d-flex justify-center">
        <v-btn
          color="secondary"
          class="button"
          style="padding: 30px 30px; font-size: 1.5rem;"
        >
          Submit review
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.button
  text-transform: none
  font-weight: 700
  font-size: 2rem
  padding: 48px 40px
  letter-spacing: normal
  border-radius: 60px  
  transition: box-shadow 0.2s, transform 0.2s

.button:hover
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px
  transform: translate(0px, -3px)  

h3
  font-weight: 700
  font-size: 2.05rem

h4
  font-weight: 800
  font-size: 1.8rem
  color: #414040

p
  line-height: 1.55
  font-size: 1.3rem
  font-weight: 350
  color: #1d1d1f

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
