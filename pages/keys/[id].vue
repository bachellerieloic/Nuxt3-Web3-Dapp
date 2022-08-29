<template>
  <NuxtLayout name="default">
    <ModuleHomepage
      :title="state.currentModule.title"
      :description="state.currentModule.description"
      :toolsText="state.currentModule.toolsText"
      :learningCenterText="state.currentModule.learningCenterText"
      :mainColor="state.currentModule.mainColor"
      :learningCenterData="state.learningCenterContent"
      :tools="getToolsByArea(route.params.id)"
      :video="state.currentModule.video"
      :areaOfRetirement="route.params.id"
      :titleSize="(state.currentModule.titleSize) && state.currentModule.titleSize"
      :descriptionSize="(state.currentModule.descriptionSize) && state.currentModule.descriptionSize"
    />
  </NuxtLayout>
</template>

<script setup>
import { moduleHomepages } from '~/assets/moduleHomepages'
import {reactive} from "vue";
import { useToolStore } from "~/stores/tool";
import { useContentStore } from "~/stores/content";

const toolStore = useToolStore();
const contentStore = useContentStore()
const route = useRoute()
const router = useRouter()

const getToolsByArea = (area) => {
  toolStore.fetchTools();
  return toolStore.getTools(area)
}

const state = reactive({
  currentModule: {},
  learningCenterContent: {}
})

//route.params.id == areaOfRetirement
if(moduleHomepages && moduleHomepages[route.params.id]) {
  state.currentModule = moduleHomepages[route.params.id]

  contentStore.fetchContent();
  let contentTypes = ['article', 'book', 'video', 'podcast']
  contentTypes.forEach((contentType) => {state.learningCenterContent[contentType] = contentStore.getContent(route.params.id, contentType)})
  console.log("LCC", state.learningCenterContent)

  window.scrollTo(0, 0);
} else {
  router.push('/')
}

</script>
