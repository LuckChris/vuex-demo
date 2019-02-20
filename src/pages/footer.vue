<template>
    <div class='footer-page'>
          <router-link class="left" :to="{name:'home'}" tag="div">
            <i class='iconfont icon-list'></i>
            <p>清单</p>
        </router-link>
        <router-link class="right" :to="{name:'complete'}" tag="div">
            <i  class='iconfont icon-ziyuan'></i>
            <p>完成</p>
        </router-link>

    </div>
</template>
<script>
export default {
  data () {
    return {
      showColor: false

    }
  }
}
</script>
<style>
.footer-page{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f4f4f4;
    background: #ffffff;
    color: #ccc;
    z-index: 100;
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.actived{
    color: #32c9ff;

}
.footer-page p{
    font-size: .4rem;
}
.footer-page i{
 font-size: 0.57rem;
}
.router-link-active{
    color: #32c9ff;
}

</style>
