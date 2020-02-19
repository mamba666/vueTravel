<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
                <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of recommendList" :key="item.id">
                    <img :src="item.imgUrl">
                    <div class="info">
                        <p class="info-title">
                            {{item.title}}
                        </p>
                        <p class="info-desc">
                            {{item.desc}}
                        </p>
                        <button class="btn">查看详情</button>
                    </div>
                </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        recommendList:Array
    }
}
</script>

<style lang="stylus" scoped>
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        // 规定文本块中首行文本的缩进
        text-indent .2rem
    .item
        display flex
        height 1.9rem
        overflow hidden
        img
            width 1.7rem
            height 1.7rem
            margin .1rem
        .info
            flex 1
            margin .1rem
            .info-title
                line-height .54rem
                font-size .32rem
            .info-desc
                line-height .4rem
                color #ccc
            .btn
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
</style>