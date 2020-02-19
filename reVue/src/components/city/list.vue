<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="itemCity of item" :key="itemCity.id" @click="handleCityClick(itemCity.name)">{{itemCity.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
import {mapState} from "vuex"

export default {
    name:"CityList",
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState(["city"])
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch("changeCity",city)
            this.$router.push("/")
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    // watch用来监听传递过来的letter的变化
    watch:{
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            // 因为有文字，所以用line-height会比直接用height好,可以使文字居中
            line-height 0.54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.3%
                .button
                    padding .1rem 0
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem 
        .item-list
            .item
                line-height .76rem
                padding-left 0.2rem
</style>