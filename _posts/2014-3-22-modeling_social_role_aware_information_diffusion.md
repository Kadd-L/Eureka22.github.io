---
title : Modeling Social Role-aware Information Diffusion
layout: post
description: "Tutorial"
category: "笔记"
comments : true
math: true
tags: [笔记]

---

---

#Modeling Social Role-aware Information Diffusion

Three core questions

* which topic diffuse the most
* Which member play the important role in the spreading process
* How, why and through which path will information diffuse, try to predict

## State of Art

* Epidemic Model 
	* SIR model
	* SIRS model (kinectic model)
	* other extensions SEIR(有潜伏期),MSIR(has immune)
	* DO not consider networking information, suitable for Macro level modeling
*  Stochastic Model
	* ICM model:
		Assumptions : Inactive and active
		probability of a user being active at time t is **independent** from time before t-1
	* Linear Threshold Model
		edge has weight, $$\sum w \ge T$$, inactive -> active
* Role-aware: Example
		结构上的特殊性
		
## Role-aware model
Statistics:

- 1% users as **opinion leaders**
- 1% users as **structure hole spaners**

Why difficult: 
 
- unobservabke
- change over time
- how to discover users' social role model and information diffusion simutaneously

### A simple statistics study

top 10% by PageRank: Opinion leader
**(质疑是否Valid)
**

10% Structural hole

会有overlap

Result:


- Opinion Leaders: 
users are unwilling to repost the message has been reposted 2-3 times
Reposting popular posts become a social norm

- Structural holes:
单调上升
- Normal User:
Stay low

### Activation Probability Analysis

like ICM

p vs PageRank: 先递增后递减

ICM: 

- I的假设过强？
- IC没有激活的delay, 这个模型引入在$$t+\Delta t$$ 时才激活
- $$\Delta$$ t 和 social role 有关

##Modeling

### Formulation

input: 
 
- social Network- which users are connected
- diffusion tree- comprises a set of 4


output:

- predict the diffusion tree in the future
- predict the social role


###intuition

social role depend on : 

- social attribute
- diffusion patterns	 

### Model

混合高斯模型

- 生成（这步没有太明白）

	- social role distributor: 狄利克雷分布
	- 高斯分布的参数：NG
	- Social role
	- Social attribute

Feature Vector 之和 Social role 有关

diffusion process



- Diffusion paraneters
- social role 
- calculate diffusion delay
- z ~ Bernouli

师兄提出 Role和被接受者（follower）也有关系，也就是说不是考虑general的role，而是考虑具体的role(social tie?)。

$$ \phi_{i,u,v}^t = P (z\_{i,u,v}^t = 1)  = \dots $$

### Model learning

Gibbs Sampling

MCMC的一种

估计P(X),根据P(X_0)sample一组，然后Update，迭代.
MCMC每次sample一组x
Gibbs:

$${x_1,x_2,x_3} $$
定初始值,计算：

$$P(x_1\|x_1^0,x_2^0,x_3^0) \rightarrow x_1^1$$
$$P(x_2\|x_1^1,x_2^0) \rightarrow x_2^1$$
$$P(x_3\|x_1^1,x_2^1) \rightarrow x_3^1$$

---

# 自我学习：GMM

GMM(Gaussian Mixture Modeling)是一种聚类(Clustering)算法

GMM是GSM的线性叠加

## GSM
多维随机变量符合高斯分布时，PDF为：

$$ N(x;u;\Sigma) = \frac{1}{\sqrt{2\pi |\Sigma|}} \exp[-\frac{1}{2}(x-u)^T\Sigma^{-1} (x-u)]$$

## GMM

每个GMM由K个GSM叠加而成，GSM的PDF线性叠加成GMM的PDF

$$ p(x) = \sum_{k=1}^K p(k)p(x|k) = \sum\_{k=1}^K \pi_k N(x;u_k;\Sigma_k)$$

从GMM中随机选取一个点分为两个步骤

- 选取一个GSM
- 从GSM中选取一个点

已知一批数据，如何做参数估计？

极大似然估计，找到一组参数，使得(Likelihood Function)最大。
（对于GMM，LF太小，需要去对数）

$$\sum_{i=1}^N log \sum\_{k=1}^K \pi_k N(x;u_k;\Sigma_k)$$

求导比较困难，因为log里又有求和

所以采用EM法:


---

# MCMC

TODO:

---

# Gibbs Sampling


TODO: