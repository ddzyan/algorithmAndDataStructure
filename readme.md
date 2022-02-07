![单元测试](https://github.com/ddzyan/algorithmAndDataStructure/workflows/Nodejs/badge.svg)

# 简介

记录学习极客时间《数据结构和算法之美》过程中，使用 `javascript` 源码实现的数据结构和算法，也会不定时更新每个算法或者数据结构对应的 leetCode 笔试题

## [算法](./algorithm)

- [排序](./algorithm/排序) (复习 17)
  - [x] 插入
  - [x] 冒泡
  - [x] 选择
  - [x] 归并
  - [x] 快排
  - [ ] 桶
  - [ ] 计数
  - [ ] 基数
- [递归](./algorithm/递归)
  - [x] 基础结构
  - [x] 剑指 Offer 10- II. 青蛙跳台阶问题
  - [x] q72 编辑距离
  - [x] q17 电话号码的字母组合
- [二分查找](./algorithm/二分查找)(复习 3)
  - [x] 在有序不重复的数组中查找指定元素，返回元素下标
  - [x] 查找第一个值等于给定值的元素
  - [x] 查找最后一个值等于给定值的元素
  - [x] 查找第一个大于等于给定值的元素
  - [x] 查找最后一个小于等于给定值的元素
  - [x] 思考题：搜索旋转排序数组
- [字符串匹配](./algorithm/字符串匹配)
  - [x] BF(暴力解法)
  - [ ] RK
- [贪心算法](./algorithm/贪心算法)
  - [x] q242 有效的字母异位词
  - [x] q122 买卖股票的最佳时机 II
  - [x] q112 买卖股票的最佳时机 I
  - [x] q455 分发饼干
- [分治算法](./algorithm/分治算法)
  - [ ] q315 计算右侧小于当前元素的个数
- [回溯算法](./algorithm/回溯算法)
  - [ ] q 面试题 08-12 八皇后
- [动态规划](./algorithm/动态规划)
  - [x] 剑指 Offer 10- II. 青蛙跳台阶问题
  - [x] q62 不同路径
  - [x] q72 编辑距离
  - [x] q322 零钱兑换
  - [x] q746 使用最小花费爬楼梯
  - [x] q53 最大子序和
  - [x] 背包问题
  - [x] q5 最长回文子串
- [暴力解法](./algorithm/暴力解法)
  - [x] q5 最长回文子串

## [数据结构](./dataStructure)

- 线性表
  - [顺序表](./dataStructure/线性表/顺序表)
    - [hash 表](./dataStructure/线性表/顺序表/hash表)
      - [x] 源码实现 js Map 对象
      - [x] q205 同构字符串
      - [x] q1 两数之和
    - [栈](./dataStructure/线性表/顺序表/栈)
      - [x] q32 最长有效括号
    - [队列](./dataStructure/线性表/顺序表/队列)
      - [x] q17 电话号码的字母组合
  - [链表](./dataStructure/线性表/链表)
    - [x] 抽象数据类型
    - [x] q86 分隔链表
    - [x] 剑指 Offer18 删除链表的节点
- [非线性表](./dataStructure/非线性表)
  - [树](./dataStructure/非线性表/树)
    - [二叉树](./dataStructure/非线性表/树/二叉树)
      - [x] 源码实现二叉查找树
      - [x] q104-二叉树的最大深度
    - [Trie 树](./dataStructure/非线性表/树/Trie)
      - [x] 源码实现 Trie 树
      - [x] 208. 实现 Trie (前缀树)
      - [x] 820. 单词的压缩编码
  - [图](./dataStructure/非线性表/图)
    - [x] 无向图源码实现

# 测试

```sh
$ npm install

$ npm  test
```

# 笔记

## 算法

### 排序算法

时间复杂度 O(n^2)

- 冒泡
- 插入
- 选择

时间复杂度 O(nlogn)

- 归并：空间复杂度(O(n))
- 快速

#### 如何优化快速排序

选择合适的分割点，例如使用：

- 随机方法
- 去中位数

### 动态规划

动态规划核心思想：找出所有可能的结果，然后从中取值

动态规划解决的问题需要符合下面三个特征：

1. 最优子结构：后面阶段的状态可以通过前面阶段的状态推导出来
2. 无后效性：某阶段状态一旦确定，就不受之后阶段的影响
3. 重复子问题：不同的决策顺序可能产生重复的状态

动态规划解法核心三个步骤：

1. 定义数组元素的含义
2. 找出数组元素之间的关系式（找出状态转移方程）
3. 找出初始值

#### 递归和动态规划的区别

递归使用了自顶向下的解法，而动态规划采用了自底向上的解法，他们的共同点都是将一个问题拆解成多个子问题。

在使用递归来解决问题的时候，如果出现了重复的子问题，则可以考虑使用动态规划来解决，避免进行重复的计算

### 贪心算法

贪心算法思想非常简单：每一步都采取最优的做法。

缺点：每一步都采取最优的做法，但是总的来说并不是最优解，无法进行考虑结合多个步骤给出最优的做法

### 分治算法

分治算法是一种思想，而递归算法是一种编码技巧，分治算法一般都会以递归来实现。

一般递归算法都需要经过下面三个步骤:

1. 将原问题拆分成多个子问题
2. 对多个子问题进行求解，当子问题足够小的时候，返回结果
3. 将多个子问题结果合并成原问题结果

### 回溯算法

回溯算法核心思想：实际上是一个类似枚举的搜索尝试过程，主要在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就回溯返回，尝试别的路径。我们可以通过剪枝少走冤枉路。

贪心算法是在每次选择当前最优的解法，而回溯在每次选择当前最优解法的时候，发现当前已不满足求解条件时，会回溯到上一步尝试别的解法。

## 数据结构

### 队列，数组，栈有什么区别

队列和栈都是具有特定方法的数组，也可以使用链表实现

队列：先进先出
栈：先进后出

### 散列表，跳表和红黑树的优缺点

散列表：

- 优点：插入，删除和查找的时间复杂度都为 O(n)，
- 缺点：不支持顺序输出，动态扩容性能消耗较大，需要解决 hash 冲突和 hash 函数性能问题

跳表：

- 优点：插入，删除和查找的时间复杂度都为 log(n)，支持顺序输出
- 缺点：需要额外的存储空间

红黑树

- 优点：插入，删除和查找的时间复杂度都为 log(n)，支持顺序输出
- 缺点：代码实现难

### 如何优化 Trie 树内容占用？

#### 原因

当保存的字符串前缀重复的清空不多的时候，那 Tire 树这种数据结构总体上来讲是比较消耗内存的，这里可以举一个例子：

假设保存的字符串全部都是英文小写字符，则每个子节点需要长度为 26 的数组，每个数组元素都要保存一个 8 字节的指针（这里并不绝对，如何操作系统是 32 位则指针长度为 4），则保存一个子节点需要消耗的内存为 8 \* 26 = 206 个字节。如果保存的字符串不只包含英文小写字符，则保存一个子节点锁消耗的内存则更多。

#### 优化

可以用其他方式来保存子节点数据，例如使用数组，但是不预先保留所有可能结果的位置，而是将字符按照大小顺序插入到数组中，每次查找的时候进行排序比较（可以使用二分查找），但是这样会降低查找效率，因为每次每个节点都需要进行查找，才能找到对应的字符串，这是用空间换时间的一种做法

### Trie 树 , 散列表 和 红黑树 的比较？

Trie 树的缺点：

- 占用空间很大：
  1. 如果字符串中包含的字符集特别多的时候
  2. 如果字符串前缀重复度较低
- 工程上并没有源码实现 Trie 树，需要自己用源码实现，会将问题复杂化
- 保存的方式使用了非线性数据结构，数据块不是连续的，这对 CPU 访问不友好

Trie 适合的场景：不适合做精准匹配
散列表 和 红黑树：更适合做精准匹配
