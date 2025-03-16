# 函数
函数是封装好以供调用的一段Python代码。Python使用关键字`def`定义一个函数，例如定义一个加法函数并调用的代码如下：
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

## 返回值
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

函数可以返回任意类型的对象，包括前面介绍的基本类型和你的自定义类型。