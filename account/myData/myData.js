// pages/A-centrality/A-myData/A-myData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    userHead_img: '',
    card_img: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  //submit
  submit: function () {
    let that = this;
    that.setData({ isShow: true })
  },

  close: function () {
    let that = this;
    that.setData({ isShow: false, isFans: false });
  },

  //上传头像
  chooseHead: function () {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({ userHead_img: res.tempFilePaths })
      }
    })
  },


  //上传名片
  chooseCard: function () {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({ card_img: res.tempFilePaths })
      }
    })    
  },

  //去上传
  toUpLoad: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/uploadCard/uploadCard?card_img=` + that.data.card_img,
    })
  },

  //修改信息
  toDataInfo: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/account/dataInfo/dataInfo`,
    })
  },

  toIntroduceCompany:function(){
    let that = this;
    wx.navigateTo({
      url: `/pages/account/introduceCompany/introduceCompany`,
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
  onShareAppMessage: function () {

  }
})