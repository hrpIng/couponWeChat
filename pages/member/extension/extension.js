Page({
  data: {
      // 商品列表
      goods: {
          "url": "/pages/detail/detail",
          "imgUrl": "/static/images/index/p01.jpg",
          "title": "BOB双头修容棒高光阴影棒鼻影修颜修容卧蚕笔遮瑕两用",
          "price": 19.00,
          "oldprice": 29.00,
          "num": 10000,
          "unit": "件",
          "coupon": 10,
          "type": "tianmao",
          "shopname": "bob旗舰店"
      },
      scrollHeight:0,
      fixedTop:false
  },
  onLoad: function () {
      var _this = this;
      wx.createSelectorQuery().select('#my-tg').fields({
          size: true
      }, function (res) {
          _this.setData({
              scrollHeight: res.height
          })
      }).exec()

  },
  onPageScroll: function (sTop) {
      if (sTop.scrollTop > this.data.scrollHeight) {
          this.setData({
              fixedTop: true
          })
      } else {
          this.setData({
              fixedTop: false
          })
      }
  }
})