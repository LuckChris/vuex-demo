<template>
    <div class='complete-page'>
      <div class="header">任务完成</div>
      <template v-if='completeList.length === 0'>
          <div class='no-content'>
               <img src="../../static/pig.png" alt="" class='pig-img'>
                <p class='no-complete'>你暂时还没有完成的任务哦~~</p>
          </div>
      </template>
      <template v-else>
          <ul class='complete-list'>
            <li class='list-item' v-for='(item,index) in completeList' :key="index">
                <span class='plan-date'>已完成</span>
                <span class='plan-content'>{{item.text}}</span>
                <i class='iconfont icon-trash-gray icon' @click='deletItem(index)'></i>
            </li>

          </ul>
      </template>
        <page-footer></page-footer>
    </div>
</template>
<script>
import PageFooter from './footer'
import { Toast } from 'mint-ui'
import {mapActions} from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {PageFooter},
  computed: {
    completeList () {
      return this.$store.state.completeData
    }
  },
  methods: {
    ...mapActions(['delete']),
    deletItem (index) {
      Toast('删除成功')
      this.delete(index)
    }
  }
}
</script>
<style scoped>
.complete-page{
    width: 100%;
}
.complete-page .header{
    width: 100%;
    height: 1.5rem;
    background-color: #32c9ff;
    color: #fff;
    font-size: .5rem;
    text-align: center;
    line-height: 1.5rem;

}
.no-content{
    width: 100%;
}
.no-complete{
    font-size: .38rem;
    padding-top: 1rem;
    color: #cccccc;
    text-align: center;
}
.pig-img{
    width:3rem;
    height: 3rem;
    margin-left: 3rem;
    margin-top: 2rem;
}
.list-item{
    width: 95%;
    height: 1.4rem;
    line-height: 1rem;
    margin: .3rem auto;
    background: #ffffff;
    border-radius: 5px;

}
.plan-date{
    font-size: .43rem;
    line-height: 1.4rem;
    color: #32c9ff;
    padding-left: 0.5rem;
    float: left;
}
.plan-content{
    width: 5rem;
    font-size: .43rem;
    line-height: 1.4rem;
    padding-left: 0.5rem;
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    float: left;
    text-decoration: line-through;
}
.icon{
    float: right;
    width: 1rem;
    line-height: 1.4rem;
    margin-right: .3rem;
    font-size: .52rem;
    color: #32c9ff;
}

</style>
