# 类型与实例化
<WhatsClass></WhatsClass>

Python使用`class`关键字来定义类型。类型是Python中很常见的东西，这也符合Python的设计理念。

```python
class Cat:
    def __init__(self, name: str, age: int)
        self.name = name
        self.age = age
    def miaow()
        print(f"{self.name}: Miaow Miaow!!")

cat = Cat("XiaoFan", 1)
cat.miaow()
```

这一段代码定义了一个`Cat`类型，实例化了一个`cat`对象，并且让`cat`喵了两声。上面的代码中使用了类型注释和f-string，如果你对他们没有印象了，回头去看前面的教程哦。