# 基本类型
Python提供了开箱即用的基本数据类型，所有这些数据类型的实例都是对象，自身拥有许多方法。
* **str** - 字符串
* **int** - 整形
* **float** - 浮点型
* **tuple** - 元组
* **list** - 列表
* **dict** - 字典
* **bool** - 布尔值
* **None** - None

[以上类型也可用于Python类型提示中，你也可以前往查看。](/python/type-hint)

## 字符串
同其底层的C语言不同，Python不区分字符和字符串，自然也不区分单引号`''`和双引号`""`。只是如果你需要在单引号包裹的字符串中再包含引号，则只能使用双引号，或者在内部的单引号之前添加斜杠`\`。

在代码中使用引号包含的就是字符串，这与包含的内容是什么形式无关。例如，`"1"`是字符串，`"1.3"`也是字符串，而`1`是整形，`1.3`是浮点型。

你可以使用`len(string)`获取字符串`string`的长度；另外还有一些典型的字符串方法较为常用，在此稍作介绍。
### 运算
字符串之间可以使用`+`拼接，字符串`*`整形可以快速重复拼接字符串。
```python
string = "Hello, World!"
print(string+string)
print(string*3)
```
```python
Hello, World!Hello, World!
Hello, World!Hello, World!Hello, World!
```
### `split`切割
```python
string = "Hello, World! I am a cat."
stringList = string.split()
print(string)
print(stringList)
```
```python
Hello, World! I am a cat.
['Hello,', 'World!', 'I', 'am', 'a', 'cat.']
```
`split`方法可选地接收参数，默认以空格将字符串切割成列表，将连续的多个空格视作一个空格。你可以传入一个字符串来替换默认的空格，比如这样：
```python
string = "Hello, World! I am a cat."
stringList = string.split(",")
print(string)
print(stringList)
```
```python
Hello, World! I am a cat.
['Hello', ' World! I am a cat.']
```
**默认以空格做切割。不可以传入空字符串，否则会得到`ValueError`。** 在没有找到提供的字符串时，即没有做任何切割，将会返回一个只有一项的列表，其中包含原字符串。

### `join`拼接
```python
stringList = ['Hello,', 'World!', 'I', 'am', 'a', 'cat.']
string = " ".join(stringList)
print(stringList)
print(string)
```
```python
['Hello,', 'World!', 'I', 'am', 'a', 'cat.']
Hello, World! I am a cat.
```
与`split`相反，`char.join(stringList)`会将传入的字符串列表`stringList`以`char`为分割符拼接成一个字符串。

### `replace`替换
```python
string1 = "Hello, World!"
string2 = string1.replace("World", "Mango")
print(string1)
print(string2)
```
```python
Hello, World!
Hello, Mango!
```
`replace`接收两个字符串参数，查找所有的第一个字符串并将其替换成第二个字符串。如果没有找到匹配的字符串则不做替换，如果找到多个匹配的字符串则全部替换。

### f-string
C语言中的`printf`语句打印时，可以在字符串中插入`%d`等格式控制符，从而将其他的数据嵌入在字符串中输出。

Python中同样存在这样的功能。在较新的Python版本中，我们使用f-string更加方便地实现在字符串中嵌入数据。
```python
name = "Mango"
age = 18
string = f"Hello, {name}! 你今年已经{age}岁辣！"
print(string)
```
```python
Hello, Mango! 你今年已经18岁辣！
```
在f-string概念被提出但正式实现之前的版本，你可以使用其早期版本实现字符串嵌入数据：
```python
name = "Mango"
age = 18
string = "Hello, {}! 你今年已经{}岁辣！".format(name, age)
print(string)
```
如果这种写法也不被支持（Python3的早期版本），那么就也只能使用`%d`这样的格式控制符了。
```python
name = "Mango"
age = 18
string = "Hello, %s! 你今年已经%d岁辣！" % (name, age)
print(string)
```
在Python层面，以上三种写法是完全等价的。虽然下面的写法能兼容更早的Python3版本，但依然优先建议第一种f-string。

诸如Javascript之类的语言要求使用特殊的反引号表示可嵌入变量的模板字符串，Python没有此类要求，单引号和双引号均是合法的。

## 整形
所谓整形就是整数。不像其他一些语言存在长整形`long int`之类，Python的`int`直接能够进行大数操作，不必担心溢出。

整形之间的加减乘法均返回整形，整形之间的除法得到浮点型。
### 运算
```python
a = 8
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
```
```python
11
5
24
2.6666666666666665
2
2
```
`//`是整除，`%`是取余数。当两个运算数都是整形时，这两个运算符也返回整形。

## 浮点型
浮点型的特性与整形类似，只是除了`//`运算之外，浮点型经过运算依然得到浮点型。

注意浮点型存在精度限制，对于精密的数字，应当避免使用浮点型存储。

## 列表
Python将`[]`视作一个空列表。列表对其中元素的数据类型没有限制，因此列表不等同于其他语言中的数组。同时，列表不需要在定义时给出容量与数据类型，Python会自动处理列表的扩容等操作。
```python
aList = ["a", "b", "c", "d", 
         1, 2, 3, 4, 5.6, 7.8, 
         [1, 2, 3], (4, 5, 6), 
         {"a": 1, "b": 2, "c": 3}]

for i in range(len(aList)):
    print(i, '\t', aList[i])
```
代码6-7行的for循环结构将依次打印列表中的每一项的索引和内容；`\t`是制表符，用来让打印内容更可视化。for循环的详细用法将在后面介绍，以上代码输出如下：
```python
0        a
1        b
2        c
3        d
4        1
5        2
6        3
7        4
8        5.6
9        7.8
10       [1, 2, 3]
11       (4, 5, 6)
12       {'a': 1, 'b': 2, 'c': 3}
```
可以看出，列表的索引从0开始，且同一个列表中可以同时容纳任意类型的数据。包括你以后在[类型与实例化章节](/python/class-and-instantiation)中自定义的类型的实例也可以被放入其中。

由其索引可知，在Python中，**列表是一种有序的数据类型。**

:::tip 尽管如此
出于语义化的考量，我们建议不要轻易将不同类型的数据混放在一个列表中。
:::

你可以使用`len(aList)`得到列表`aList`的长度（元素个数）。
### 运算
列表之间的加法运算可以将多个列表拼接成一个列表。
```python
aList = ["a", "b", "c", "d"]
bList = ["1", "2", "3", "4"]
cList = aList + bList

for i in range(len(cList)):
    print(i, '\t', cList[i])
```
```python
0        a
1        b
2        c
3        d
4        1
5        2
6        3
7        4
```
这里的5-8行打印出的列表元素`1`、`2`、`3`和`4`在上面的Python代码层面是字符串而非整形，这是因为你无法从控制台打印的文本判断一个数字在打印前是数字还是字符串。

列表与整形进行乘法运算可以将列表快速重复拼接，类似于字符串与整形进行乘法运算：
```python
aList = ["a", "b", "c", "d"]
bList = ["1", "2", "3", "4"]
cList = aList + bList * 2

for i in range(len(cList)):
    print(i, '\t', cList[i])
```
```python
0        a
1        b
2        c
3        d
4        1
5        2
6        3
7        4
8        1
9        2
10       3
11       4
```
### 取值
可以通过在列表后用中括号`[]`的形式从列表中取值，在中括号中提供合法的索引或区间，可以返回对应的列表元素或子列表。继续以上面代码中的`cList`为例，进行如下操作：
```python
print(cList)
print(cList[3])
print(cList[3:7])
print(cList[3:7:2])
print(cList[:3])
print(cList[9:])
print(cList[-1])
```
```python
['a', 'b', 'c', 'd', '1', '2', '3', '4', '1', '2', '3', '4']
d
['d', '1', '2', '3']
['d', '2']
['a', 'b', 'c']
['2', '3', '4']
4
```
* `cList[3]`是取出列表中索引为3的元素，即从1开始计数的第4个元素`d`。
* `cList[3:7]`是从列表中取出索引从3到7的四个元素，返回它们组成的子列表。**`[a:b]`在Python中是左闭右开的**，即包含`a`、不包含`b`，因此`[3:7]`是列表中索引为3、4、5、6的四项。
* `cList[3:7:2]`是在`[3:7]`的基础上限制了步长为2，即在3、4、5、6中取第3和第5个。
* `cList[:3]`中`[:3]`只提供了右值，则取出从列表首个元素到索引为3的三个元素，即0、1、2。继续遵循左闭右开，不包含索引3。
* `cList[9:]`中`[9:]`只提供了左值，则取出从索引为9的元素到列表结束的三个元素，即9、10、11。继续遵循左闭右开，包含索引9。
* `cList[-1]`表示从列表尾部向头部数的第一个，即列表的最后一个。其他负数索引以此类推。

### `append`增加元素、`insert`插入元素
我们可以在创建之后再往列表中增加元素。`append`可以让你往列表的尾部增加元素，下面的代码将向`aList`中增加十个大小在1-1000间的随机整形。
```python
import random

aList = []

for i in range(10):
    num = random.randint(1, 1000)
    print(i, num)
    aList.append(num)

print(aList)
```
```python
0 419
1 768
2 827
3 190
4 612
5 781
6 810
7 879
8 143
9 429
[419, 768, 827, 190, 612, 781, 810, 879, 143, 429]
```
:::tip random是什么？
`random`是Python的一个内置模块，用来进行一些需要随机的操作，例如生成随机数。

Python中的模块/包/库的用法将在后面介绍。同时由于`random`的特性，多次运行这段代码将获得不同的列表。
:::
可以看出，使用`append`时，传入的东西会依次添加到列表的尾部。如果你需要往一个列表的中间某个位置插入一个东西，则需要使用`insert`。
```python
import random

aList = [419, 768, 827, 190, 612, 781, 810, 879, 143, 429]

aList.insert(2, "喵！")

print(aList)
```
```python
[419, 768, '喵！', 827, 190, 612, 781, 810, 879, 143, 429]
```
可以看出，我们插入的`喵！`出现在了列表中索引为2的位置。

### `sort`、`sorted`排序
比如对于我们刚才获得的十个随机数组成的列表，我们希望能对它进行排序，则可以使用`sort`或`sorted`。
```python
import random

aList = [419, 768, 827, 190, 612, 781, 810, 879, 143, 429]

print(aList)
aList.sort()
print(aList)
```
```python
[419, 768, 827, 190, 612, 781, 810, 879, 143, 429]        
[143, 190, 419, 429, 612, 768, 781, 810, 827, 879] 
```
`aList.sort()`对`aList`进行了排序操作，默认是升序排列，即从小到大排序。传入`reverse=True`参数可以让其降序排列：
```python
import random

aList = [419, 768, 827, 190, 612, 781, 810, 879, 143, 429]

print(aList)
aList.sort(reverse=True)
print(aList)
```
```python
[419, 768, 827, 190, 612, 781, 810, 879, 143, 429]
[879, 827, 810, 781, 768, 612, 429, 419, 190, 143]
```
如果列表中的元素的类型无法由Python自动帮你排序，你也可以传入一个排序函数到`sort`中，Python将根据你的排序函数对列表进行排序。例如我们给出一个装满字典的列表，直接排序会得到错误：
```python
aList = [
    {"i": 164, "text": "MangoFanFan"},
    {"i": 2, "text": "HappyMangoLife"},
    {"i": 97, "text": "StarRail"},
    ]

print(aList)
aList.sort()
print(aList)
```
```python
[{'i': 164, 'text': 'MangoFanFan'}, {'i': 2, 'text': 'HappyMangoLife'}, {'i': 97, 'text': 'StarRail'}]
Traceback (most recent call last):
  File "c:\Users\mango\Desktop\Code\cat.py", line 10, in <module>
    aList.sort()
    ~~~~~~~~~~^^
TypeError: '<' not supported between instances of 'dict' and 'dict'
```
报错`TypeError`的本质原因是字典类型不支持比较大小，毕竟排序就是比较大小嘛。因此我们需要让`sort`知道如何比较字典的大小，比如我们根据字典中`i`的键值来比较大小：
```python
aList = [
    {"i": 164, "text": "MangoFanFan"},
    {"i": 2, "text": "HappyMangoLife"},
    {"i": 97, "text": "StarRail"},
    ]

def sortKey(item):
    return item["i"]

print(aList)
aList.sort(key=sortKey)
print(aList)
```
```python
[{'i': 164, 'text': 'MangoFanFan'}, {'i': 2, 'text': 'HappyMangoLife'}, {'i': 97, 'text': 'StarRail'}]
[{'i': 2, 'text': 'HappyMangoLife'}, {'i': 97, 'text': 'StarRail'}, {'i': 164, 'text': 'MangoFanFan'}]
```
如果再指定`reverse=True`，则会得到降序的列表，这里不再演示。[函数将在后面的教程介绍](/python/function)，字典类型会在下面介绍哦。

在上面的操作中，`sort`都直接对原列表`aList`进行了排序。如果我们不希望修改原列表`aList`，则可以使用`sorted`，注意`sorted`是内置函数而不是列表类型的方法，所以使用上与`sort`存在一定区别，但区别也不大。
```python
aList = [
    {"i": 164, "text": "MangoFanFan"},
    {"i": 2, "text": "HappyMangoLife"},
    {"i": 97, "text": "StarRail"},
    ]

def sortKey(item):
    return item["i"]

bList = sorted(aList, key=sortKey)  # 你也可以传入 reverse=True 来降序排序
print(aList)
print(bList)
```
```python
[{'i': 164, 'text': 'MangoFanFan'}, {'i': 2, 'text': 'HappyMangoLife'}, {'i': 97, 'text': 'StarRail'}]
[{'i': 2, 'text': 'HappyMangoLife'}, {'i': 97, 'text': 'StarRail'}, {'i': 164, 'text': 'MangoFanFan'}]
```

### `reverse`、`reversed`倒序
如果希望直接把现有的列表颠倒过来，可以使用`reverse`方法。
```python
aList = [879, 827, 810, 781, 768, 612, 429, 419, 190, 143]

print(aList)

aList.reverse()

print(aList)
```
```python
[879, 827, 810, 781, 768, 612, 429, 419, 190, 143]        
[143, 190, 419, 429, 612, 768, 781, 810, 827, 879]   
```
`reversed`用来在不修改原列表的情况下返回倒序之后的列表。
```python
aList = [879, 827, 810, 781, 768, 612, 429, 419, 190, 143]
bList = list(reversed(aList))

print(aList)
print(bList)
```
```python
[879, 827, 810, 781, 768, 612, 429, 419, 190, 143]
[143, 190, 419, 429, 612, 768, 781, 810, 827, 879]
```
由于`reversed`返回的是一个迭代器，因此初学者可以通过`list`将其强制转换成一个列表。以后你会学习到迭代器是什么，在此暂时跳过。

## 元组
元组是与列表类似的数据结构，有序、不限制内部数据类型、有从0开始的索引。不同之处在于元组一旦建立则不允许更改，也不允许重新排序，只能进行拼接或读取值。

在Python中，使用逗号`,`分隔的多个对象，如果没有其他操作，则默认成为一个元组。例如，以下代码中的`a`就是元组`(1, "2")`。
```python
a = 1, "2"
```

## 字典
字典是典型的键值对的结构，键与值一一对应，键名不能有重复，且不能使用可变的对象作为键名。在Python中，字典是一种典型的以空间换时间的结构，即通过较大的内存占用换来了方便的操作和较少的时间开销。

通过花括号`{}`定义字典，例如我们已经在上面定义了一些字典：
```python
info = {
    "i": 164, 
    "text": "MangoFanFan",
    "name": "Mango",
    "age": 18,
    1: 2,
    9.6: "QAQ",
    }
```
键可以是字符串、整形和浮点型，但是不能是可变对象。这不难理解，如果一个字典中的一个键本身可以发生变化，那我们该如何通过这个键获取它的值呢。

字典的值可以是任何类型，包括本页中的基本类型和你定义的其他类型均可。

在Python中，**字典是无序的数据结构。** 后期的版本只能确保字典在打印时有序，但作为开发者，你不应该让你的程序依赖于字典中键值对的顺序。

### 获取字典数据
字典之间不能进行加减乘除运算，也不能与整形相乘。

你可以使用以下代码一次性遍历字典的键值对，同时获取键和值。
```python
info = {
    "i": 164, 
    "text": "MangoFanFan",
    "name": "Mango",
    "age": 18,
}

for key, value in info.items():
    print(key, value)
```
```python
i 164
text MangoFanFan
name Mango
age 18
```
或者，单独遍历键、单独遍历值也是可以的。
```python
info = {
    "i": 164, 
    "text": "MangoFanFan",
    "name": "Mango",
    "age": 18,
}

for key in info.keys():
    print(key)

for value in info.values():
    print(value)
```
```python
i
text
name
age
164
MangoFanFan
Mango
18
```
想要获取某个已知的键的值，可以使用中括号`[]`，也可以使用字典的`get`方法。
```python
info = {
    "i": 164, 
    "text": "MangoFanFan",
    "name": "Mango",
    "age": 18,
}

print(info["i"])
print(info.get("text"))
```
```python
164
MangoFanFan
```
区别在于，如果尝试获取字典中不存在的键的值，使用中括号会报错`KeyError`，而`get`会得到None。此外，`get`允许你自定义当键不存在时得到的值，例如由于`info`中不存在`aged`键，`info.get("aged")`将返回None，`info.get("aged", 12)`将返回12。

### 写入字典数据
`info["i"]`将会获取字典`info`中的键`i`的值，而`info["i"] = 155`将会设置字典`info`中的键`i`的值为155。如果键不存在则会创建这个键，如果已经存在则会覆盖它的值。

## 特殊类型
Python中还存在一些概念上没有以上类型广泛的基本类型，例如布尔值`bool`和无`None`。

Python中，布尔值包含`True`和`False`两种，分别为真和假。`None`表示`啥都木有`。

`True`、`False`和`None`**都是在物理内存中占有空间的变量**，其中前两者都是布尔值类型，后者`None`自己同时也是类型。因此，在关系到此三者的判断语句中，建议使用`is`作为判断而非`==`。
:::tip 浅浅说下`is`和`==`有啥区别
`is`直接判断左右变量的内存地址，而`==`会调用左右变量的内部方法来求二者是否相等。在关于`True`、`False`和`None`的判断中，大部分情况都可以使用`is`代替`==`，在保持逻辑正确的情况下节约一些性能开销。
:::