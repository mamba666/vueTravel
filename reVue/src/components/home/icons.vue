<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl">
                    </div>
                    <p>{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>export default {
    name:"HomeIcons",
    props:{
        iconList:Array
    },
    data(){
        return{
            swiperOption:{
                loop : false
            }
        }
    },
    computed:{
        pages(){
            //将所有数据塞到pages数组中去
            const pages=[]
            //循环项和循环下标
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    @import "~styles/mixins.stylus"
    .icons>>>.swiper-container
        height 0
        padding-bottom 50%
    .icon
        height 100%
        position relative
        overflow hidden
        width 25%
        padding-bottom 25%
        float left
        .icon-img
            position absolute
            top 0
            left 0
            bottom .44rem
            right 0
            box-sizing border-box
            padding .1rem
            img
                display block
                margin 0 auto
                height 100%
        p
            position absolute
            left 0
            bottom 0
            right 0
            height .44rem
            line-height .44rem
            color $textColor
            text-align center
            ellipsis()
            margin 0 .1rem
</style>