---
layout: post
title: 让输入框在Android上全屏显示
categories: [技术-Cocos]
labels: [Cocos2d-x,Cocos2d-x2.0]
key: 10006
---

## 问题

关于Cocos2d-x在Android上的输入框，我忍了好久了，一直没去折腾它，觉得无关紧要。（小若：等等，你倒底想说什么？）

我想说的是，默认情况下，我们在Android上打开的输入框是这样的：

![](my_pics/device-2013-11-14-203153-1024x576.jpg)

（小若：很好啊，完美~）
 
才怪啊~！我本来也以为没什么，我以为正常人都会在输入完之后点击那个回车按钮。

结果，我的游戏玩家有很大一部分都会在输入完之后点击返回键~！返回键！于是他们就永远都输入不了内容了，于是我就这样失去了一个又一个用户了。

## 解决方案

没关系，我可是Android手游出身的，输入框什么的我可是折腾过的（各种炫耀~）。

要解决这个问题，很简单，Cocos2d-x移植到Android时，是有一堆Java文件的（org.cocos2dx.lib记得吧？），我们找到Cocos2dxEditBoxDialog.java文件，接下来，很重要的一步，千万不要做错了：

 
嗯，然后就没什么重要的了，在181行，找到下面这段代码：

> this.mInputEditText.setImeOptions(oldImeOptions | EditorInfo.IME_FLAG_NO_EXTRACT_UI);
 
把它改成下面的样子：

> this.mInputEditText.setImeOptions(oldImeOptions | EditorInfo.IME_ACTION_GO);

## 测试

然后clean一下项目，好让这些Java文件重新编译，最后，再次运行游戏，打开输入框，效果如下：

![](my_pics/device-2013-11-14-203332-1024x576.png)

这才是我想要的，我想，这样的话，正常人在输入完内容之后都会点【完成】按钮了吧？

虽然这么做会让输入框变成全屏，用策划的思维来考虑的话，就是“让玩家的视觉完全脱离了游戏”，这是全屏的弊端。
 
不过，自己做取舍吧，反正我会选择全屏。因为，曾经有玩家因为输入不了内容而给了我游戏一个差评~！