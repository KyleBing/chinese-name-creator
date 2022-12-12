<template>
    <div class="input-block">
        <div class="label" :style="`width: ${width}px`">{{ label }}</div>
        <input
            :value="modelValue"
            class="input"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'

defineEmits(['update:modelValue'])

defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    width: {
        type: Number,
        default: 80
    },
    label: {
        type: String,
        default: '字段名'
    },
    placeholder: {
        type: String,
        default: ''
    },
})

onMounted(()=>{

})

</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.input-block{
    width: 100%;
    margin-bottom: 8px;
    font-size: $fz-main;
    display: flex;
    justify-content: stretch;
    align-items: center;
}
.label{
    flex-shrink: 0;
}
.input{
    flex-grow: 1;
    @include border-radius($radius-mobile);
    border: 1px solid $color-border;
    padding: 5px 12px;
    line-height: 26px;
    font-size: $fz-main;
    &:focus{
        border-color: $color-border-highlight;
    }
}

</style>

