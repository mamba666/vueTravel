<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import HomeRecommend from "./components/Recommend"
import axios from "axios"

export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    },
    methods:{
        getHomeInfo(){
            axios.get()
                .then(this.getHomeInfoSucc)
                .catch(console.log("2XXX"))
        },
        getHomeInfoSucc(res){
            console.log("3xxx")
        }
    },
    mounted(){
        this.getHomeInfo()  
        console.log("1xxx") 
    }
}
</script>

<style>

</style>