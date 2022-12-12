<template>
    <Header/>
    <div class="container">

        <div class="setup">
            <InputBlock v-model="familyName" :width="80" label="姓" placeholder="请输入姓"/>
            <InputBlock v-model="secondCharacterDictString" :width="80" label="中间字" placeholder="请输入二位字的列表"/>
            <InputBlock v-model="thirdCharacterDictString" :width="80" label="末尾字" placeholder="请输入三位字的列表"/>
            <InputBlock v-model="countPer" :width="80" label="数量" placeholder="单次生成数量"/>
        </div>

        <div class="operations">
            <Button @click="submitInfo">保存配置</Button>
            <Button @click="shuffleName">生成新名字</Button>
            <Button @click="clearNameList">清空</Button>
        </div>

        <div class="results">
            <NameItem v-for="item in nameList" :key="item">{{ item }}</NameItem>
        </div>

    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import Header from "./Header.vue";
import InputBlock from "./components/InputBlock.vue";
import Button from "./components/Button.vue";
import NameItem from "./components/NameItem.vue";

// 边界 insets
let contentInsets = ref({
    windowsHeight: window.innerHeight,
    windowsWidth: window.innerWidth,
    heightPanel: window.innerHeight - 45, // 除 navbar 的高度
})

// input
let familyName = ref('')
let secondCharacterDictString = ref('')
let thirdCharacterDictString = ref('')
let countPer = ref('50')


// localstorage save & load
function saveDictInfo(info){
    localStorage.setItem('NameDict', JSON.stringify(info))
}

function loadDictInfo(){
    let nameDictString = localStorage.getItem('NameDict')
    if (nameDictString){
        let nameDictObject = JSON.parse(nameDictString)
        familyName.value = nameDictObject.familyName
        secondCharacterDictString.value = nameDictObject.secondCharacterDictString
        thirdCharacterDictString.value = nameDictObject.thirdCharacterDictString
        countPer.value = nameDictObject.countPer
    }
}


// ON MOUNTED
onMounted(()=>{
    // 隐藏载入动画
    document.querySelector('.preloading').style.display = 'none'

    // Window insets
    window.onresize = () => {
        contentInsets.value = {
            windowsHeight: window.innerHeight,
            windowsWidth: window.innerWidth,
            heightPanel: window.innerHeight - 45, // 除 navbar 的高度
        }
    }

    // load name dict
    loadDictInfo()
})



// 确定字典
function submitInfo(){
    saveDictInfo({
        familyName: familyName.value,
        secondCharacterDictString: secondCharacterDictString.value,
        thirdCharacterDictString: thirdCharacterDictString.value,
        countPer: countPer.value,
    })
}

// 生成随机名字
let nameList = ref([])
function shuffleName(){
    if (familyName.value && (secondCharacterDictString.value || thirdCharacterDictString.value)){
        for (let i=0;i<Number(countPer.value);i++){
            let secondCharacter = secondCharacterDictString.value && getRandomCharacterFromString(secondCharacterDictString.value)
            let thirdCharacter = thirdCharacterDictString.value && getRandomCharacterFromString(thirdCharacterDictString.value)
            nameList.value.push(`${familyName.value}${secondCharacter || ''}${thirdCharacter || ''}`)
        }
    }
}
function clearNameList(){
    nameList.value = []
}

/**
 * 获取字符串中一个随机字符
 * @param str
 * @returns {*}
 */
function getRandomCharacterFromString(str){
    let pool = str.split('')
    let randomIndex = Math.round(Math.random() * (pool.length - 1))
    return pool[randomIndex]
}


</script>

<style lang="scss">
@import "scss/main";
$padding: 30px;
.setup{
    padding: $padding;
}
.operations{
    display: flex;
    justify-content: center;
}
.results{
    flex-flow: row wrap;
    padding: $padding;
    display: flex;
    justify-content: flex-start;
}
</style>

