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

    /**
     * 后台请求数据方法
     * @param {*} detail
     */
    getPaginationData(detail) {
        console.log(this.data.current);
        request(api.getUserList, this.data).then((res) => {
            let concatList = [];
            if (detail && detail.callback) {
                detail.callback();
                concatList = res.data.list;
            } else {
                concatList = [...this.data.list, ...res.data.list];
            }
            this.setData({
                list: concatList,
                total: res.data.total,
            });
            // console.log(concatList);
        });
    },

    /**
     * 监听分页组件
     * @param {*} event
     */
    onPaginationChange(event) {
        this.getPaginationData(event.detail);
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     * 开启该功能需要在【页面配置】.json中配置：
     * "enablePullDownRefresh":true
     */
    onPullDownRefresh: function () {
        this.setData({
            current: 1,
            total: 0,
        });
    },

    /**
     * 页面上拉触底事件的处理函数
     * 分页必备函数
     */
    onReachBottom: function () {
        this.setData({
            current: this.data.current + 1,
        });
    },
});
