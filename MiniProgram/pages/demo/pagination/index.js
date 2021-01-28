import { api, request } from "../../../api/mockService";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        total: 0,
        current: 1,
        pageSize: 20,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getPaginationData();
    },
    getPaginationData() {
        console.log(this.data.current);
        request(api.getUserList, this.data).then((res) => {
            const concatList = [...this.data.list, ...res.data.list];
            this.setData({
                list: concatList,
                total: res.data.total,
            });
            console.log(concatList);
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    onPaginationChange(event) {
        // console.log(event.detail);
        this.getPaginationData();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     * 分页必备函数
     */
    onReachBottom: function () {
        this.setData({
            current: this.data.current + 1,
        });
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
});
