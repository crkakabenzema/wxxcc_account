const app = getApp()

// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: '../../images/user-unlogin.png',
    },
    hasuserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo!=null){
      this.setData({
        hasuserInfo:true,
        userInfo: app.globalData.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  userLogin: function() {
    // 登录
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否登录',
      success (res) {
        if (res.confirm) {
          wx.login({
            success: res => {
              console.log(res.code)
              that.getUserInfo()
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
          })
        }
      }
    })
  },
  getUserInfo: function(){
    // 获取用户信息
    var that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                hasuserInfo: true,
              })
              app.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
        if (!res.authSetting['scope.userInfo']) {
          //提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能
          wx.authorize({
            scope: 'scope.userInfo',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  console.log(res.userInfo)
                  that.setData({
                    userInfo: res.userInfo,
                    hasuserInfo: true,
                  })
                  app.globalData.userInfo = res.userInfo
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (that.userInfoReadyCallback) {
                    that.userInfoReadyCallback(res)
                  }
                }
              })
            }
          })
        }
      }
    })
  },
  cloudlogin: function(){
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] openid: ', res.result)
        app.globalData.openid = res.result.openid
        //wx.navigateTo({
        //  url: '../userConsole/userConsole',
        //})
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  //个人信息
  toMyInfo: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/myInfo/myInfo`,
    })
  },

  //完善资料
  toMyData: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/myData/myData`,
    })
  },

  //我的消息
  toMyMessage: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/myMessage/myMessage`,
    })
  },

  //我的消费
  toMyConsume: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/myConsume/myConsume`,
    })
  },

  //我的设置
  toMySetting: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/mySetting/mySetting`,
    })
  },

  //联系客服
  tel: function () {
    let that = this;
    wx.makePhoneCall({
      phoneNumber: '111111111',
    })
  },

})