# 特殊方法（魔术方法）
无所谓你如何称呼它，只要你知道它是什么即可。

我们已经知道，魔术方法是定制化一个类的行为的方法。如果你不知道，去看前面的教程哦。

## 实例的生命阶段
### \_\_init__
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()
```
```python
Cat __init__
Fan says: Miaow!
```
`__init__`可以视为Python中的构造函数，事实上也在做着构造函数该做的事。在这里，构造函数初始化了猫的名字和年龄。

### \_\_new__
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")
    
    def __new__(cls, *args, **kwargs):
        print("Cat __new__")
        return super().__new__(cls)

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()
```
```python
Cat __new__
Cat __init__
Fan says: Miaow!
```
那`__new__`干了什么事？根据输出可知，`__new__`在`__init__`之前执行，实际上上面代码中的`fan`这只猫是在`__new__`时被实例化的，然后由`__init__`进行初始化。

`__new__`接收的`cls`参数是类型`Cat`，返回的是一个`Cat`的实例。`super().__new__(cls)`调用了`Cat`父类的`__new__`，在Python3中所有的类都隐式继承自`object`，关于`super`的详细用法会在类的继承中介绍。

由于`__new__`实现的功能，你必须让`__new__`返回一个实例。上面的代码中使用的是通用写法。
:::tip 为什么要用`*args, **kwargs`？
在`fan = Cat("Fan", 3)`时，Python先后执行`Cat`的`__new__`和`__init__`方法，对`__new__`传入的参数是类型`Cat`加上给出的`"Fan"`和`3`，对`__init__`传入的参数是`Cat`的实例加上给出的`"Fan"`和`3`。

因此，`__new__`必须拥有和`__init__`相同的签名，否则Python会在运行时报错`TypeError`，显示`Cat.__new__`的参数数量错误。

但是大部分时候，比如本例中，你的`__new__`不需要`name`和`age`这两个参数，实际上可能跟本不需要任何参数。同时考虑到后期`__init__`的参数可能会变更，所以你完全可以直接将`__new__`的参数写成`cls, *args, **kwargs`。

如果你不知道`*args, **kwargs`是什么意思，去看[函数的教程](/python/function)哦。
:::
:::warning 你可能根本不需要`__new__`
如果你不知道`__new__`对你的代码有什么帮助，那么你就不需要使用`__new__`。

`__new__`的一处典型用法是实现**单例模式**，即让一个类在全局中只有一个实例，从不同的地方初始化会得到同一个实例。我们会在后面涉及到这方面的内容，此处暂且跳过。
:::