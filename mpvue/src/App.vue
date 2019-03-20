<script>
import { get } from './utils/fetch.js'
import { showToast } from './utils'
import qcloud from 'wafer2-client-sdk'
import config from './config'
// 小程序的入口文件没有html（wxml），所以这里也就没有template。
export default {
  async created () {
    // let user = wx.getStorageSync('userInfo');
    // if (!user) {
    //   qcloud.setLoginUrl(config.loginurl);
    //   qcloud.login({
    //     success(userInfo) {
    //       console.log('登录成功', userInfo);
    //       wx.setStorageSync('userInfo', userInfo);
    //       showToast('登录成功', 'success');
    //     },
    //     fail(err) {
    //       console.log('登录失败', err);
    //     } 
    //   })
    // }
    
    
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    await get('/weapp/demo');

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style lang="scss">
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom:5px;
}
.text-primary{
  color:#EA5149;
}
.btn{
  color:white;
  background:#EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active{
  background: #FA5A49;
}
</style>
