---
layout: post-math
title: "Neronetwork"
description: "Tutorial"
category: "笔记"
comments : true
tags: []
---
#神经网络学习笔记
---

##概述
神经网络提供一种非线性的假设模型，来拟合我们的输入x(i)和输出y(i).

最简单的神经网络仅有1个神经元，有多个输入和一个输出.
激活函数为：
$$f(z) =\frac{1}{e^z+1} $$
或者选用双曲正切函数
$$tanh(z)=\frac{e^z-e^{-z}}{e^z+e^{-z}}$$

##神经网络模型
我们已经知道了一个神经元的典型存在方式，就可以用这些神经元来搭建一个神经网络，许多神经网络都有下图所示的结构。有一层输入节点，有若干层影藏节点和一层输出节点。表上+1的节点就是偏置节点。
![3](http://img.blog.csdn.net/20130612173744656)

可以利用线性代数度神经网络的向前传播进行求解。神经网络也可以有多个隐藏层，并且可以多输入多输出。

##神经网络与PCA
![pca](http://ufldl.stanford.edu/wiki/images/thumb/f/f9/Autoencoder636.png/400px-Autoencoder636.png)

如果隐藏层比输入和输出少，那么实际上就相当于对输入做了[稀疏编码](http://ufldl.stanford.edu/wiki/index.php/自编码算法与稀疏性)，这样训练出来的神经网络非常类似主成分分析(PCA).我在另一篇Tutorial [^1]中看到，如果不采用Sigmoid函数而采用线性函数，那么这就是一个PCA模型，影藏节点的个数就是PCA的主成分数。


##深度神经网络
![deep](http://img.blog.csdn.net/20130612173757031)

隐藏节点可以看做是对输入数据的某种特征表示，可以再对这层特征进行某种抽象，如果这样有很多层，就形成了一个深度神经网络。
深度神经网络在每一层都是输入数据在不同概念的粒度的表示，即不同特征级别的描述。

##神经网络的应用
由于神经网络训练了一个能够提取数据特征的东西，所以可以用在特征提取、分类等领域。
如图像（如手写数字、物品识别）、语音（如说话人识别、Phone Classification/Recogonition）和NLP（语言模型等）中的多种应用。

___
[^1]:[从自联想神经网络到深度神经网络](http://blog.csdn.net/celerychen2009/article/details/9079715)