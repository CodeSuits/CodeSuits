---
layout: post
title: 动态加载动态链接库  
categories: [general]
tags: [runtime]
---

    NSString* resourcePath = [[NSBundle mainBundle] resourcePath];
    NSString* path = [[NSBundle mainBundle] pathForResource:@"EM_91" ofType:@"framework"];
    NSLog(@"%@==%@",resourcePath,path);
    
    NSError *err = nil;
    NSBundle *bundle = [NSBundle bundleWithPath:path];
    if ([bundle loadAndReturnError:&err]) {
        NSLog(@"bundle load framework success.");
    } else {
        NSLog(@"bundle load framework err:%@",err);
    }
    
    id pOCObj = [[NSClassFromString(@"EM_91") alloc] init];
    if (pOCObj == nil) return;
    
    SEL selector = NSSelectorFromString(@"login");
    
    if ([pOCObj respondsToSelector:selector]) {
        //1.
        [pOCObj performSelector:selector];
    } else {
        NSLog(@"dddddddddddddddd");
    }