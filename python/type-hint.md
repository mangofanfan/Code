# 类型注释
Python允许在代码中标注类型注释。

但是Python是一门弱类型语言，运行时不会因为实际类型与标注类型不一致而报错。标注类型的主要目的是帮助开发者自己或团队间的协作，以及方便IDE进行类型检查。

## 基本注释
```python
name: str = "MangoFanFanw"
age: int = 18
money: float = 6.66
languages: tuple = ("Python", "C")
friends: list = ["QAQ", "AWA", "PWP"]
gpa: dict = {"Math": 2, "English": 3, "PE": -6}
```

上面分别是Python中的字符串、整形、浮点数、元组、列表、字典类型。实际上这里的类型注释是没有必要的，因为IDE可以根据等号后面的类型推断等号前面的类型。

那么在什么情况下我们需要这样的注释呢？
```python
for string in stringList:
    string: str
    print(string.split(","))
```

例如处理`stringList`，学过小学二年级的程序员都能看出来这是一个由字符串组成的列表，那么从中提取的每一个`string`都应该是字符串，从而允许我们进行`split()`字符串切割操作。

但是IDE看不出来，怎么办呢？欸！加上类型注释`string: str`就好嘞。

在实际运行中，如果阴差阳错，`stringList`中混入了一个整形，Python会在`pring(string.split(","))`报错，而非`string: str`，这说明类型注释终归是注释，也证明了Python是一门弱类型语言。

另外，你也可以将变量指定为你定义的类型，例如：
```python
class Cat:
    def __init__(self, name: str, age: int)
        self.name = name
        self.age = age
    def miaow()
        print(f"{self.name}: Miaow Miaow!!")
        
// 假设这里有很多很多代码

for cat in catList:
    cat: Cat
    cat.miaow()
```

## 函数相关注释
```python
def add(x: int, y: int) -> int:
    return x+y
```

上方的`add`函数接收`x`、`y`两个参数，返回一个变量，三个都是整形类型。这样的定义可以帮助IDE为你提供更好的函数签名辅助。

:::tip 函数签名
函数签名似乎是来自C++的概念，是指函数的名称及其参数类型的组合，用于区分不同的函数。函数签名不包括返回类型，也不包括参数的名字。
:::

同样，如果你使用`print(add("Mango", "FanFan"))"`，会得到`MangoFanFan`而不是一个`TypeError`，这说明函数签名也不会在运行时进行检查。

同样，可以使用你定义的其他类型来作为注释。