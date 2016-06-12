---
layout: post
title: pngquant将 24/32-bit的PNG 图像 降色到 (8-bit) PNG图像压缩比率高达
categories: [cocos2dx]
labels: [cocos2dx,pngquant,图片压缩]
img: my_pics/0P2232F7_0.png
---

今天回家的路上 群里有人说了个 图片压缩 的工具 在此记录下 以备以后查看。。。pngquant。。

尝试了下 果然不错 也试了下 在cocos2d-x2.2.3中 同样的两张图片

![](my_pics/0P2232F7_0.png)

第一图是原图 39K  第二张图是11k加载到手机内存是这样的的

{% highlight bash linenos %}
	// add "HelloWorld" splash screen" 这个是原图 39K
    CCSprite* pSprite1 = CCSprite::create("pencil.png");
    pSprite1->setPosition(ccp(visibleSize.width/2 -100, visibleSize.height/2 ));
    this->addChild(pSprite1, 0);
     
    // add "HelloWorld" splash screen" 这是处理后deu图11K
    CCSprite* pSprite = CCSprite::create("pencil55.png");
    pSprite->setPosition(ccp(visibleSize.width/2+100, visibleSize.height/2));
    this->addChild(pSprite, 0);
	CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile("pencil.plist");
     
    //这是个我将处理后的图片用texturepack处理后的 pvar.ccz是14K plist是1K
    CCSprite* pSprite2= CCSprite::createWithSpriteFrameName("pencil55.png");
    pSprite2->setPosition(ccp(visibleSize.width/2+300, visibleSize.height/2));
    this->addChild(pSprite2, 0);
{% endhighlight %}

再看下内存信息：

Cocos2d: cocos2d: “/Users/ssss/Library/Application Support/iPhone Simulator/7.1/Applications/7B405B0C-5315-4DCB-9CC5-DC3B5DF7C8F5/MyGame.app/pencil.png” rc=2id=2 256 x 256 @ 32 bpp => 256 KB

Cocos2d: cocos2d: “/Users/ssss/Library/Application Support/iPhone Simulator/7.1/Applications/7B405B0C-5315-4DCB-9CC5-DC3B5DF7C8F5/MyGame.app/pencil55.png” rc=2id=3 256 x 256 @ 32 bpp => 256 KB

Cocos2d: cocos2d: “/Users/ssss/Library/Application Support/iPhone Simulator/7.1/Applications/7B405B0C-5315-4DCB-9CC5-DC3B5DF7C8F5/MyGame.app/pencil.pvr.ccz” rc=4id=4 258 x 192 @ 32 bpp => 193 KB

看完上面的信息大家应该明白了吧 。。

pvr.ccz 省内存  资源占用总的来说可以是15K 内存占用 193K

处理后的png是11K内存占用256K

没有处理的 是39K内存占用 256K

总的来说 先处理 后打包最合适 内存占用 和空间占用   平衡关系  。。。。

我的测试是这样的 。。。没有大规模的图片测试。。明天我就应用到 我先现在开发的游戏中去测试一下 效果。。