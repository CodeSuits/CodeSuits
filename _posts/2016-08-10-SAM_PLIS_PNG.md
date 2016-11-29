---
layout: post
title: SAM文件 + PLIST文件 + PNG文件怎么播放动画
categories: [技术-Cocos]
labels: [Cocos,动画格式]
key: 16081001
---

先从最近的工作开始讲起吧，记忆最清楚。

做游戏客户端的程序都知道，动画制作是非常费时费力的工作，先列举几个常用的做动画的方法：用引擎底层支持的动画（比如移动、放大缩小等），帧动画和粒子动画。Cocos2dX对于动画的支持相对比较简单，想要用的东西一般都得自己写。这就让我想到Flash，一个非常经典好用的动画制作软件，有没有一个方法能让Flash为Cocos2dx所用。

经过一系列的搜索和尝试，突然发现一个很好用的工具：Super Animation Conv。名字听上去非常霸气，不过也挺俗。这个软件是开源的，所以可以放心使用。在用过之后，我对这个工具简直爱不释手，推荐给同事之后也广受好评，大大提高了工作效率。更让我钦佩的，这个软件是跟我们一样的中国工程师的杰作。接下来我们来介绍一下工具的用途，我也做一把出口转内销的活。帮大家做一些翻译工作。

简而言之，这个工具可以让你的游戏彻底摒弃帧动画。相比较帧动画而言，这种方式更省资源（图片和内存）和更省去了程序大量繁琐的工作。首先，动画师把需要的动画用Flash编辑好，他可以使用Flash对象的移动，缩放或旋转反转等等功能。导出成SWF文件后用工具自带的Super Animation Converter工具（同时支持Windows和Mac）导出成动画描述文件Sam文件和所有动画中用到的图片素材。最后就该程序出场了。

在工具附带的示例代码里可以找到几个类，只要把这几个类导入游戏工程中，就能使用前一个步骤得到的Sam资源了。来一段Example：

{% highlight html %}
std::string anAnimFileFullPath = CCFileUtils::sharedFileUtils()->fullPathFromRelativePath(“Sample.sam”);
SuperAnimNode* mAnim = SuperAnimNode::create(anAnimFileFullPath, 0, this);
addChild(mAnim);
mAnim->setPosition(ccp(aScreenSize.width * 0.5f, aScreenSize.height * 0.5f));
mAnim->PlaySection("fade");
{% endhighlight %}

就这样，动画制作的名称为fade的动画将会播放。

在实际运用中，有人会问，如何去需要监听动画的进度，比如需要在某一时刻配合播放某一个声音特效，或者想在动画播放完毕之后处理一些游戏逻辑。没关系，工具提供了监听接口：


{% highlight html %}
class SuperAnimNodeListener
{
public:
virtual void OnAnimSectionEnd(int theId, std::string theLabelName){}
virtual void OnTimeEvent(int theId, std::string theLabelName, int theEventId){}
};
{% endhighlight %}

个人觉得第二个接口OnTimeEvent已经够用了，并且能包含第一个接口的功能。

原因如下，在注册监听器的时候要添加theTimeFactor参数来表示触发事件的时间。这个时间是一个百分比参数，从0到1分别表示动画的起始和结束。
{% highlight html %}
// for time event
// theTimeFactor is in [0.0f, 1.0f],
// theTimeFactor = 0.0f means the event will be triggered at the first frame,
// theTimeFactor = 1.0f means the event will be triggered at the last frame
void registerTimeEvent(const std::string &theLabel, float theTimeFactor, int theEventId);
{% endhighlight %}

说了这些基本的用法，我们最后请出作者：

Github上的项目：https://github.com/CodeSuits/super-animation-samples 里面包含了代码，论坛和博客的地址。欢迎大家去试用。另外提一点，已经有好几个大作用了这套工具了，所以成熟度相对是挺高的，可靠度也高。如有意见欢迎留言
