# 编码建议
一些编码建议是在你使用任何语言时都最好遵守的，或者是作为编码人员所需要了解的。
## 命名
### 规范命名
至少在同一个项目中，拥有一个在项目级别统一的规范命名风格时很有必要的。在此基础上，不同的语言可能会有不同的建议，但需要避免出现不同风格的命名混用的情况 ~~，除非这个项目已经被很多不同的命名风格污染了，那就破罐破摔吧~~

### 命名理念
很多人觉得命名是一件并不重要的事情，在代码中直接`a`、`b`、`c`起手，在写小玩具比如写一个只用几次的脚本，或者做一个十分的编程题的时候感觉良好，等过了两个小时再回来看就完全糊涂了。

命名不是信口捏来的事情，例如给变量命名，将用户名变量命名为`username`，是远比写成`a`要清晰的。我们通常仅在短暂出现、含义清晰的过程变量中使用这种随意的命名方式，比如循环计数`i`，或是一些语言约定了不被使用的变量写作`_`，等。

### 命名风格
一般来说，常用的命名风格是：
* `simple_variable` - 全小写，中间使用下划线分隔不同单词，可以用做普通变量；
* `simpleFunction` - 驼峰命名法的一种，首字母小写，往后的单词首字母大写，单词之间不分隔，可以用做函数名、方法名、对象名；
* `SimpleClass` - 驼峰命名法的一种，所有单词首字母大写，单词之间不分隔，可以用做类型名；
* `SIMPLE_CONST` - 普遍用作常量命名。

:::warning 中文命名？
无论任何时候，都不建议在代码层面使用中文汉字来命名。
:::

## 文档
**非常推荐在编写代码的同时配套注释，以及在代码量较大、逻辑复杂或需要合作时配套编写文档。**

文档可以不必用英文写，用你最熟悉的中文即可，除非你的合作对象的母语不是中文，或者除非你的代码面相的群体不是中文使用者。

## 提问
### 为什么不建议中文命名？
作为开发者，掌握英文是基本功。

这与身为哪个国家的人无关，丹麦瑞典俄罗斯的程序员照样要用英文写关键字，照样要读写英文的文档。

我们当然可以把一门语言中所有的关键字全部设置汉字别名，然后用汉字定义和命名一切，写成一种很新的代码，比如`数据库对象.用户名为(用户名).密码为(密码).地址为(地址).尝试次数为(尝试次数).连接()`，只要支持UTF-8的现代语言都可以这么做，但是这有必要吗？

我不论证你的代码是否需要在不支持UTF-8的环境中运行，我也不论证你的代码是否需要给外国人阅读，我只提出以下论点：

你往往会发现，将一切都变成汉字，在实际上并没有对你的编码起到你期待的正面效果。

不过如果你乐意，采用拼音命名也倒还可以，只是请一以贯终地坚持同一种命名方案，毕竟你也不想猜`change`到底是`改变`还是`嫦娥`对吧？

### 不同语言怎么长得这么像？
事实上，参照相似的需求设计出来的编程语言，具有一定的相似程度是完全合理且正常的，无需大惊小怪。

三目运算符，一行完成条件判断与赋值；面向对象，继承构造与封装……

所以，总有人说学完一门语言之后，接着上手其他语言就会变得比较容易，这也是有道理的。