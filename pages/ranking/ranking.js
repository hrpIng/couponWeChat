
Page({
  data: {
      integralData:{
          "avatar":"/static/images/common/avatar.jpg",
          "name":"陈**",
          "integral":"500"
      },
      rankingType:0
  },
  selectBox:function(e){
    // 选择类型
      this.setData({
          rankingType: e.target.dataset.num
      })
  },
  changeBox:function(e){
    //   滚动切换类型
    this.setData({
        rankingType: e.detail.current
    })
  }
})