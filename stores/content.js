import { defineStore } from 'pinia'
import { useAppStore } from './app'
import { useUserStore } from "./user";
import {listContents, listTools} from "~/src/graphql/queries";
import { useRouter } from "nuxt/app";
import { API, graphqlOperation } from "@aws-amplify/api";
import { useStorage } from '@vueuse/core'

export const useContentStore = defineStore('contentStore', {
    state: () => ({
        content: useStorage('content', []),
    }),
    actions: {
        async fetchContent() {
            console.log('fetchContent HERE')
            // if (this.content !== []) return false
            this.content = await API.graphql({
                query: listContents,
                authMode: 'AWS_IAM'
            })
            console.log('this content', this.content)
            this.content = this.content.data.listContents.items
        },
        async forceRefresh() {
            this.content = await API.graphql(graphqlOperation(listContents, {limit: 1000}))
            this.content = this.content.data.listContents.items
        },
        getContent(areaOfRetirementFilter = "", contentTypeFilter = "") {
            if (areaOfRetirementFilter === "") return this.content;

            let sortedContent = {}

            for (const content in this.content) {
                if (this.content[content].areaOfRetirement === areaOfRetirementFilter && this.content[content].contentType === contentTypeFilter) {
                    sortedContent[content] = this.content[content]
                }
            }

            return sortedContent
        },
        getSingleContent(id) {
            for (const content in this.content) {
                if (this.content[content].id === id) {
                    return this.content[content]
                }
            }
            return false
        },
    },
    getters: {

    }
})

