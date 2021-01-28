Component({
    options: {
        multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    },
    behaviors: [
        Behavior({
            created() {
                Object.defineProperty(this, "children", {
                    get: () => this.getRelationNodes("../pagination/index") || [],
                });
            },
        }),
        "wx://form-field",
    ], //,"wx://form-field-group"
    relations: {
        "../pagination/index": {
            type: "ancestor",
            linked(target) {},
            linkChanged(target) {},
            unlinked(target) {},
        },
    },
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        updateChildren() {
            this.children.forEach((child) => this.updateChild(child));
        },
        updateChild(child) {
            const { value, disabled } = this.data;
            child.setData({
                value: value.indexOf(child.data.name) !== -1,
                parentDisabled: disabled,
            });
        },
    },
});
