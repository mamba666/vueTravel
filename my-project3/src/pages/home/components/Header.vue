<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont">&#xe600;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeHeader"
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        display flex
        line-height .86rem
        background-color $bgColor
        color #fff 
        .header-left
            width .64rem
            text-align center
            .iconfont
                display block
                font-size .38rem
        .header-input
            flex 1
            background-color #fff
            border-radius .1rem
            line-height .62rem
            margin .105rem 0rem .105rem .1rem
            color #ccc
            text-align center
        .header-right
            width 1.24rem
            text-align center
            .iconfont
                font-size .25rem
</style>