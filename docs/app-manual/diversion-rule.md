---
title: 分流规则
sidebar_position: 8
---
![](./img/diversion-rule.png#center)


### 隐藏未启用的分流组: 如果分流组规则设置为'无',则不显示

### 私有网络直连:私有网络使用直连,不经过代理

### 禁用ISP分流规则: 禁用所有机场/订阅配置提供的分流规则


### 自定义分流组:可以通过右上角'笔'按钮添加/删除/编辑等,支持以下几种设置规则
- 无: 不使用此规则
- 当前选择: 使用[主屏](../app-manual/home.md)上当前选择的类型
- 自动选择: 使用所有已启用配置里的节点列表作为候选,选择延迟最低
- 直连: 直接连接,不经过代理节点
- 拦截: 拦截请求,不允许访问网络