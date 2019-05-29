// pages/findMic/findMic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:['音乐',"视频","电台"],
    classifyList:[
        {
          tit:"测试歌曲1",
          img:"../../images/test1.png"
      }, {
        tit: "测试歌曲2",
        img: "../../images/test2.png"
      }, {
        tit: "测试歌曲3",
        img: "../../images/test3.png"
      }, {
        tit: "测试歌曲4",
        img: "../../images/test5.png"
      }, {
        tit: "测试歌曲5",
        img: "../../images/test4.png"
      }, {
        tit: "测试歌曲6",
        img: "../../images/test1.png"
      }
    ],
    actIndex:0,
    bannerList:[]
  },
  navClick(e){
    this.setData({
      actIndex:e.currentTarget.dataset.ind
    })
  },
  daily(){
    wx.navigateTo({
      url: '/pages/daily/daily',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.apiopen.top/musicRankings',
      success:(res)=>{
        console.log(res.data)
        this.setData({
          bannerList:res.data.result
        })
      }
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