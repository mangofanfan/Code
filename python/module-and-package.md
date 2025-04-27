# 模块和包

Python支持多文件开发，你可以将封装好的函数、类型和变量移动到其他的文件中，然后将他们导入，从而在当前源码中使用这些东西。当然，他们都是Python中的对象。

**模块（Module）** 和**包（Package）** 是Python中文件级别的代码封装概念，下面将作具体介绍。

:::warning 类型？
[Python中的类型概念将在后面进行介绍](/python/class-and-instantiation)，这里不深入涉及类型的概念。

~~其实类型也没有很难，简单看看应该也能看懂的……吧？~~
:::

## 标准库

Python提供了许多内置的、开箱即用的标准库。例如，[在基本类型章节中](/python/basic-type#append增加元素、insert插入元素)，我们曾经提到过`random`，现在继续拿它来开刀！

是不是很好奇`random`到底是个什么东西？我们打印一下看看：

```python
import random

print(random)
```

```bash
mangofanfan@localhost:~/HelloWorld$ /usr/bin/python3 /home/mangofanfan/HelloWorld/03_module.py
<module 'random' from '/usr/lib/python3.10/random.py'>
```

可以发现，`random`是位于`/usr/lib/python3.10/`目录下的`random.py`文件。我们可以在IDE中通过`Ctrl`+🖱鼠标左键的方式跳转到其实现：

![random标准库的实现](<img/Module_random_VSCode.png>)

通过`import random`一行语句，我们导入了这整个`random.py`文件，并将其作为一个`module`对象存放在内存中。导入过程中，`random.py`会被Python完整地执行一次，从而允许我们使用其中定义的方法、类型等。

比如此刻，我希望使用`random`中定义的`randint`函数来生成随机数，就可以这样编码：

```python
import random

print(random.randint(1, 100))
```

```bash
mangofanfan@localhost:~/HelloWorld$ /usr/bin/python3 /home/mangofanfan/HelloWorld/03_module.py
20
mangofanfan@localhost:~/HelloWorld$ /usr/bin/python3 /home/mangofanfan/HelloWorld/03_module.py
78
```

### import的??种写法

在介绍Python中的列表类型时，我们曾经这样使用过`random`中的`randint`函数：

```python
import random

aList = []

for i in range(10):
    num = random.randint(1, 1000)
    print(i, num)
    aList.append(num)

print(aList)
```

这里我们导入了整个`random`，但是实际上只用到了其中的一个`randint`函数，而`random`中还存在很多代码都没有被我们使用到。本着尽可能节约一些资源的指导思想，能不能选择性地只导入我们想要的函数或者其他东西呢？

~~当然能啦，不然我问你干嘛~~ 使用`from ... import ...`就可以选择性地只导入你想要的东西了，比如如果我只要`randint`的话：

```python
from random import randint

aList = []

for i in range(10):
    num = randint(1, 1000)
    print(i, num)
    aList.append(num)

print(aList)
```

不仅如此，如果你需要的东西的名字太长了，你也可以起个好听（简短）的别名：

```python
import random as rd
```

```python
from random import randint as ri
```

你也可以同时导入多个东西：

```python
import random, math, hashlib
```

```python
from hashlib import sha1, sha256, md5
```

也可以同时给每个东西起别名：

```python
import random as rd, hashlib as hb
```

```python
from random import randint as ri, random as rd
```

不过起的名字太简短了结果导致自己以后也不认识了也不是件好事，要不要起别名就交给各位自行定夺啦。
