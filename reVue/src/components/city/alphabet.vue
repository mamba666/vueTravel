<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item"
            @click="handleLetterClick" 
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters=[]
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data(){
        // 定义一个标识位，当touchstart之后才能出发move
        return{
            touchStatus:false
        }
    },
    methods:{
        handleLetterClick(e){
            // 向父组件City传递事件
            this.$emit("change",e.target.innerText) 
        },
        handleTouchStart(e){
            this.touchStatus=true
        },
        handleTouchMove(e){
            // 算法真牛逼,计算手指到达的字母的下标
            if(this.touchStatus){
                const startY=this.$refs["A"][0].offsetTop
                const touchY=e.touches[0].clientY-79
                const index=Math.floor((touchY-startY)/20)
                if(index>=0&&index<this.letters.length){
                    this.$emit("change",this.letters[index])
                }
            }
        },
        handleTouchEnd(e){
            this.touchStatus=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.stylus"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom 0
        width 0.4rem
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>