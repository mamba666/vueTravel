<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide>
                    <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/dfa2777b-a7ea-4cec-aae4-9c5dabad8995.jpg_r_390x260x95_7733977d.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/dfa2777b-a7ea-4cec-aae4-9c5dabad8995.jpg_r_390x260x95_7733977d.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:"Gallery",
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                paginationType:"fraction"
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        left 0
        right 0
        top 0 
        bottom 0
        background #000
        z-index 1
        .wrapper
            width 100%
            .swiper-pagination
                position absolute
                color white
                img 
                    width 100%
                    height 100%
</style>