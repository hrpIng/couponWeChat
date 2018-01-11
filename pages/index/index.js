Page({
    data: {
        //   banner数据
        bannerData: [
            {
                "imgUrl": "https://gw.alicdn.com/tfs/TB1QB.ag6ihSKJjy0FiXXcuiFXa-440-180.jpg",
                "url": "pages/index/index"
            },
            {
                "imgUrl": "https://gw.alicdn.com/tfs/TB16sNulLDH8KJjy1XcXXcpdXXa-750-275.jpg_q75.jpg",
                "url": "pages/index/index"
            },
            {
                "imgUrl": "https://gw.alicdn.com/tfs/TB1QB.ag6ihSKJjy0FiXXcuiFXa-440-180.jpg",
                "url": "pages/index/index"
            }
        ],
        // 5个分类数据
        catagory: [
            {
                "imgUrl": "/static/images/common/c01.png",
                "url": "pages/index/index",
                "text": "签到"
            },
            {
                "imgUrl": "/static/images/common/c02.png",
                "url": "pages/index/index",
                "text": "积分商城"
            },
            {
                "imgUrl": "/static/images/common/c03.png",
                "url": "pages/index/index",
                "text": "淘抢购"
            },
            {
                "imgUrl": "/static/images/common/c04.png",
                "url": "pages/index/index",
                "text": "聚划算"
            },
            {
                "imgUrl": "/static/images/common/c05.png",
                "url": "pages/index/index",
                "text": "9.9包邮"
            }
        ],
        // 首页产品项数据
        productItem: {
            "url":"/pages/detail/detail",
            "imgUrl": "/static/images/index/p01.jpg",
            "title": "BOB双头修容棒高光阴影棒鼻影修颜修容卧蚕笔遮瑕两用初学者V脸侧",
            "price": "19.23",
            "discount": "100"
        },
        bannerHeight: 0, // banner的高度
        searchAddAct: false // 首页搜索栏变化

    },
    onLoad: function () {
        var _this = this;
        wx.createSelectorQuery().select('#banner').fields({
            size: true
        }, function (res) {
            _this.setData({
                bannerHeight: res.height
            })
        }).exec()

    },
    onPageScroll: function (sTop) {
        if (sTop.scrollTop > this.data.bannerHeight-40) {
            this.setData({
                searchAddAct:true
            })
        }else{
            this.setData({
                searchAddAct: false
            })
        }
    }
})
