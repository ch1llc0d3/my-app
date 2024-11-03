import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router'; // Ensure router is set up for Vue 3 syntax
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
