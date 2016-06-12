---
layout: post
title: COCOS2DX 3.X 解决TABLEVIEW 、SCROLLVIEW上的MENU问题
categories: [cocos2dx]
labels: [cocos2dx,menu,TABLEVIEW,SCROLLVIEW]
img: my_pics/0P2232F7_0.jpg
---

![](my_pics/0P2232F7_0.jpg)

问题有两个（我主要解决的就这两个）最近在做霸气三国的项目图片都是从网上拔下来的 以前也有这样的情况 只是开始都是学习怎么用  工作两年了 没有真正的钻研过什么都是在如何用上花费时间

1滑出View区域还可点击

2导致点击menu后View不能滑动）

第一个问题我是改了menu的源码 添加了 几个函数 判断函数 原理就是

判断touch事件的触摸点是不是在TableView 、ScrollView上来返回false还是true

直接上代码

{% highlight bash linenos %}
void Menu::setTouchlimit(cocos2d::Node *node)
{
    m_szTouchLimitNode=node;
    m_bTouchLimit=true;
}
bool Menu::isInTouchLimit(Touch* touch)
{
    if(m_bTouchLimit)
    {
        Vec2 touchLocation = touch->getLocation();
        
        Vec2 local = m_szTouchLimitNode->convertToNodeSpace(touchLocation);
        Rect r = m_szTouchLimitNode->getBoundingBox();
        r.origin = Vec2::ZERO;
        
        if (!r.containsPoint(local))
        {
            return true;
        }
    }
    return false;
}
{% endhighlight %}

> 在onTouchBegan

{% highlight bash linenos %}
bool Menu::onTouchBegan(Touch* touch, Event* event)
{
    if (_state != Menu::State::WAITING || ! _visible || !_enabled)
    {
        return false;
    }
    
    for (Node *c = this->_parent; c != nullptr; c = c->getParent())
    {
        if (c->isVisible() == false)
        {
            return false;
        }
    }
    //luohanguo
    if(isInTouchLimit(touch))
    {
        return false;
    }
    //luohanguo
    _selectedItem = this->getItemForTouch(touch);
    if (_selectedItem)
    {
        _state = Menu::State::TRACKING_TOUCH;
        _selectedItem->selected();
        
        return true;
    }
    
    return false;
}
{% endhighlight %}

> 在使用过程中

itemMenu->setTouchlimit(zhuFangTableView)

把当前的TableView 、ScrollView传过去就行了。

第二个问难我只是简单的处理了下

auto touchListener = EventListenerTouchOneByOne::create();

//修改menu的优先级事件向下层传递

touchListener->setSwallowTouches(false);

没有处理多点触摸 如果有需要的同学可以自己添加

以上内容我只做记录 没有经过长期的实战考验 可能不是完美的解决方案。希望大神能指点一二 。