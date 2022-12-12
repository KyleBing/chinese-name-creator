<template>
    <div @click="$emit('click')" class="button">
        <slot/>
    </div>
</template>
<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'

defineProps({})
defineEmits(['click'])

onMounted(()=>{

})

</script>

<style lang="scss" scoped>
@import "../scss/plugin";
.button{
    text-align: center;
    padding: 8px 15px;
    min-width: 100px;
    @include border-radius($radius-mobile);
    background-color: transparentize($orange, 0.9);
    border: 1px solid transparentize($orange, 0.8);
    @extend .btn-like;
    margin-right: 15px;
    &:hover{
        background-color: transparentize($orange, 0.8);
        border-color: darken($bg-list-active, 010%) ;
    }
}

</style>

