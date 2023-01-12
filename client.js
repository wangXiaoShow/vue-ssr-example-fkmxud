import { createApp } from './app.js';
import {comp} from "./comp.js";
customElements.define('ce-comp', comp)
const app = createApp()
app.config.compilerOptions.isCustomElement = (tag) => tag === 'ce-comp'
app.mount('#app');
