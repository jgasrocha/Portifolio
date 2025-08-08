import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js' // importa o router que você criou
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { 
  faVuejs, 
  faPhp, 
  faPython,
  faLaravel,
  faInstagram,
  faGithub,
  faLinkedin,
  faReact
} from '@fortawesome/free-brands-svg-icons';

// Adicione os ícones à biblioteca do Font Awesome
library.add(
  faVuejs, 
  faPhp, 
  faPython,
  faLaravel,
  faInstagram,
  faGithub,
  faLinkedin,
  faReact
);

const app = createApp(App)
app.use(router) // usa o router
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
