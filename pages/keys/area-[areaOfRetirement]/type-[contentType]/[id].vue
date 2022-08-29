<template>
  <NuxtLayout name = "default">
    <Content 
      :content="state.currentContent"
      :similarContent="state.similarContent"
      :contentType = "route.params.contentType"
      :areaOfRetirement = "route.params.areaOfRetirement"
    />
  </NuxtLayout>
</template>

<script setup>
import { moduleHomepages } from '~/assets/moduleHomepages'
import { reactive } from "vue";
const route = useRoute()
const router = useRouter()

const state = reactive({
  currentContent: {},
  similarContent: [],
})


//looking at the structure of the data in /assets/moduleHomepages will likely make this more readable
if(moduleHomepages && moduleHomepages[route.params.areaOfRetirement]["learningCenterData"][route.params.contentType][route.params.id]) {
  state.currentContent = moduleHomepages[route.params.areaOfRetirement]["learningCenterData"][route.params.contentType][route.params.id]
  state.similarContent = moduleHomepages[route.params.areaOfRetirement]["learningCenterData"][route.params.contentType]

  window.scrollTo(0, 0);
} else {
  router.push('/')
}

</script>
