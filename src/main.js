import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import router from "./router"

//App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//AddPrimeFlex
import 'primeflex/primeflex.css';

//Add Components
import InputText from 'primevue/inputtext';
import SplitButton from 'primevue/splitbutton';
import DataTable from 'primevue/datatable';
import ColumnGroup from 'primevue/columngroup';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

const app = createApp(App)

app.use(PrimeVue, {ripple: true});
app.component('pv-input-text', InputText)
app.component('pv-split-button', SplitButton)
app.component('pv-data-table', DataTable)
app.component('pv-column', Column)
app.component('pv-column-group', ColumnGroup)
app.component('pv-card', Card)
app.component('pv-button', Button)
app.component('pv-menubar', Menubar)
app.use(router);
app.mount('#app');

