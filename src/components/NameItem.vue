<template>
    <div @click="toggleActive" :class="['name-item', {active: isActive}]">
        <slot/>
    </div>
</template>
<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'
let isActive = ref(false)

defineProps({})
defineEmits(['click'])

onMounted(()=>{

})

function toggleActive(){
    isActive.value = !isActive.value
}

</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.name-item{
    min-width: 100px;
    border: 1px solid $color-border;
    padding: 8px 12px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    &:hover{
        background: $gradient-linear-purple;
        color: white;
        cursor: pointer;
        border-color: $purple;
    }
    &.active{
        //font-weight: bold;
        background: $gradient-linear-blue;
        color: white;
        cursor: pointer;
        border-color: $blue;
        @include border-radius($radius-mobile);
        @include transform(scale(1.2))
    }
}

</style>

