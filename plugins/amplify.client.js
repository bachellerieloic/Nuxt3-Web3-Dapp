import { defineNuxtPlugin } from '#app';

import awsConfig from '../src/aws-exports';
import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';

export default defineNuxtPlugin(nuxtApp => {
    Amplify.configure(awsConfig);

    return {
        provide: {
            auth: Auth,
        },
    };
});
