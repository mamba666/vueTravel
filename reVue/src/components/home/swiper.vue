<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    props:{
        swiperList:Array
    },
    data(){
        return {
            swiperOption:{
                autoplay:4000,
                speed:2000,
                loop : true,
                pagination:".swiper-pagination",
                paginationClickable :true,
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper>>>.swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        height 0
        width 100%
        padding-bottom 30%
        img
            width 100%
</style>