---
title: 图片自适应
key: 10014
labels: [css,js]
---

图片自适应

{% highlight html %}
<div class="div-img">
<span>
<img src="http://www.dhresource.com/200x200/f2/albu/g4/M00/2C/DF/rBVaEFcuwXWAG8miAAHCR9HqTwE205.jpg">
</span>
</div>
{% endhighlight %}

css 文件

{% highlight css %}
.center .might li .div-img {
    display: table-cell;
    height: 120px;
    overflow: hidden;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 120px;
}


.center .might li .div-img span {
    display: block;
    margin: 0 auto;
    width: 120px;
}
.center .might li .div-img span img {
    display: block;
    margin: 0 auto;
    max-height: 120px;
    max-width: 120px;
}
{% endhighlight %}