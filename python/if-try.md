# 条件与异常
Python中使用`if`、`elif`和`else`来表示条件判断，使用`try`、`except`、`else`和`finally`表示异常捕获和处理。

他们在语法上有诸多相似，加上异常也是Python的重要内容，因此放在一起介绍。

## 条件判断
```python
num = int(input("请输入数字："))

if num > 0:
    print("输入的数字是正数：", num)
else:
    print("输入的数字是负数：", num)
```
第一行中，我们使用`input`从控制台接收用户传入的内容，然后使用`int(input())`将传入内容转化成整形。`input`调用中传入的`"请输入数字："`将作为提示出现在控制台中，引导用户输入内容。

然后，在`print`中，我们传入的东西会按顺序在一行中打印，以空格` `分隔。

于是我们运行以上内容，并适当传入一些不同的数字，会得到：
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：6
输入的数字是正数： 6
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：1
输入的数字是正数： 1
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：0
输入的数字是负数： 0
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：-9
输入的数字是负数： -9
```
这就是`if`和`else`组成的条件判断了。

聪明的你一定发现了，0怎么可以是负数呢？！我们需要增加一个条件分支，这就是`elif`出场的时候了。
```python
num = int(input("请输入数字："))

if num > 0:
    print("输入的数字是正数：", num)
elif num == 0:
    print("输入的数字是0哦！")
else:
    print("输入的数字是负数：", num)
```
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：0
输入的数字是0哦！
```
Python中，一个条件判断逻辑总是自`if`分支开始，可以选择接没有、一个或多个`elif`分支，可以选择没有或一个`else`分支。每一个条件判断逻辑最多执行一条分支，然后就会跳过此逻辑。

例如，参考以下代码：
```python
num = int(input("请输入数字："))

if num > 100:
    print("输入的数字太大啦：", num)
elif num >= 0:
    print("输入的数字是自然数：", num)
else:
    print("输入的数字是负数：", num)
```
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：605
输入的数字太大啦： 605
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：2
输入的数字是自然数： 2
```
第一个输入`605`同时满足条件判断逻辑的前两个分支，但仅第一个分支即`if`分支执行了。

再参考以下代码：
```python
num = int(input("请输入数字："))

if num > 100:
    print("输入的数字太大啦！")

print(f"你刚刚输入了{num}，是嘛！")
```
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：4
你刚刚输入了4，是嘛！
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：600
输入的数字太大啦！
你刚刚输入了600，是嘛！
```
条件判断逻辑可以没有`else`分支，此时如果不满足前面所有分支（包括一个`if`，若有`elif`则也包括若干`elif`）的判断，则不执行任何条件分支。

[在前一节循环中的while循环部分](/python/loop)，我们介绍了一些判断条件，这些条件同样可用在`if`和`elif`之后，而本节中用到的如`num > 100`等条件也可以用在`while`之后。本质上，`num > 100`得到的结果无非`True`或`False`，是同样的原理啦。

## 异常处理
在刚才的代码运行时，如果我们输入的东西不是数字，会发生什么呢？
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：什么数字？
Traceback (most recent call last):
  File "/home/mangofanfan/HelloWorld/01_if.py", line 1, in <module>
    num = int(input("请输入数字："))
ValueError: invalid literal for int() with base 10: '什么数字？'
```
我们得到了**报错**。在未来的学习、工作、生活、开发中，程序报错是家常便饭，那么在遇到报错的时候我们应该干什么呢？

**读报错信息！**

Python为我们提供了非常人性化的详尽的报错信息，给出了调用栈、错误类型和错误描述，在栈中还给出了出错的代码行。在IDE中，你应当可以通过点击报错信息中的文件路径来快速跳转到出错的文件的指定位置。

`ValueError`说明变量的值异常，这里是`int`函数在类型转化时遇到了不能转化为整形的值，即我们输入的`什么数字？`。

Python中内建了多种异常类型，例如这里的`ValueError`。芒果帮你问了一下AI，看看就好。
:::info Python中的内置异常类型
当然！Python 内置了许多异常类型，用于处理不同类型的错误。以下是一些常见的 Python 内置异常类型：

* SyntaxError: 语法错误，通常在代码解析阶段检测到。
* IndentationError: 缩进错误，通常在代码解析阶段检测到。
* TypeError: 类型错误，当操作或函数应用于不正确类型的对象时引发。
* ValueError: 值错误，当操作或函数接收到具有正确类型但不正确值的参数时引发。
* IndexError: 索引错误，当尝试访问列表、元组或字符串中不存在的索引时引发。
* KeyError: 键错误，当尝试访问字典中不存在的键时引发。
* AttributeError: 属性错误，当尝试访问对象中不存在的属性时引发。
* ImportError: 导入错误，当导入模块失败时引发。
* NameError: 名称错误，当尝试访问未定义的变量时引发。
* ZeroDivisionError: 除零错误，当尝试除以零时引发。
* FileNotFoundError: 文件未找到错误，当尝试打开不存在的文件时引发。
* IOError: 输入输出错误，通常与文件操作相关。
* RuntimeError: 运行时错误，通常在程序运行过程中引发的一般错误。
* OverflowError: 溢出错误，当数值运算结果超出表示范围时引发。
* MemoryError: 内存错误，当内存不足时引发。

这些异常类型帮助开发者在编写代码时更好地处理和调试错误。如果你有任何具体的疑问或需要进一步的帮助，请随时告诉我！
:::
如果是编码过程中欠考虑、代码不够健壮而导致的错误，我们自然希望让这些错误尽量都被报出来，从而有助于尽快修复。而如果是上面那样，由于用户操作不当而导致的错误，则没有必要给用户展示吓人的报错和调用栈了。

### try except
在Python中，我们使用`try`、`except`语句来捕获和处理异常。
```python
try:
    num = int(input("请输入数字："))

    if num > 100:
        print("输入的数字太大啦！")

    print(f"你刚刚输入了{num}，是嘛！")
    
except ValueError:
    print("传入的东西不是数字！")
```
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：什么数字？
传入的东西不是数字！
```
`try`往往需要和`except`配合使用，和`if`等一样以缩进表示代码块。在`try`中的代码块运行时如果出现异常，则会尝试匹配`except`后的异常类型，若类型一致则执行对应的`except`分支。

一个`try`可以配合多个`except`分支。如果没有任何`except`分支符合出现的异常，则异常仍然会被抛出。如果需要捕获任何异常，则可以使用不加异常类型的`except`。
```python
try:
    num = int(input("请输入数字："))

    if num > 100:
        print("输入的数字太大啦！")

    print(f"你刚刚输入了{num}，是嘛！")

except ValueError:
    print("传入的东西不是数字！")

except:
    print("不知道为啥反正报错了！")
```

### else finally
```python
try:
    num = int(input("请输入数字："))

except ValueError:
    print("传入的东西不是数字！")

except:
    print("不知道为啥反正报错了！")

else:
    if num > 100:
        print("输入的数字太大啦！")

    print(f"你刚刚输入了{num}，是嘛！")

finally:
    print("运行结束！")
```
`else`是可选的分支，若`try`中的代码块没有抛出错误，则在`try`结束之后会运行`else`分支。`finally`是可选的分支，无论是否发生异常，都将在最后执行。
```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：66
你刚刚输入了66，是嘛！
运行结束！
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：六十六
传入的东西不是数字！
运行结束！
```
在每个异常处理逻辑中，`except`和`finally`至少要有一个，`else`必须配合`except`一起使用。