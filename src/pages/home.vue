<template>
    <div class='home-page'>
        <div class="head">
            <input type="text" placeholder="请输入你想完成的事" v-model="inputValue">
            <div class='add-icon'>
                <i class="iconfont icon-add add" @click='addPlans'></i>
            </div>
        </div>
        <div class='tips-content' v-if='planList.length === 0'>
            <img src="../../static/pig.png" alt="" class='pig-img'>
            <p class='tips'>每天记录一点点~~</p>
        </div>
        <ul v-else>
            <li class='list-item' v-for='(item,index) in planList' :key="index">
                <span class='plan-date'>{{item.create_time}}</span>
                <span class='plan-content'>{{item.text}}</span>
                <i class='iconfont icon-right icon' @click='completeItem(item,index)'></i>
            </li>
        </ul>
        <page-footer></page-footer>

    </div>
</template>
<script>
import PageFooter from './footer'
import {mapActions} from 'vuex'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      inputValue: ''

    }
  },
  components: {PageFooter},
  computed: {
    planList () {
      return this.$store.state.home
    },
    countTime () {
      let now = new Date()
      let month = now.getMonth() + 1
      let day = now.getDate()
      let time = month + '月' + day + '日'
      return time
    }

  },
  methods: {
    ...mapActions(['setPlan', 'completePlan', 'delCompleteItem']),
    addPlans () {
      let data = {
        text: this.inputValue,
        create_time: this.countTime
      }
      this.inputValue === '' ? Toast('不能提交空白计划哦') : this.setPlan(data)
      this.inputValue = ''
    },
    completeItem (item, index) {
      Toast({
        message: '你完成了一件任务！',
        duration: 800
      })
      this.delCompleteItem(index)
      this.completePlan(item)
    }

  }
}
</script>
<style scoped>
.home-page{
    width: 100%;
}
.head{
    width: 100%;
    height: 1.5rem;
    background-color: #32c9ff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.head input{
    width: 80%;
    height: 1rem;
    border-radius: 8px;
    padding-left: 0.3rem;
    background: rgba(225, 225, 225, 0.3);
    color: #ffffff;
    opacity: 0.7;
    font-size: 0.365rem;
}
.add{
    color: #fff;
    font-size: 1rem;
}
.list-item{
    width: 95%;
    height: 1.4rem;
    line-height: 1rem;
    margin: .3rem auto;
    background: #ffffff;
    border-radius: 5px;

}
.tips-content{
    font-size: .38rem;
    padding-top: .3rem;
    color: #cccccc;
    text-align: center;
    padding-top: 2rem;

}
.tips{
    padding-top: 1rem;
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
