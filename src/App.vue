<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  <div class="tab border-1px">
    <router-link class="tab-item" to="/goods">商品</router-link>
    <router-link class="tab-item" to="/ratings">评论</router-link>
    <router-link class="tab-item" to="/seller">商家</router-link>
  </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '@/components/header/header'
export default{
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.getSeller()
  },
  methods: {
    getSeller() {
      this.$http.get('/api/seller').then(result => {
        if(result.body.errno === 0){
          this.seller = result.body.data
        }else{
          console.log("erro")
        }
      })
    }
  },
  components:{
    "v-header": header
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
@import "./common/stylus/base.styl"

#app
  .tab
    display:flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      display: block
      font-size: 14px
      color: rgb(77,85,93)
      &.active
        color: rgb(240,20,20)
</style>
