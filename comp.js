import {computed, defineSSRCustomElement} from "vue";

export const comp = defineSSRCustomElement({
    emits:["update:modelValue"],
    props:["modelValue"],
    setup(props,ctx){
        const value = computed({
            get: () => props.modelValue,
            set: (value) => {
                ctx.emit("update:modelValue", value)
            }
        })
    },
    template: `<div> test comp</div>`,
})
