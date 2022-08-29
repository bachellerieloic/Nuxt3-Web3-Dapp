import { defineStore } from 'pinia'
import { useAppStore } from './app'
import { useUserStore } from "./user";
import { listTools } from "~/src/graphql/queries";
import { useRouter } from "nuxt/app";
import { API, graphqlOperation } from "@aws-amplify/api";
import { useStorage } from '@vueuse/core'

export const useToolStore = defineStore('toolStore', {
    state: () => ({
        tools: useStorage('tools', []),
    }),
    actions: {
        async fetchTools() {
            console.log(this.tools);
            if (this.tools.length > 0) return false
            this.tools = await API.graphql({
                query: listTools,
                authMode: 'AWS_IAM'
            })
            console.log('this tools', this.tools)
            this.tools = this.tools.data.listTools.items
        },
        async forceRefresh() {
            this.tools = await API.graphql(graphqlOperation(listTools), {limit: 1000});
            this.tools = this.tools.data.listTools.items
        },
        getTools(areaOfRetirementFilter = "") {
            if (areaOfRetirementFilter === "") return this.tools;

            let sortedTools = {}

            for (const tool in this.tools) {
                if (this.tools[tool].areaOfRetirement === areaOfRetirementFilter) {
                    sortedTools[tool] = this.tools[tool]
                }
            }

            return sortedTools
        },
        getSingleTool(id) {
            for (const tool in this.tools) {
                if (this.tools[tool].id == id) {
                    return this.tools[tool]
                }
            }
            return false
        },
    },
    getters: {

    }
})

