# 类型方法
前面的章节[类型与实例](/python/class-and-instantiation)中已经介绍了在类型中定义函数作为方法的概念。

## 方法的可访问性
类似于其他面向对象语言，Python中对象的方法和属性也可以声明其可访问性，例如是公有、私有还是保护，只不过这里的可访问性不是通过`public`、`private`和`protected`关键字定义的。

Python通过在方法或属性名前添加额外的下划线`_`来指定方法或属性的可访问性。
* `self.name`是公有属性，`self.getName()`是公有方法；
* `self._name`是私有属性，`self._getName()`是私有方法；
* `self.__name`是保护属性，`self.__getName()`是保护方法；

根据约定俗成的编码规范，不应该从类的外部访问类或对象的私有和保护属性与方法。保护的程度比私有更高一级，在实际编程中的体现如下：
```python
class User:
    def __init__(self):
        self.name = "MangoFanFan"
        self._uuid = "123456"
        self.__password = "999631"

user = User()
print(user.name)
print(user._uuid)
print(user.__password)
```
运行结果如下：
```python
MangoFanFan
123456
Traceback (most recent call last):
  File "c:\Users\mango\Desktop\Code\cat.py", line 10, in <module>
    print(user.__password)
          ^^^^^^^^^^^^^^^
AttributeError: 'User' object has no attribute '__password'
```

`user.name`毫无疑问被成功获取；`user._uuid`虽然不建议，但也可以成功获取；`user.__password`无法被从外部直接获取。

公有方法、私有方法与保护方法间的差别同上。

:::tip 你知道吗？
通过一些手段可以从类的外部强行访问到类的保护属性：
```python
class User:
    def __init__(self):
        self.name = "MangoFanFan"
        self._uuid = "123456"
        self.__password = "999631"

user = User()
print(user.name)
print(user._uuid)
print(user.__password)  # [!code --]
print(user._User__password)  # [!code ++]
```
这样就可以打印出`user.__password`的值`999631`了，但是这已经背离了保护的初衷，因此仅作了解。
:::

### 魔术（Magic）不在此列
Python中存在一些预先定义或约定的特殊变量、属性、方法，它们的命名格式是`__xxxx__`，比如类型的初始化方法就是`__init__()`。这些变量、属性、方法即「**魔术变量/魔术方法**」不属于保护属性。

## 魔术方法
官方的称呼是**特殊方法**，但我们习惯称之为**魔术方法/魔法方法**。在类型中以`__xxxx__`命名的方法就是魔术方法，这些方法是Python预先定义或约定好的，不被视为保护方法。

Python类型的初始化方法/构造函数`__init__()`正是魔术方法，此外还有许多魔术方法，这些方法可以自定义类型的行为，也是Python面向对象工作的重要工具。

例如，`__init__`方法定制了一个类在实例化时需要进行的初始化操作，`__del__`方法定制了一个类在被释放时（可能是开发者使用`del`或Python进行垃圾回收时，更大可能性是Python运行结束时。）执行的操作。更多魔术方法会在后面介绍。