## [DriverAcademy](https://github.com/frlmoney/DriverAcademy)

2021.1.27:基于[Vant Weapp](https://vant-contrib.gitee.io/vant-weapp/#/intro)开发原生微信小程序时遇到分页问题，发现**Vant Weapp**并未提供，分页组件(pagination)，搜索后发现几乎没有相关的开源的组件；

唯一可供参考的仅有[wxapp-pagination](https://github.com/phoebeCodeSpace/wxapp-pagination)及官方给出的[onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onReachBottom)；

分页需求非常基础，因此该问题需要解决，因此萌生了一个Demo的项目；

由于是教程文档，灵感来源于法拉利车手学院([Ferrari Driver Academy](https://zh.wikipedia.org/wiki/%E6%B3%95%E6%8B%89%E5%88%A9%E8%BB%8A%E6%89%8B%E5%AD%B8%E9%99%A2))，由此才有了**Driver Academy**；

> **Driver Academy**旨在分享简单的Demo；
>
> 至于组件规模成型后会以独立的项目进行发布；
>
> 微信小程序的页面风格，作者本人比较倾向于:
>
> - [WeUI](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/):基于样式库weui-wxss开发的小程序扩展组件库，同微信原生视觉体验一致的UI组件库，由微信官方设计团队和小程序团队为微信小程序量身设计，令用户的使用感知更加统一。
> - [ColorUI](https://github.com/weilanwl/ColorUI):是一个css库！！！在你引入样式后可以根据class来调用组件，一些含有交互的操作我也有简单写，可以为你开发提供一些思路。

技术可能设及到：.Net、Java、HTML、JavaScript、Vue、CSS等。

用到的开发工具：[Visual Studio 2019](https://visualstudio.microsoft.com/zh-hans/vs/)、[Visual Studio Code](https://code.visualstudio.com/)、[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)；

那么就由微信小程序分页组件(pagination)来开始我们的旅程吧！！！

#### [MiniProgram](https://github.com/frlmoney/DriverAcademy/tree/master/MiniProgram)

> 基于原生微信小程序开发的Demo，使用[Vant Weapp](https://vant-contrib.gitee.io/vant-weapp/#/intro)来提升视觉体验；
>
> 第一步 通过npm安装Vant Weapp：
>
> \# 通过 npm 安装 
>
> ```
> npm i @vant/weapp -S --production
> ```
>
> \# 通过 yarn 安装 
>
> ```
> yarn add @vant/weapp --production
> ```
>
> 第二步 构建 npm 包：
>
> - 微信开发者工具=>工具=>构建 npm；
> - 微信开发者工具=>详情=>本地设置=>使用npm模块(**被选中**)；
>
> 包含组件：
>
> - 分页组件(pagination):
>
>   [wxapp-pagination](https://github.com/phoebeCodeSpace/wxapp-pagination)使用小程序独有的[抽象节点](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)，该方式每次需要额外进行配置组件，没有灵活性；由此将方案由抽象节点转为插槽(slot)，由于微信小程序的各种限制，无法实现类似于[element table](https://element.eleme.io/#/zh-CN/component/table)模式的slot-scope配置，因此灵活性受到了很大的限制，望有高手能在此基础上进行升级改进；

