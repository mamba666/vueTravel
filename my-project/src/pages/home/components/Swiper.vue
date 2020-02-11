<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList">
                <img class="swiper-img" alt="" :src="item.imgUrl" :key="item.id">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    data(){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                loop:"true"
            },
            swiperList:[{
                id:"1",
                imgUrl:"//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
            },{
                id:"2",
                imgUrl:"//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
            },{
                id:"3",
                imgUrl:"//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 31.25%
        background #eee
        .swiper-img
            width 100%
</style>