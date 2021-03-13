import { createApp } from 'vue';
import router from '@/router';
import App from '@/App.vue';

import VueTilt from 'vue-tilt.js';


const app = createApp(App);
app.use(router);
app.use(VueTilt);

app.mount('#app');