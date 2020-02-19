<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <svg class="icon back" aria-hidden="true">
                <use xlink:href="#iconfanhui1"></use>
            </svg>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name:"CityHeader"
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .header
        position relative
        height .86rem
        line-height .86rem
        overflow hidden
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .icon
            width 1em
            height 1em
            vertical-align -0.15em
            fill currentColor
            overflow hidden
        .back
            top .20rem
            left 0
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>