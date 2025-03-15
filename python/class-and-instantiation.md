# 类型与实例
<WhatsClass></WhatsClass>

Python使用`class`关键字来定义类型。类型是Python中很常见的东西，这也符合Python万物皆对象的设计理念。

```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    def miaow(self):
        print(f"{self.name}: Miaow Miaow!!")

cat = Cat("XiaoFan", 1)
cat.miaow()
```

这一段代码定义了一个`Cat`类型，实例化了一个名为`cat`的`Cat`类型对象，并且让`cat`喵了两声。上面的代码中使用了类型注释和f-string，如果你对他们没有印象了，回头去看前面的教程哦。

## self
`self`指代的是「对象」本身，可能类似于其他语言中的`this`或类似关键字。下面用一些演示来说明`self`的特性。

```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    def miaow(self):
        print(f"{self.name}: Miaow Miaow!!")

tom = Cat("Tom", 3)
fan = Cat("Fan", 2)
tom.miaow()
fan.miaow()
```
上面的对`Cat`类的定义中，`self.name`和`self.age`定义了`Cat`的属性，这些属性是跟随由`Cat`实例化得到的对象走的。

输出如下：
```text
Tom: Miaow Miaow!!
Fan: Miaow Miaow!!
```

与之相对的，还有一种东西与`self`相似，但是是跟随`Cat`类型本身走的：
```python
class Cat:
    count = 0  # [!code ++]
    def __init__(self, name: str, age: int):
        Cat.count += 1  # [!code ++]
        self.name = name
        self.age = age
    def miaow(self):
        print(f"{self.name}: Miaow Miaow!!")

tom = Cat("Tom", 3)
print(Cat.count)  # [!code ++]
fan = Cat("Fan", 2)
print(Cat.count)  # [!code ++]
tom.miaow()
fan.miaow()
```

输出如下：
```text
1
2
Tom: Miaow Miaow!!
Fan: Miaow Miaow!!
```

你应该可以看出他们之间的区别，使用`self.xxx`定义的属性在实例化之后跟随实例，这些属性是**对象的属性**；而诸如`Cat.xxx`这类属性是跟随类型`Cat`的，是**类型的属性**。比如，上面的`Cat.count`实际统计了代码中一共有多少只实例化的猫，这是猫这个类型的属性而非某一只猫的属性。

:::tip 你知道咩
打印`Cat.count`、`tom.count`和`fan.count`的结果是一样的，这说明**通过类的实例化对象访问类型的属性也是合法的**，尽管由于语义上可能存在的误解，我们依然推荐通过第一种方式访问类型的属性。
:::

## 方法
你可以通过`self.xxx()`的方式调用实例的方法，或通过`Cat.xxx()`调用类型的方法。这些方法需要在类型中定义，就像你先前定义函数时一样，唯需注意以下事项：
### 首个形参
正如我们给`Cat`定义的`miaow()`方法一样，实例方法的首个参数需要是`self`。

准确地说，**如果你希望代码中的每一只猫都能使用`miaow()`方法叫两声，那么你就至少需要传入一个参数。** 这个必须传入的参数在语法上可以是任意名称，只是我们约定俗成地将其命名为`self`。函数需要接收的其他参数必须跟在其后，即 **`self`必须是第一个形参**。

也如同我们刚才了解到的一样，这个`self`实际上是对象本身。你的IDE会为`self`渲染不同的颜色，正是因为其特殊性。

从函数传参的原理上理解的话，依然沿用猫猫的例子，如果你不小心调用了`Cat.miaow()`，没有传参，那么会收到报错：
```python
TypeError: Cat.miaow() missing 1 required positional argument: 'self'
```
当我们从类型调用这种函数时，会收获缺少参数的错误；当我们从实例调用这种函数时，实例本身会被作为第一个参数，所以在我们调用`tom.miaow()`时，`self`形参接收到的是`tom`，从而在f-string中插入了`tom.name`的值。

换言之，以下两行写法是等价的：
```python
tom.miaow()
Cat.miaow(tom)
```
### 不需传入self的静态方法
你可以使用`staticmethod`装饰器来让一个方法成为静态方法。
```python
class Cat:
    count = 0
    def __init__(self, name: str, age: int):
        Cat.count += 1
        self.name = name
        self.age = age
    def miaow(self):
        print(f"{self.name}: Miaow Miaow!!")
    @staticmethod  # [!code ++]
    def printCount():  # [!code ++]
        print(f"Total cats: {Cat.count}")  # [!code ++]

tom = Cat("Tom", 3)
fan = Cat("Fan", 2)

Cat.printCount()  # [!code ++]
```
静态方法从类型调用且无需传入`self`，这也意味着静态方法不能访问`self.name`等对象的属性，而只能访问`Cat.count`等类型的属性。上方的代码将在运行时打印`2`。

装饰器将在后面介绍。

## __init__() 函数
`__init__()`是Python中，类的初始化方法或构造函数。在猫猫的例子中，`__init__()`函数除`self`之外，还接收`name`和`age`两个形参，因此我们在实例化每一只猫的时候都需要传入两个参数。

`__init__()`同普通函数一样，签名中也支持类型注释与默认值。
