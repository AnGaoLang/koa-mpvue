<template>
    <div class="container">
      <div class="userinfo" @click='login'>
        <img :src="userinfo.avatarUrl" alt="">
        <p>{{userinfo.nickName}}</p>
      </div>
      <!-- <YearProgress></YearProgress> -->

      <button v-if='userinfo.openId' @click='scanBook' class="btn">添加图书</button>
    </div>
</template>

<script>
// import qcloud from 'wafer2-client-sdk';
// import YearProgress from '@/components/YearProgress';

export default {
  data() {
    return {
      // userinfo: {},
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录',
        openId: '213'
      }
    }
  },
  components: {
    // YearProgress
  },
  created() {
    // this.userinfo = wx.getStorageSync('userinfo');
  },
  method: {
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            console.log(res.result)
          }
        }
      })
    },
    login () {
      let user = wx.getStorageSync('userinfo')
      // const that = this
      if (!user) {
        // qcloud.setLoginUrl(config.loginUrl)
        // qcloud.login({
        //   success: function (userinfo) {
        //     qcloud.request({
        //       url: config.userUrl,
        //       login: true,
        //       success (userRes) {
        //         showSuccess('登录成功')
        //         wx.setStorageSync('userinfo', userRes.data.data)
        //         that.userinfo = userRes.data.data
        //       }
        //     })
        //   }
        // })
      }
    }
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    // if (userinfo) {
    //   this.userinfo = userinfo
    // }
  }
};
</script>
<style lang='scss'>
.container {
  padding:0 30rpx;
}  
.userinfo{ 
  margin-top:100rpx;
  text-align:center;
  img {
    width: 150rpx;
    height:150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}
</style>