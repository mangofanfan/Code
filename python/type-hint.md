# 类型提示
Python允许在代码中标注类型提示。在Python3.6之后，类型提示已经基本可用，但本页中的部分代码需要在更高的版本中运行，建议使用最新版本。

同时Python是一门弱类型语言，运行时不会因为实际类型与标注类型不一致而报错。**标注类型的主要目的是帮助开发者自己或团队间的协作，以及方便IDE进行类型检查。**

此外，注释不等同于声明，这一点与C语言有显著不同。在Python中，声明`name: str`之后，`name`依然是未定义的状态，而不像C语言中会有一个默认值（或者随机值）。

:::tip 严格的类型检查
Python本身的弱类型特点让本页教程中的类型提示显得似乎有些多余。

这对于编程语言的初学者来说也许是一件好事，但并非所有程序员都觉得弱类型是更好的选择。

好在，你可以通过一些方法来在静态检查时配合类型提示发现潜在的类型错误。例如，使用`mypy`，这是一个第三方的类型检查库，需要首先通过`pip install mypy`安装。然后，在命令行中运行`mypy <文件名>.py`即可执行静态检查。
:::

:::info 库？
库/模块，即`package`或`module`，是Python中常用的代码封装形式。

如果你对这不是很了解，可以暂时忽略，专注于本页的内容即可。
:::

## 基本注释
```python
name: str = "MangoFanFanw"
age: int = 18
money: float = 6.66
languages: tuple = ("Python", "C")
friends: list = ["QAQ", "AWA", "PWP"]
gpa: dict = {"Math": 2, "English": 3, "PE": -6}
```

上面分别是Python中的字符串、整形、浮点数、元组、列表、字典类型。实际上这里的类型提示是没有必要的，因为IDE可以根据等号后面的类型推断等号前面的类型。

那么在什么情况下我们需要这样的注释呢？
```python
for string in stringList:
    string: str
    print(string.split(","))
```

例如处理`stringList`，学过小学二年级的程序员都能看出来这是一个由字符串组成的列表，那么从中提取的每一个`string`都应该是字符串，从而允许我们进行`split()`字符串切割操作。

但是IDE看不出来，怎么办呢？欸！加上类型提示`string: str`就好嘞。

在实际运行中，如果阴差阳错，`stringList`中混入了一个整形，Python会在`pring(string.split(","))`报错，而非`string: str`，这说明类型提示终归是提示，也证明了Python是一门弱类型语言。

另外，你也可以将变量指定为你定义的类型，例如：
```python
class Cat:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    def miaow(self):
        print(f"{self.name}: Miaow Miaow!!")
        
# 假设这里有很多很多代码

for cat in catList:
    cat: Cat
    cat.miaow()
```

## 函数相关提示
```python
def add(x: int, y: int) -> int:
    return x+y
```

上方的`add`函数接收`x`、`y`两个参数，返回一个变量，三个都是整形类型。这样的定义可以帮助IDE为你提供更好的函数签名辅助。

:::tip 函数签名
函数签名似乎是来自C++的概念，是指函数的名称及其参数类型的组合，用于区分不同的函数。函数签名不包括返回类型，也不包括参数的名字。
:::

同样，如果你使用`print(add("Mango", "FanFan"))`，会得到`MangoFanFan`而不是一个`TypeError`，这说明函数签名也不会在运行时进行检查。

同样，可以使用你定义的其他类来作为注释。

## 复杂提示
### 多种类型
你可以在类型提示中表明一个对象同时有可能是多种类型，例如下面的类型提示表明变量`username`有可能是字符串类型或整形类型。
```python
username: str | int
```
如果你的Python版本不支持使用`|`，你可以将`|`替换成`or`。

### 复杂数据结构
对于字典、列表和元组之类类型的变量，你也可以描述其内部数据结构：
```python
user_info: dict[str: str | int]
likes: list[str]
best_friends: tuple[str, str]
```
对于字典这种键值对结构，以冒号分隔键和值的类型，上面的第一行代码表明`user_info`的每一个值都是字符串或整形。列表`likes`中的每一个变量都是字符串，元组`best_friends`中有两个字符串变量。注意在类型注释中只使用方括号`[]`，而不是对字典用`{}`、对元组用`()`。

如果你的Python版本不支持形如`dict[...]`这样的类型提示，你可以将其替换成`Dict[...]`，然后记得在之前`from typing import Dict`。`list`等依次类推。

### 类型别名
对于反复出现的同一类型提示，你可以按照如下方式复用提示以减少重复工作。
```python
InfoDict = dict[str: str | int]

user_info: InfoDict
like_info: InfoDict
friends: list[InfoDict]
```
在上面的代码中，`IndoDict`是`dict[str: str | int]`的类型别名。

### 自定义新类型
如果你对代码规范性有更高的要求，或者需要更加严谨的代码，可以自定义新类型。首先需要从`typing`中导入`NewType`：
```python
from typing import NewType  # [!code focus]

PlayerHP = NewType('PlayerHP', int)  # [!code focus]
PlayerAge = NewType('PlayerAge', int)  # [!code focus]

a = 100
b = PlayerHP(100)
c = PlayerAge(100)

print(type(a) == type(b))
print(type(a) == type(c))
print(type(b) == type(c))

class Player:
    def __init__(self, hp: PlayerHP, age: PlayerAge): # [!code focus]
        self.hp = hp
        self.age = age

    def __str__(self):
        return f'Player(hp={self.hp}, age={self.age})'

p1 = Player(PlayerHP(100), PlayerAge(20))
p2 = Player(100, 20)
print(p1)
print(p2)
```
上面的代码首先定义了`PlayerHP`和`PlayerAge`两种自定义类型，它们都是整形类型的子类型，因此`100`、`PlayerHP(100)`和`PlayerAge(100)`三个对象在Python层面是相等的。上面代码的运行结果如下：
```python
True
True
True
Player(hp=100, age=20)
Player(hp=100, age=20)
```
但是使用`mypy`检查此文件，会得到以下错误：
```python
xxx.py:23: error: Argument 1 to "Player" has incompatible type "int"; expected "PlayerHP"  [arg-type]
xxx.py:23: error: Argument 2 to "Player" has incompatible type "int"; expected "PlayerAge"  [arg-type]
Found 2 errors in 1 file (checked 1 source file) 
```
可见，`mypy`根据代码第15行的类型提示，检查了`p1`和`p2`在实例化时的传入值，并且发现第23行`p2 = Player(100, 20)`的传入值类型与提示不符。

注意，`mypy`发现的类型错误并不影响Python代码的正常运行。

本节中使用到了Python [**面向对象**](/python/class-and-instantiation) 与 [**魔术方法**](/python/class-method#魔术方法) 的知识，关于这些的详细教程在后面哦。

### 泛型
再次使用我们刚才用到的例子，定义一个`add`函数如下：
```python
def add(x: int | str, y: int | str) -> int | str:
    return x+y

print(add(1, 2))
print(add('a', 'b'))
```
运行得到`3`与`ab`，上面的类型提示也似乎不存在问题，当我们传入两个整形时就会返回整形，传入两个字符串就会返回字符串。

但是从语义上仍然有一些不明朗，如果你运行一下`mypy`就会发现，如此简单的代码确报了两个错：
```python
xxx.py:2: error: Unsupported operand types for + ("int" and "str")  [operator]
xxx.py:2: error: Unsupported operand types for + ("str" and "int")  [operator]
xxx.py:2: note: Both left and right operands are unions
Found 2 errors in 1 file (checked 1 source file)
```
用人话说就是，现在的类型提示是允许传入一个整形与一个字符串的，而这会导致`return x+y`报错`TypeError`。

因此我们引入了泛型的概念。首先需要从`typing`中导入`TypeVar`：
```python
from typing import TypeVar  # [!code ++]

T = TypeVar('T', int, str)  # [!code ++]

def add(x: int | str, y: int | str) -> int | str:  # [!code --]
def add(x: T, y: T) -> T:  # [!code ++]
    return x+y

print(add(1, 2))
print(add('a', 'b'))
```
泛型`T`可以是整形或字符串，但不能同时是整形和字符串，因此这限制了调用`add`函数时的传参类型，也更明确地指出了返回值的类型。

`TypeVar()`可以只接收第一个参数，这样的话就是任何类型，但依然不能同时是多个类型。

运行`mypy`，可以发现现在已经不会报错。