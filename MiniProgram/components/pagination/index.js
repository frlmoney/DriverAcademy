Component({
    options: {
        multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    },
    behaviors: ["wx://form-field"], //,"wx://form-field-group"
    /**
     * 组件的属性列表
     */
    properties: {
        /**
         * 每页显示条目个数
         */
        pageSize: {
            type: Number,
            value: 10,
        },
        /**
         * 总条目数
         */
        total: {
            type: Number,
        },
        /**
         * 当前页码
         * -1:代表下拉刷新
         */
        current: {
            type: Number,
            value: 1,
            // observer: "updateCurrent",
        },
    },

    /**
     * 数据监听器
     */
    observers: {
        current: function () {
            this.updateCurrent();
        },
    },
    /**
     * 组件的初始数据
     */
    data: {
        loading: false,
        endStatus: false,
        endCurrent: 0, // 结束页码
    },
    /**
     * 组件生命周期
     * https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html
     */
    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
        },
        ready: function () {
            // 在组件在视图层布局完成后执行
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        updateCurrent() {
            const { current, pageSize, total, endCurrent } = this.data;
            let isLoad = current == 1 ? true : false;
            if (total > 0) {
                this.updateEndCurrent();
                if ((endCurrent > 0 && current <= endCurrent) || current == 2) {
                    isLoad = true;
                }
            }
            if (isLoad) {
                this.showLoading();
                let options = {
                    current: current,
                    pageSize: pageSize,
                    total: total,
                };
                if (current == 1 && total == 0) {
                    /**
                     * 增加回调函数，用以标记是否为刷新
                     */
                    options.callback = () => {
                        wx.stopPullDownRefresh();
                    };
                }
                this.triggerEvent("change", options);
            } else {
                this.hideLoading();
            }
        },
        showLoading() {
            this.setData({ loading: true, endStatus: false });
        },
        hideLoading() {
            this.setData({ loading: false, endStatus: true });
        },
        updateEndCurrent() {
            const { current, pageSize, total } = this.data;
            this.setData({
                endCurrent: Math.ceil(total / pageSize),
            });
        },
    },
});
