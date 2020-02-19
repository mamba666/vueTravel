<template>
    <div>
        <div class="banner">
            <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/dfa2777b-a7ea-4cec-aae4-9c5dabad8995.jpg_r_390x260x95_7733977d.jpg">
            <div class="banner-info">
                <div class="banner-title">醉雪寻欢✌冬九寨✾</div>
                <div class="banner-number">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icontupian"></use>
                    </svg>
                    39
                </div>
            </div>
        </div>
        <gallery></gallery>
    </div>
    
</template>

<script>
// 使用自定义的组件
import Gallery from "common/gallery"
export default {
    name:"DetailBanner",
    components:{
        Gallery
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        // 防止抖动
        overflow hidden
        height 0
        padding-bottom 46.666666666666%
        img
            width 100%
            height 3.5rem
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                font-size .32rem
                padding 0 .2rem .1rem .2rem
                flex 1
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                line-height .32rem
                height .32rem
                border-radius .2rem
                background rgba(0,0,0,0.5)
                font-size .24rem
                .icon
                    width 1em
                    height 1em
                    vertical-align -0.15em
                    fill currentColor
                    overflow hidden
</style>