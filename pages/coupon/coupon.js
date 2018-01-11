// pages/coupon/coupon.js
Page({
    data: {
        // 分类
        catagoryData:[
            "女装", "男装", "内衣", "母婴", "化妆品", "居家", "鞋包配饰", "美食", "文体","数码家电"
        ],
        // 商品列表
        goods:{
            "url":"/pages/detail/detail",
            "imgUrl":"/static/images/index/p01.jpg",
            "title":"BOB双头修容棒高光阴影棒鼻影修颜修容卧蚕笔遮瑕两用",
            "price":19.00,
            "oldprice":29.00,
            "num": 10000,
            "unit":"件",
            "coupon": 10,
            "type":"tianmao",
            "shopname":"bob旗舰店"
        },
        isChecked: false,   //是否选中优惠券
        selectCatagory:0    // 选择分类
    },
    changeSelect: function () {
        var _this = this;
        this.setData({
            isChecked: !_this.data.isChecked
        })
    },
    selectCategory:function(e){
        this.setData({
            selectCatagory: e.target.dataset.index
        })
    }
})