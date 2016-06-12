---
layout: post
title: WordPress美化：超炫CSS3旋转圆圈加载中蓝/黑特效
categories: [Java]
labels: [Java,JVM,调优]
img: my_pics/2016-05-0441.png
---

# WordPress美化：超炫CSS3旋转圆圈加载中蓝/黑特效

在许多WordPress博客都看到了这个特效，找了许久终于找到了，微饭直接Copy过来了，有蓝色和黑色两种颜色，可以根据自己主题选择。

![](my_pics/2016-05-0441.png)

## 蓝色版

{% highlight css %}
/* 超炫CSS3旋转圆圈加载中特效 蓝色版 */
/* 微Fan'天空 www.weeiy.com*/
#circle { 
 background-color: rgba(0,0,0,0); 
 border:5px solid rgba(0,183,229,0.9); 
 opacity:.9; 
 border-right:5px solid rgba(0,0,0,0); 
 border-left:5px solid rgba(0,0,0,0); 
 border-radius:50px; 
 box-shadow: 0 0 35px #2187e7; 
 width:50px; 
 height:50px; 
 margin:0 auto; 
 position:fixed; 
 left:30px; 
 bottom:30px; 
 -moz-animation:spinPulse 1s infinite ease-in-out; 
 -webkit-animation:spinPulse 1s infinite ease-in-out; 
 -o-animation:spinPulse 1s infinite ease-in-out; 
 -ms-animation:spinPulse 1s infinite ease-in-out; 
 
} 
#circle1 { 
 background-color: rgba(0,0,0,0); 
 border:5px solid rgba(0,183,229,0.9); 
 opacity:.9; 
 border-left:5px solid rgba(0,0,0,0); 
 border-right:5px solid rgba(0,0,0,0); 
 border-radius:50px; 
 box-shadow: 0 0 15px #2187e7; 
 width:30px; 
 height:30px; 
 margin:0 auto; 
 position:fixed; 
 left:40px; 
 bottom:40px; 
 -moz-animation:spinoffPulse 1s infinite linear; 
 -webkit-animation:spinoffPulse 1s infinite linear; 
 -o-animation:spinoffPulse 1s infinite linear; 
 -ms-animation:spinoffPulse 1s infinite linear; 
} 
@-moz-keyframes spinPulse { 
 0% { -moz-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050;} 
 50% { -moz-transform:rotate(145deg); opacity:1; } 
 100% { -moz-transform:rotate(-320deg); opacity:0; } 
} 
@-moz-keyframes spinoffPulse { 
 0% { -moz-transform:rotate(0deg); } 
 100% { -moz-transform:rotate(360deg); } 
} 
@-webkit-keyframes spinPulse { 
 0% { -webkit-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; } 
 50% { -webkit-transform:rotate(145deg); opacity:1;} 
 100% { -webkit-transform:rotate(-320deg); opacity:0; } 
} 
@-webkit-keyframes spinoffPulse { 
 0% { -webkit-transform:rotate(0deg); } 
 100% { -webkit-transform:rotate(360deg); } 
} 
@-o-keyframes spinPulse { 
 0% { -o-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; } 
 50% { -o-transform:rotate(145deg); opacity:1;} 
 100% { -o-transform:rotate(-320deg); opacity:0; } 
} 
@-o-keyframes spinoffPulse { 
 0% { -o-transform:rotate(0deg); } 
 100% { -o-transform:rotate(360deg); } 
} 
@-ms-keyframes spinPulse { 
 0% { -ms-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; } 
 50% { -ms-transform:rotate(145deg); opacity:1;} 
 100% { -ms-transform:rotate(-320deg); opacity:0; } 
} 
@-ms-keyframes spinoffPulse { 
 0% { -ms-transform:rotate(0deg); } 
 100% { -ms-transform:rotate(360deg); } 
}
{% endhighlight %} 

## 黑色版

{% highlight css %}
#circle {   
    background-color: rgba(0,0,0,0);   
    border:5px solid rgba(10,10,10,0.9);   
    opacity:.9;   
    border-right:5px solid rgba(0,0,0,0);   
    border-left:5px solid rgba(0,0,0,0);   
    border-radius:50px;   
    box-shadow: 0 0 35px #808080;   
    width:50px;   
    height:50px;   
        margin:0 auto;          
    position:fixed;   
        left:30px;   
        bottom:30px;   
    -moz-animation:spinPulse 1s infinite ease-in-out;   
    -webkit-animation:spinPulse 1s infinite ease-in-out;   
    -o-animation:spinPulse 1s infinite ease-in-out;   
    -ms-animation:spinPulse 1s infinite ease-in-out;   
  
}   
#circle1 {   
    background-color: rgba(0,0,0,0);   
    border:5px solid rgba(20,20,20,0.9);   
    opacity:.9;   
    border-left:5px solid rgba(0,0,0,0);   
    border-right:5px solid rgba(0,0,0,0);   
    border-radius:50px;   
    box-shadow: 0 0 15px #202020;    
    width:30px;   
    height:30px;   
        margin:0 auto;   
        position:fixed;   
        left:40px;   
        bottom:40px;   
    -moz-animation:spinoffPulse 1s infinite linear;   
    -webkit-animation:spinoffPulse 1s infinite linear;   
    -o-animation:spinoffPulse 1s infinite linear;   
    -ms-animation:spinoffPulse 1s infinite linear;   
}   
@-moz-keyframes spinPulse {   
    0% { -moz-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050;}   
    50% { -moz-transform:rotate(145deg); opacity:1; }   
    100% { -moz-transform:rotate(-320deg); opacity:0; }   
}   
@-moz-keyframes spinoffPulse {   
    0% { -moz-transform:rotate(0deg); }   
    100% { -moz-transform:rotate(360deg);  }   
}   
@-webkit-keyframes spinPulse {   
    0% { -webkit-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; }   
    50% { -webkit-transform:rotate(145deg); opacity:1;}   
    100% { -webkit-transform:rotate(-320deg); opacity:0; }   
}   
@-webkit-keyframes spinoffPulse {   
    0% { -webkit-transform:rotate(0deg); }   
    100% { -webkit-transform:rotate(360deg); }   
}   
@-o-keyframes spinPulse {   
    0% { -o-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; }   
    50% { -o-transform:rotate(145deg); opacity:1;}   
    100% { -o-transform:rotate(-320deg); opacity:0; }   
}   
@-o-keyframes spinoffPulse {   
    0% { -o-transform:rotate(0deg); }   
    100% { -o-transform:rotate(360deg); }   
}   
@-ms-keyframes spinPulse {   
    0% { -ms-transform:rotate(160deg); opacity:0; box-shadow:0 0 1px #505050; }   
    50% { -ms-transform:rotate(145deg); opacity:1;}   
    100% { -ms-transform:rotate(-320deg); opacity:0; }   
}   
@-ms-keyframes spinoffPulse {   
    0% { -ms-transform:rotate(0deg); }   
    100% { -ms-transform:rotate(360deg); }   
}
{% endhighlight %} 

## 应用

在文章底部</footer>前加入

{% highlight html %}
<div id="circle"></div> <div id="circle1" ></div>
{% endhighlight %}

 在文章底部</footer>后加入

{% highlight javascript %}
<script type="text/javascript">   
$(window).load(function() {        
$("#circle").fadeOut(500);   
$("#circle1").fadeOut(700);   
});   
</script>
{% endhighlight %}