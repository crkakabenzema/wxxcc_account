// pages/A-centrality/A-mySetting/A-mySetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //清理缓存
  clearData: function () {
    let that = this;
    console.log('清理缓存')
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
  },

//修改密码A-password
  changePassword:function(){
    let that = this;
    wx.navigateTo({
      url: `/pages/account/mySetting/password/password`,
    })
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
  onShareAppMessage: function (res) {
    let that = this;

    return {
      title: '运动小程序',
      path: '/pages/index/index',
      success: function (res) {

      },
      fail: function (res) {

      }
    }

  }
})