# 循环

Python中存在for循环（for loop）和while循环（while loop）两种循环，与其他语言非常类似。Python使用缩进层级来表示循环体的范围。且支持`continue`和`break`来跳过或跳出循环。

## for循环

```python
for i in range(10):
    print(i)
```

```python
0
1
2
3
4
5
6
7
8
9
```

在处理需要重复执行多次的代码时，我们可以将其放入如上的for循环中，上面的Python代码类似于C语言中的如下代码：

```c
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

Python中，`range(10)`实际上得到了从`0`到`9`的有序数字结构，你可以用`list(range(10))`将其转化成`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`的列表。`for i in range(10)`就是将数字从中逐个取出，放在变量`i`中。

你也可以直接使用for来循环一个列表中的每一项。

```python
for i in [1, 2, 3]:
    print(i)
```

以及可以提供多个循环变量来循环一个由格式统一的元组构成的列表结构。

```python
items = {"name": "Fan", "age": 3}
for k, v in items.items():
    print(k, v)
```

缘于`dict.items()`返回的是类似于列表的结构，其中每一元素都是两项的元组。因此，使用`k`和`v`两个循环变量可以将列表中的元素解包并分别赋值。[如果你还不是很懂字典这种数据结构的话，去看前面的教程哦。](/python/basic-type)

请参见如下代码：

```python
items = {"name": "Fan", "age": 3}
print(items.items())

for k, v in items.items():
    print(k, v)

for i in items.items():
    print(i)
```

```python
dict_items([('name', 'Fan'), ('age', 3)])
name Fan
age 3
('name', 'Fan')
('age', 3)
```

**由此，我们得到Python中，for循环的本质是便利一个列表结构中的每一元素。**

### 特点与不同

在其他C系语言中，你可以通过`for (;;) {...}`的方式构造一个死循环，在Python中是不存在的。必须提供一个列表以供Python的for循环遍历。

想要在Python中实现死循环，需要使用下面的while循环。

此外，Python的循环体中不限制变量的作用域，在循环体中定义的变量可以拿到循环之外使用，例如我们`for i in range(10)`中的`i`是可以在循环结束之后保留其最后一个值`9`的，这也与其他C系语言不同。

## while循环

```python
i = 0
while i < 10:
    i += 1
    print(i)
```

```python
1
2
3
4
5
6
7
8
9
10
```

while循环需要一个判断条件。本例中的判断条件是`i < 10`，当此条件为真时，循环将不断执行，直到下一次开始循环前判断条件为假。

那么聪明的你应该如何构造死循环呢？

```python
i = 0
while True:
    i += 1
    print(i)
```

然后就可以享受暴风雨了！

:::tip 以防你不知道怎么结束
在终端中按下`Ctrl`+`C`可以结束Python程序，原理是引发一个`KeyboardInterrupt`异常。
:::

### 判断条件

`while True`中的`True`是一个判断条件，永远为真，所以循环永远进行。Python中的任意对象都可以求布尔值，任意判断表达式都可以得到布尔值。

例如，`while 1`在这里与`while True`是等价的，因为对整形`1`求布尔值得到`True`。

在Python中，以下对象的布尔值为假，即`False`：

* `False`: `bool`（`假`本身）
* `0`: `int`
* `0.0`: `float`
* `""`: `str`
* `[]`: `list`
* `{}`: `dict`
* `None`

其他，例如非零数字、非空字符串和非空列表等，布尔值都为真，

[在下一节的if语句中](/python/if-try)，你还会需要这些知识哦。

## 跳过、跳出循环

有时，我们希望能暂时跳过一些循环，例如在遍历学生列表时暂时跳过2班的学生，则可以使用`continue`关键字。

```python
stdList = [
    {"name": "Light", "class": 1},
    {"name": "Fan", "class": 2},
    {"name": "Air Conditioner", "class": 3},
    {"name": "Heater", "class": 4},
    {"name": "Refrigerator", "class": 5},
    {"name": "Washing Machine", "class": 6},
    {"name": "Television", "class": 7},
    {"name": "Computer", "class": 8},
    {"name": "Microwave Oven", "class": 9},
    {"name": "Electric Kettle", "class": 10},
]

for std in stdList:
    if std["class"] == 2:
        continue
    print(f"Student (?) {std["name"]} from class {std["class"]} is comming!")
```

```python
Student (?) Light from class 1 is comming!
Student (?) Air Conditioner from class 3 is comming!
Student (?) Heater from class 4 is comming!     
Student (?) Refrigerator from class 5 is comming!
Student (?) Washing Machine from class 6 is comming!
Student (?) Television from class 7 is comming! 
Student (?) Computer from class 8 is comming!   
Student (?) Microwave Oven from class 9 is comming!
Student (?) Electric Kettle from class 10 is comming!
```

`continue`会让当前一次循环立刻结束，如果循环还未结束则开始下一次循环。

有时，我们还希望能跳出整个循环，尤其是在`while True`这样的循环中，必须采取其他方法来跳出循环，否则就真的成为死循环了。

`break`关键字可用于跳出循环，例如修改上面死循环的代码：

```python
i = 0
while True:
    i += 1
    print(i)
    if i > 500:
        break

print("End of loop")
```

```python
1
2
3
...
500
End of loop
```
