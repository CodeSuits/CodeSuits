---
title: 图片自适应 兼容到ie7
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

.other-items li .div-img{
    vertical-align:middle; 
    display:table-cell; 
    position:relative; 
    text-align:center; 
    width:200px; 
    height:120px;
    text-align:center;
    overflow:hidden;
}
.other-items li .div-img a{ 
    *position:absolute;
    *top:50%;
    *left:50%;
    width:200px;
    display:block;
    margin:0 auto;
}

.other-items li .div-img a img{ 
    max-height:120px; 
    max-width:200px;
    *position:relative;
    *top:-50%;
    *left:-50%;
    display:block;
    margin:0 auto;
}
{% endhighlight %}