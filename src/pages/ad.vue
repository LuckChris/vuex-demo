<template>
    <div class='ad-page'>
        <span class='num'>{{number}}</span>

    </div>
</template>
<script>
export default {
  data () {
    return {
      number: 3,
      timer: null
    }
  },
  created () {
    this.getCount()
  },
  methods: {
    getCount () {
      this.timer = setInterval(() => {
        if (this.number > 0) {
          this.number--
        } else {
          clearInterval(this.timer)
          this.$router.push({name: 'home'})
        }
      }, 1000)
    }

  }
}
</script>
<style >
.ad-page{
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: lavenderblush;
}
.num{
    position: absolute;
    right: 20px;
    top: 15px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
}

</style>
