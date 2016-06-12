《咀嚼之味》博客
===========

本博客遵循MIT开源协议。

##如何组建出我的博客
- Jekyll: 静态网站模版引擎
- Github Pages: 挂载博客的服务器
- UPYUN: 将静态图片都存放于又拍云上
- grunt: 用于网站的静态文件自动合并压缩，并部署
- 加速乐: DNS解析与线路优化
- React: 使用React来组织“[所有文章](http://jerryzou.com/all-articles/)”页面

##编译与部署

```
grunt build      #本地编译
grunt debug      #本地编译并启动测试服务器
grunt release    #本地编译出线上版本（应用各种优化）
grunt serve      #本地编译并启动测试服务器（应用各种优化）
grunt deploy     #将站点发布到 gh-pages 分支下
```
