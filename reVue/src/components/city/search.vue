<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="search" placeholder="输入您想要的城市">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length">抱歉没有匹配的城市，请重新输入</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data(){
        return {
            keyword:"",
            list:[],
            timer:null
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch("changeCity",city)
            this.$router.push("/")
        }
    },
    // 都是算法，牛逼牛逼，看来前端也得把算法搞起来啊
    // 根据关键字找出相对应的词
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            // 去掉关键字后列表不消失的问题
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach((val)=>{
                        if(val.spell.indexOf(this.keyword)>-1||val.name.indexOf(this.keyword)>-1){
                            result.push(val)
                        }
                    })
                }
                this.list=result
            },100)
        }
    },
    //实现滚动
    mounted(){
        this.scroll=new BScroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .search
        height .72rem
        background $bgColor
        padding 0 .1rem
        input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666
            padding 0 .1rem
    .search-content
        z-index 1
        background #eee
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .search-item
            line-height .62rem
            padding-left 0.2rem
            color #666
            background #fff
</style>