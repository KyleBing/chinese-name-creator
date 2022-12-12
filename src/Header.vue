<template>
    <div class="header">
        <div class="logo"><img src="./assets/img/logo.png" alt="logo"></div>
        起名工具
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'


onMounted(()=>{

})

</script>

<style lang="scss" scoped>
@import "./scss/plugin";
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
    font-size: $fz-title;
    height: 50px;
    color: white;
    //background-color: $red;
    background: $gradient-linear-red;
    @include box-shadow(1px 1px 3px transparentize(black, 0.9));
    .logo{
        margin-right: 10px;
        img {
            display: block;
            width: 26px;
        }
    }
}

</style>

