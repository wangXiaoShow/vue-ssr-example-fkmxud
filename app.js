import {createSSRApp, defineComponent, computed, defineSSRCustomElement} from 'vue';
import { comp}  from "./comp.js";

export function createApp() {
  return createSSRApp({
    components:{
      'ce-comp': comp
    },
    setup(){

    },
    template: `<ce-comp />`,
  });
}
