import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware( async(to) => {
    const { $config, $auth } = useNuxtApp()
    if ($config) {
        console.log('Accessed runtime config within middleware.')
    }
    console.log('Heading to', to.path, 'but I think we should go somewhere else...')
    try {
        let currentAuthenticatedUser = await $auth.currentAuthenticatedUser();
        console.log('currentAuthenticatedUser', currentAuthenticatedUser)
        console.log('HERE navigate to ', to)
        return navigateTo(to.path)
    } catch (e) {
        // return abortNavigation()
        console.log('Error here ', e)
    }

    // const userStore = useUserStore()
    // console.log('userstore', userStore)
    // return '/login'
})
