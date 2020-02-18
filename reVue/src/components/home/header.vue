<template>
    <div class="container">
        <div class="left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="input">
            <span class="iconfont">&#xe632;</span>
            输入城市、景点、游玩主题
        </div>
        <div class="right">
            {{this.city}}
            <span class="iconfont">&#xe600;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeHeader",
    props:{
        city:String
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .container
        display flex
        height .86rem
        background $bgColor
        line-height .86rem
        text-align center
        color #fff
        .left
            width .64rem
            span 
                font-size .4rem
        .input
            flex 1
            background #fff
            border-radius .1rem
            margin .12rem 0
            padding 0 .1rem
            // margin .12rem 0 .12rem .1rem
            // padding-right .1rem
            color #ccc
            line-height .62rem
            span 
                font-size .3rem
        .right
            width 1.24rem
            span 
                font-size .24rem
</style>