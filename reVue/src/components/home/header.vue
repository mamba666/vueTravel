<template>
    <div class="container">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfanhui1"></use>
            </svg>
        </div>
        <div class="input">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconsousuo1"></use>
            </svg>
            输入城市、景点、游玩主题
        </div>
        <router-link to="/city">
            <div class="right">
                {{this.city}}
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconiconzhengli-"></use>
            </svg>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"HomeHeader",
    computed:{
        ...mapState(["city"])
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
            .icon
                width 1em
                height 1em
                vertical-align -0.15em
                fill currentColor
                overflow hidden
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
            .icon
                width 1em
                height 1em
                vertical-align -0.15em
                fill currentColor
                overflow hidden
                font-size .3rem
        .right
            min-width 1.04rem
            padding 0 .1rem
            color #fff
            .icon
                width 1em
                height 1em
                vertical-align -0.15em
                fill currentColor
                overflow hidden
                // font-size .34rem
</style>