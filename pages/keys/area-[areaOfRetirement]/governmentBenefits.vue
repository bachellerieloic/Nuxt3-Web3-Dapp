<script>
export default {
  data: () => ({
    cta: [
      {
        name: "Canadian Pension Plan",
        learnImg: "/img/tools/retirementIncome/Learn Icon.svg",
        learnLink: "https://www.empire.ca/complete-guide-canada-pension-plan-cpp",
        applyImg: "/img/tools/retirementIncome/Government-of-Canada-Logo.jpg",
        applyLink: "https://www.canada.ca/en/employment-social-development/services/my-account.html"
      },
      {
        name: "Old Age Security",
        learnImg: "/img/tools/retirementIncome/Learn Icon.svg",
        learnLink: "https://www.pwlcapital.com/old-age-security-oas-explained/",
        applyImg: "/img/tools/retirementIncome/Government-of-Canada-Logo.jpg",
        applyLink: "https://www.canada.ca/en/employment-social-development/services/my-account.html"
      },
      {
        name: "Quebec Pension Plan",
        learnImg: "/img/tools/retirementIncome/Learn Icon.svg",
        learnLink: "https://www.empire.ca/complete-guide-canada-pension-plan-cpp",
        applyImg: "/img/tools/retirementIncome/Logo_du_le_gouvernement_du_Québec.svg",
        applyLink: "https://www.rrq.gouv.qc.ca/en/services/services_en_ligne/regime_rentes_quebec/Pages/rente_retraite.aspx"
      },
    ]
  }),
}
</script>

<script setup>
  const route = useRoute()
</script>


<template>
  <NuxtLayout name = "default">
    <ToolsBanner :areaOfRetirement="route.params.areaOfRetirement" :backLink="'/keysToRetirement/area-' + route.params.areaOfRetirement + '/tool-all'"/>

    <div style="max-width: 800px" class="text-center mx-auto px-2">
      <h2 >CPP, OAS and QPP <br/> Resources</h2>
      <p class="mt-16">The Canada Pension Plan (CPP) is a monthly, taxable benefit that replaces part of your income when you retire.</p>
      <p class="mt-11">The Old Age Security (OAS) pension is a monthly payment you can get if you are 65 or older.</p>
      <p class="mt-11">The Quebec Pension Plan (QPP) is a compulsory public insurance plan. It provides people who work or have worked in Quebec and their families with basic financial protection in the event of retirement, death or disability. QPP replaces CPP for those who worked in Quebec.</p>
      <p class="mt-11 font-weight-bold">Use these resources to learn, calculate and apply for your government benefit.</p>
      <p class="mt-11 font-weight-bold">You must apply</p>
      <p class="mt-11">CPP, OAS and QPP payments are not automatic. You must apply. You should apply in advance of when you want your pension to start.</p>

      <div
        v-for="benefit in cta"
        :key="benefit.name"
        style="margin-top: 200px; margin-bottom: 50px;"
      >
        <h2 class="mb-16">{{benefit.name}}</h2>
        <v-row>
          <v-col style="height: 350px;" class="d-flex flex-column justify-space-between" cols="12" md="6">
            <img style="height: 200px" :src="benefit.learnImg"/>
            <a :href="benefit.learnLink" target="_blank">
              <v-btn
                class="button"
              >
                Learn
              </v-btn>
            </a>
          </v-col>

          <v-col style="height: 350px;" class="d-flex flex-column justify-space-between" cols="12" md="6">
            <div style="height: 200px;" class="d-flex align-center justify-center">
              <img style="width: 300px" :src="benefit.applyImg"/>
            </div>
            
            <a :href="benefit.applyLink" target="_blank">
              <v-btn
                class="button"
              >
                Apply
              </v-btn>
            </a>
          </v-col>
        </v-row>
      </div>

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
  width: 250px

.button:hover
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px !important
  transform: translate(0px, -3px)  

h1
  font-weight: 700
  font-size: 3rem

h2
  font-weight: 700
  font-size: 2.3rem
  line-height: 1.3
  color: #061469

h4
  font-weight: 800
  font-size: 1.3rem

p
  line-height: 1.4
  font-size: 1.4rem
  font-weight: 300

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