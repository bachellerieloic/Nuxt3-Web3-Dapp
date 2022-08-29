<script>
export default {
  props: ['title', 'description', 'mainColor', 'carouselData', 'tools', 'video'],
  data: () => ({
    typesOfResources: [
      { name: "Articles", img: "articles.svg", },
      { name: "Podcasts", img: "podcasts.svg",  },
      { name: "Books", img: "books.svg" },
      { name: "Videos", img: "videos.svg" }
    ],
    selectedResource: "Articles",
  }),
}
</script>

<template>
  <v-row :style="{backgroundColor: mainColor}" class="pa-10 d-flex align-center">
    <v-col cols="6">
      <div
          class="ml-auto"
          style="max-width:555px; color:#ffffff; height:100%; display:flex; flex-direction: column; justify-content: space-between; align-items: flex-start; margin-right: 100px;"
      >
        <h1>{{title}}</h1>
        <p style="text-align:justify;">{{description}}</p>
        <v-btn
            class="button mt-10"
            rounded
            color="white"
            elevation="0"
            :style="{color: mainColor + '!important'}"
            style="fontSize: 2rem; padding: 40px 60px;"
            :to="'assessments/estatePlan'"

        >
          Assess my plan
        </v-btn>
      </div>
    </v-col>
    <v-col cols="6" class="pl-12">
      <img src="/img/assessments/estate-plan-assessment.svg" width="400" alt="estate-planning">
    </v-col>
  </v-row>

</template>

<style lang="sass" scoped>
.section
  padding-top: 180px
  padding-bottom: 180px

.img
  max-height: 100%
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  width: 100%

.max-width
  max-width: 1200px
  margin-left: auto
  margin-right: auto

.button
  text-transform: none
  font-weight: 700
  font-size: 1.45rem
  padding: 32px 38px
  letter-spacing: normal
  border-radius: 60px

.resource-type
  text-align: center
  height: 100%
  border-radius: 35px
  background-color: #f3f2f1
  row-gap: 20px
  color: #0b42a6
  transition: box-shadow 0.3s, color 0.3s, background-color 0.3s

.resource-type:hover
  box-shadow: rgb(38, 57, 77) 0px 8px 13px -10px
  background-color: #f8f7fe

.selected
  color: white !important
  background-color: #2057b1 !important

h1
  font-weight: 800
  font-size: 5.95rem

h2
  font-weight: 800
  font-size: 3.8rem
  line-height: 1.2

h3
  font-weight: 700
  font-size: 2.05rem

h4
  font-weight: 700
  font-size: 1.4rem

p
  margin-bottom: 10px
  line-height: 1.4
  font-size: 1.4rem
  font-weight: 300

*
  font-family: 'Poppins', sans-serif

a
  text-decoration: none

//Canada Map
.container
  max-width: 960px
  width: 100%
  margin: 0 auto
  position: relative

#canadaMap
  width: 90vw
  max-width: 1000px
  margin: 0 auto
  display: block
  padding-top:10vh

svg
  fill: #daf1ff

g
  transition: fill 0.08s

g:hover
  fill: #0b42a6
  cursor: pointer

.province_text
  font-size:10px
  fill: black
  color: #1d1d1f
.st2
  fill: none
.st5
  fill: #FFFFFF
.st6
  fill: black
</style>
