<template>
    <div>
        <!-- 使用组件 -->
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
//引入Home所需要的组件
import HomeHeader from "@/components/home/header"
import HomeSwiper from "@/components/home/swiper"
import HomeIcons from "@/components/home/icons"
import HomeRecommend from "@/components/home/recommend"
import HomeWeekend from "@/components/home/weekend"
//引入axios
import axios from "axios"


export default {
    name:"Home",
    //声明引入的组件
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            city:"",
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            axios.get("/api/index.json").then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res=res.data
            //如果后端正确返回了结果，且有数据
            if(res.ret&&res.data){
                const data=res.data
                this.city=data.city
                this.swiperList=data.swiperList
                this.iconList=data.iconList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
            console.log(res)
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus">

</style>