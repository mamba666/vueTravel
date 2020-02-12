<template>
    <div class="wrapper">
        <div class="list" v-for="item of items" :key="item.id">
            <div class="inPic">
                <img class="ninePic" :src="item.imgUrl">
            </div>
            <span class="nineText">{{item.desc}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return {
            items:[
                {
                    id:"0",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/hotel.png",
                    desc:"酒店"
                },
                {
                    id:"1",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
                    desc:"机票"
                },
                {
                    id:"2",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/train.png",
                    desc:"火车票"
                },
                {
                    id:"3",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/package.png",
                    desc:"度假"
                },
                {
                    id:"4",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/piao.png",
                    desc:"景点门票"
                },
                {
                    id:"5",
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:"海外酒店"
                },
                {
                    id:"6",
                    imgUrl:"https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
                    desc:"低价机票"
                },
                {
                    id:"7",
                    imgUrl:"https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
                    desc:"汽车票船票"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        display grid
        grid-template-columns 1.875rem 1.875rem 1.875rem 1.875rem
        grid-template-rows 1.75rem 1.75rem
        .list
            .inPic
                height 1.25rem
                .ninePic
                    display block
                    margin .1rem auto 0
                    width 1.15rem
            .nineText
                display block
                width 1.875rem
                height .4rem 
                line-height .4rem
                text-align center
                margin 0 auto
</style>