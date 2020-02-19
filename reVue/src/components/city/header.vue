<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="iconfont back">&#xe624;</span>
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
        .back
            top 0
            left 0
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>