<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- <swiper-slide>
                <img class="swiper-img" src="//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg">
            </swiper-slide> -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    data (){
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                autoplay:4000,
                speed:2000,
                loop : true,
                pagination:".swiper-pagination",
                paginationClickable :true,
            },
            swiperList:[
                {
                    id:0,
                    imgUrl:"//imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg"
                },
                {
                    id:1,
                    imgUrl:"//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
                },
                {
                    id:2,
                    imgUrl:"//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        // 在 CSS 中，padding 的百分比是相对于元素自身的
        padding-bottom 30.5%
        .swiper-img
            width 100%
        
</style>