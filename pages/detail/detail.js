Page({
  data: {
    bannerData:[
        "/static/images/detail/banner.jpg",
        "/static/images/detail/banner.jpg",
        "/static/images/detail/banner.jpg"
    ],
    // 相似商品
    productItem: {
        "url": "pages/index/index",
        "imgUrl": "/static/images/index/p01.jpg",
        "title": "BOB双头修容棒高光阴影棒鼻影修颜修容卧蚕笔遮瑕两用初学者V脸侧",
        "price": "19.23",
        "discount": "100"
    },
    qrLayer:false
  },
  qrLayerState:function(){
      var _this = this;
      this.setData({
          qrLayer: !_this.data.qrLayer
      })
  }
})