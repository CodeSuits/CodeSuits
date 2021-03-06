---
layout: post
title: 关于Spring事务<tx:annotation-driven/>的理解（Controller可以使用@Transactional）
categories: [技术-Spring]
labels: [annotation,Spring,事务]
key: 16061801
---

在使用SpringMvc的时候，配置文件中我们经常看到 annotation-driven 这样的注解，其含义就是支持注解，一般根据前缀 tx、mvc 等也能很直白的理解出来分别的作用。<tx:annotation-driven/> 就是支持事务注解的（@Transactional） 、<mvc:annotation-driven> 就是支持mvc注解的，说白了就是使Controller中可以使用MVC的各种注解。

首先，<tx:annotation-driven/>  会有一个属性来指定使用哪个事务管理器，如：<tx:annotation-driven transaction-manager="transactionManager" />。然后事务管理器 transactionManager 会引用 dataSource （如果我们使用JPA或hibernate，也需要指定一个 entityManagerFactory ），dataSouce 肯定就是直接对数据库的了。
    
这样逐层引用下去，所以我们使用@Transactionl 注解可以控制事务就通俗易懂了。另外要提一下的就是 spring 是使用 aop 通过 asm 操作Java字节码的方式来实现对方法的前后事务管理的。

说到这里，已经有了对 <tx:annotation-driven/> 的简单理解，那我们是否就可以在程序中所有被spring管理的类上都可以使用@Transactional注解了呢，在Service上可以使用@Transactional 注解这个是肯定的了，那总有些人也想弄明白能否在Controller 使用？答案显然是“不一定”的（与时间配置有关），下面做下解释：

在 spring-framework-reference.pdf 文档上有这样一段话：<tx:annotation-driven/> only looks for @Transactional on beans in the same application context it is defined in. This means that, if you put <tx:annotation-driven/> in a WebApplicationContext for a DispatcherServlet, it only checks for @Transactional beans in your controllers, and not your services. 

意思就是：<tx:annoation-driven/>只会查找和它在相同的应用上下文件中定义的bean上面的@Transactional注解，如果你把它放在Dispatcher的应用上下文中，它只检查控制器（Controller）上的@Transactional注解，而不是你services上的@Transactional注解。

所以，可以确定的是我们是可以在Controller上使用事务注解的，但是我们不推荐这样做（本人也从来没有这样做过），这里只是为了说明spring对<tx:annotation-driven/>的使用。