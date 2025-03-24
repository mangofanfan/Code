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

### \_\_del__
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")
    
    def __new__(cls, *args, **kwargs):
        print("Cat __new__")
        return super().__new__(cls)
    
    def __del__(self):
        print("Cat __del__")

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()
```
```python
Cat __new__
Cat __init__
Fan says: Miaow!
Cat __del__
```
`__del__`即`Delete`的简写，你可以把它理解为析构函数，与构造函数相对，但并不完全一致。

在上面代码的输出中，`Cat __del__`在最后打印，因为`fan`实例一直到程序运行结束才被销毁。问题并不出在`__del__`的执行机制，而是`fan`实例的销毁时间，因为Python中的对象不一定会在生命周期结束时立刻销毁，总之——一个实例在引用计数归零后，何时才被销毁是无法确定的，而`__del__`在对象被销毁时执行，因此不应该将需要立刻执行的代码块放在`__del__`中。

:::tip 我记得有`del`关键字？
`del`可以用来显示“删除”一个对象，但是对象未必会在被`del`之后立刻销毁。简单的说，`del`会让对象的引用计数-1，并在安全的情况下销毁这个对象；但是如果此对象身上还有其他引用，则自然不能立刻销毁这个对象。

以下代码可以让你理解得更清楚：
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")
    
    def __new__(cls, *args, **kwargs):
        print("Cat __new__")
        return super().__new__(cls)
    
    def __del__(self):
        print("Cat __del__")

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()

del fan

print("End of the program")
```
```python
Cat __new__
Cat __init__
Fan says: Miaow!
Cat __del__
End of the program
```
在上面的代码中，`fan`对象（类型`Cat`的实例）在`del fan`之后就被销毁了，因为`del`之后，`fan`的引用计数归零。
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")
    
    def __new__(cls, *args, **kwargs):
        print("Cat __new__")
        return super().__new__(cls)
    
    def __del__(self):
        print("Cat __del__")

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()
fan_clone = fan  # [!code ++]

del fan

print("End of the program")
```
```python
Cat __new__
Cat __init__
Fan says: Miaow!
End of the program
Cat __del__
```
现在，尽管我们`del fan`，但是`fan`依然在程序结束时才销毁，因为`fan`身上还有一个`fan_clone`的引用，`fan`的引用计数没有归零。
:::
总之，不应该把重要的代码放在`__del__`中。

`__del__`方法不应该有返回值，也不应该传参。

## 实例的默认行为
### \_\_repr__ & \_\_str__
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")
    
    def __repr__(self):
        return f"Cat(name={self.name}, age={self.age})"

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()
print(fan)
```
```python
Cat __init__
Fan says: Miaow!
Cat(name=Fan, age=3)
```
`__repr__`和`__str__`的返回值将被用来描述这个类型的实例的信息，例如以上代码在`print(fan)`时会打印`fan`的信息。

如果你只定义了`__repr__`或只定义了`__str__`，在`print`时会打印你定义的那个方法的返回值。如果你同时定义了这两个方法，则`print`会打印`__str__`的返回值。

你无需区分这两个方法的具体使用场景区别。
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        print("Cat __init__")
    
    def __repr__(self):
        return f"Cat(name={self.name}, age={self.age}) __repr__"

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}) __str__"

    def miaow(self):
        print(f"{self.name} says: Miaow!")
    

fan = Cat("Fan", 3)
fan.miaow()
print(fan)
print(repr(fan))  # 可以使用内置函数 repr() 来打印 __repr__ 的返回值
```
```python
Cat __init__
Fan says: Miaow!
Cat(name=Fan, age=3) __str__
Cat(name=Fan, age=3) __repr__
```