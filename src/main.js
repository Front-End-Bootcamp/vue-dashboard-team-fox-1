import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard);

import './style.css'
import App from './App.vue'


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
