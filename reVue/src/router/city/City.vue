<template>
    <div>
        <!-- 使用组件 -->
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <!-- :letter="letter"将接受到的数据传递给子组件list -->
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <!-- @change="handleLetterChange"监听子组件传递过来的事件 -->
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
// 引入组件
import CityHeader from "@/components/city/header"
import CitySearch from "@/components/city/search"
import CityList from "@/components/city/list"
import CityAlphabet from "@/components/city/alphabet"
import axios from "axios"


export default {
    name:"City",
    // 声明引入的组件
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            hotCities:[],
            cities:{},
            // 定义letter
            letter:""
        }
    },
    methods:{
        getHomeInfo(){
            axios.get("/api/city.json").then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res=res.data
            //如果后端正确返回了结果，且有数据
            if(res.ret&&res.data){
                const data=res.data
                this.hotCities=data.hotCities
                this.cities=data.cities
            }
            console.log(res)
        },
        // 将接受到的事件传递给子组件list
        handleLetterChange(letter){
            this.letter=letter
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus">

</style>