# 函数

函数是封装好以供调用的一段 Python 代码。Python 使用关键字 `def` 定义一个函数，例如定义一个加法函数并调用的代码如下：

```python
def cal_add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")
    return result

cal_add(1, 2)
```

```python
1 + 2 = 3
```

可见，Python不需要开发者在编写函数时详细地给出函数的返回类型与形参类型。当然，聪明的你完全可以给出这些类型，[请参见类型提示章节](/python/type-hint)。

## 函数的功能

函数需要执行，实现一些功能，有的函数执行一些操作，有的函数运算后返回一些数据。例如，我们刚刚定义的加法函数会计算两个传入的值的和，然后将其打印出来，再返回结果。

[在面向对象编程中](/python/class-and-instantiation)，于类型内定义的函数又被称为[该类型的方法](/python/class-method)。

### 调用函数

```python
def cal_add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")
    return result

cal_add(1, 2)
cal_add(a=1, b=2)
cal_add(b=1, a=1)
```

上面的三种对`cal_add`函数的调用是等价的。如果不使用关键字方式（keyword，即`xxx=yyy`的传参方式）传参，则默认按照顺序接收参数。

你也可以混合使用`cal_add(1, b=2)`的方式调用函数，此时关键字传参必须位于顺序传参之后，即`b=2`必须位于`1`之后。

你不可以使用`cal_add(2, a=1)`的方式调用函数，否则会得到`TypeError`，显示函数接收到了多个参数`a`，同时没有接收到参数`b`。因此，建议避免混合使用传参方式，并在有必要时（如需要跳过某个有默认值的参数）完全使用关键字传参。

只需要在函数签名中简单设置，即可让参数拥有默认值。调用函数时如果没有接收到有默认值的参数，则会使用默认值。

```python
def cal_add(a, b=2):
    result = a + b
    print(f"{a} + {b} = {result}")
    return result

cal_add(1, 2)
cal_add(1)
```

```python
1 + 2 = 3
1 + 2 = 3
```

如果需要进行类型提示，则可以写为`def cal_add(a: int, b: int = 2)`。更多类型提示请参见[这里](/python/type-hint)。

### 返回值

在函数体中，`return`关键字用于返回。函数可以不返回任何值，不返回形同于返回`None`。

在Python中，以下三种函数写法是完全一致的，它们都没有返回值，或者说都返回`None`。

```python
def function1():
    print("Meow!")

def function2():
    print("Meow!")
    return

def function3():
    print("Meow!")
    return None
```

函数可以返回任意类型的对象，包括前面介绍的基本类型和你的自定义类型。你可以在调用函数时接收函数的返回值（如有），例如：

```python {10-12}
def cal_add(a, b):
    """
    Function to add two numbers.
    :param a: First number
    :param b: Second number
    :return: Sum of a and b
    """
    return a + b

a = 10
b = 20
c = cal_add(a, b)
print(f"{a} + {b} = {c}")
```

你也完全可以不使用中间变量`c`接收函数的返回值，直接使用`print(f"{a} + {b} = {cal_add(a, b)}")`，也是完全合法的。

:::info docstring
上面的函数中，我们使用`"""..."""`的方式写了一种很新的注释。这里的注释对程序的运行没有任何影响，单纯是为辅助编码而存在的。

这种使用三重双引号包裹起来的长注释称为**docstring**，即**文档**。Python中任何封装的代码都可以拥有docstring，例如`<module>.py`文件、`cal_add()`函数与`Cat`类型，都可以通过在其中的头部（函数和类则在内部首行）提供docstring来描述其行为。

在Python的层面上，你可以获取封装好的对象的docstring：

```python
def cal_add(a, b):
    """
    Function to add two numbers.
    :param a: First number
    :param b: Second number
    :return: Sum of a and b
    """
    return a + b

a = 10
b = 20
c = cal_add(a, b)
print(f"{a} + {b} = {c}")

print(cal_add.__doc__)
```

输出如下。

```bash
10 + 20 = 30

    Function to add two numbers.
    :param a: First number
    :param b: Second number
    :return: Sum of a and b

```

docstring的本质是特殊的注释，因此不会影响程序的运行。

:::

## 调用栈
我们经常会需要在函数之间互相跳转，从一个函数跳到另一个函数。Python 的调用栈提供了我们当前正在执行的代码的位置，包括其所处的文件与所处的函数，以及该代码的所有的上级调用者。

### 未捕获异常时自动打印
```python
def func1():
    print("Function 1")
    print(1 / 0)
    return

def func2():
    print("Function 2")
    func1()
    return

def func3():
    print("Function 3")
    func2()
    return

if __name__ == "__main__":
    func3()
```

函数的调用顺序为，从 `func3` 到 `func2` 到 `func1`。由于异常发生在 `func1` 当中，所以以上调用顺序也会在异常出现时被完整地打印下来。

关于异常是怎么个事，[去看前面的教程哦。](./if-try.md)

```text
Function 3
Function 2
Function 1
Traceback (most recent call last):
  File "/home/mango/pythonTest/./code_2.py", line 17, in <module>
    func3()
    ~~~~~^^
  File "/home/mango/pythonTest/./code_2.py", line 13, in func3
    func2()
    ~~~~~^^
  File "/home/mango/pythonTest/./code_2.py", line 8, in func2
    func1()
    ~~~~~^^
  File "/home/mango/pythonTest/./code_2.py", line 3, in func1
    print(1 / 0)
          ~~^~~
ZeroDivisionError: division by zero
```

Python 也会标注具体的异常出现的位置。如果是 SyntaxError 的话，Python 会给出一个大致的异常位置。

### 使用 traceback 模块
你也可以使用 Python 标准库 traceback 来获取调用栈，一般这只有在处理异常时有用。

请参见 traceback 的文档：<https://docs.python.org/zh-cn/3.13/library/traceback.html>

## 可变参数

### *args

```python
def cal_sum(*args):
    return sum(args)

print(cal_sum(1, 2, 3, 4, 5))
```

```python
15
```

这段代码可能看起来很困惑，实际工作中没人会这么写，这里仅用作介绍`*args`。

`*args`正是`arguments`，参数，这里表示函数`cal_sum`可以传入任意数量的参数。我们可以在函数`cal_sum`中`print(args)`，会得到`(1, 2, 3, 4, 5)`这个元组。

你可以把`*args`换成`*brgs`、`*any`以及任何你乐意的名字，真正起作用的是`*`星号，在函数参数中的`*`会将**超出其之前的、函数定义中的确定参数数量的传参**打包成元组，存储到名为`args`、`brgs`或`any`的元组中。在实际中，我们约定俗成将其写作`*args`。

`*args`必须位于其他普通参数之后，且并非必须提供。

### **kwargs

```python
def cal_sum(a, b, *args, **kwargs):
    print(a)
    print(b)
    print(args)
    print(kwargs)
    return sum(args)

cal_sum(1, 2, 3, 4, 5, x=1, y=2)
```

```python
1
2
(3, 4, 5)
{'x': 1, 'y': 2}
```

`*args`会将接收到的任意数量的参数打包为元组`arg`，而`**kwargs`会将接收到的任意数量的关键字参数打包为字典`kwargs`。`**kwargs`也并非必须提供，其命名也是约定俗成的写法。

在一般情况下不建议滥用`*args`和`**kwargs`，而是建议将函数的签名填写完整清晰。

## 函数重载

**Python不支持传统意义上的函数重载。**

在C++、Java等语言中，重复定义相同名称、不同签名的函数即所谓的**函数重载**。调用函数时，将由语言来决定使用哪种函数实现。但Python不同，你只能给出一种函数的实现；如需重载，只能为这个函数提供不同的签名。

```python {4-9}
from typing import overload


@overload
def cal_add(a: int, b: int) -> int: ...
@overload
def cal_add(a: float, b: float) -> float: ...
@overload
def cal_add(a: str, b: str) -> str: ...

def cal_add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")
    return result


cal_add(1, 2)
cal_add(1.5, 2.5)
cal_add("1", "2")
```

你瞧，与其称之为函数重载，不如将其视作一种新型的**类型提示**。`overload`是装饰器，代码4-9行重复给出了三次`cal_add`函数的签名和返回值，但不给出具体的函数实现，而是在给出所有的重载后再仅提供一种实现。

在上面的例子中，由于Python中的`+`运算符能够处理整形、浮点型和字符串之间的加法运算，因此我们没有写出重载最常见的模样。事实上，Python中常见的重载更类似下面的模样：

```python
from typing import Any, overload

@overload
def create_std() -> dict[str, Any]: ...
@overload
def create_std(obj: dict[str, Any]) -> dict[str, Any]: ...
@overload
def create_std(name: str, age: int) -> dict[str, Any]: ...


def create_std(obj: dict[str, Any] = None, name: str = None, age: int = None):
    if obj is not None:
        new_std = obj.copy()
        return new_std
    elif name is not None and age is not None:
        return {
            "name": name,
            "age": age
        }
    else:
        return {
            "name": "default_name",
            "age": 18
        }
```

注意到，`overload`确实只有类型提示的作用，而我们需要在唯一的`create_std`的实现中完成所有重载的条件分支与实现。上面只是给出示例以方便理解，实际工程中的重载方式与条件判断可能还有很大区别。

:::warning 装饰器是什么？
位于函数签名的上一行、以`@`开头的东西就是**装饰器**，将在后面的教程中介绍。
:::
