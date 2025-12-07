# 使用本站

打开本站点的你想必已经做好成为一位程序员的准备了吧！👀

**Code Space** 是一个包含各种语言的简单入门与代码示例的静态站点，基于VitePress构建并部署，并且在github开源。

你可以在下方选择你中意的字体，Code Space 将以你选择的字体展示~

:::info 字体切换器 =w
<FontsComboWidget></FontsComboWidget>
:::

在顶部导航栏中选择一种语言，即可进入该语言的空间中。

目前内容还有很多欠缺捏，等我慢慢写叭 TT

## 开始之前

如果你使用Windows，并且很喜欢折腾，那么芒果帆帆向你墙裂推荐微软推出的WSL，可以让你在Windows上获得Linux的最佳体验。[关于启用WSL的教程请参见这里。](/common/wsl)

开始编程之前，你将需要一个或不止一个趁手的IDE，不要轻信任何人告诉你的新手入门只需要记事本就可以写代码。[关于IDE的教程请参见这里。](/common/ide)

## 风格说明

### 代码块

你可能会在本站的代码块中看到如下样式：

```python
def sayHello():
    name = "QAQ"  # [!code --]
    name = "QWQ"  # [!code ++]
    print(f"我的名字是{name}，你好吖(｡･∀･)ﾉﾞHi")
```

红色背景色、`-`打头的代码行是删除，绿色背景色、`+`打头的代码行是新增。如果你曾经使用过Git版本控制系统，可能对这些表示代码增减的样式很熟悉。

### 运行结果

Code Space会在一些可运行的代码片段的后面跟上该代码片段的运行结果。目前来说，结果有两种表现形式。

```python
class Cat:
    count = 0
    def __init__(self, name: str, age: int):
        Cat.count += 1
        self.name = name
        self.age = age
    def miaow(self):
        print(f"{self.name}: Miaow Miaow!!")

tom = Cat("Tom", 3)
print(Cat.count)
fan = Cat("Fan", 2)
print(Cat.count)
tom.miaow()
fan.miaow()
```

```text
1
2
Tom: Miaow Miaow!!
Fan: Miaow Miaow!!
```

显然，下面的文本是上方代码的运行结果。

另外，你可能还会看到另一种形式的运行结果，例如：

```python
num = int(input("请输入数字："))

if num > 0:
    print("输入的数字是正数：", num)
else:
    print("输入的数字是负数：", num)
```

```bash
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：6
输入的数字是正数： 6
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：1
输入的数字是正数： 1
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：0
输入的数字是负数： 0
mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$ /bin/python3 /home/mangofanfan/HelloWorld/01_if.py
请输入数字：-9
输入的数字是负数： -9
```

上过小学二年级的同学都知道，这种结果显然是直接从Linux的控制台中复制出来的嘛！顺便巩固一下小学二年级的期末考试题目：在上面的控制台输出中，`mangofanfan@LAPTOP-MREQPRK3:~/HelloWorld$`是指用户名`mangofanfan`在主机`LAPTOP-MREQPRK3`中的用户目录下的`HelloWorld`目录下运行命令，而同样的命令`/bin/python3 /home/mangofanfan/HelloWorld/01_if.py`被执行了四次，即调用程序`/bin/python3`执行了四次`HelloWorld`下的`01_if.py`源文件，做答完毕。

这样有助于重复多次运行同一段代码，尤其是在需要给出不同的输入时。实际上，在更新时间更新的教程中，芒果帆帆在WSL上执行这些测试代码。

## 我是谁呢？

初次见面，我是芒果帆帆。

页面下方的贡献者栏目中有我的GitHub地址，你可以前往查看我创建的一些屎山。另外，如果你愿意帮助我一起维护Code Space，你的名字也会出现在下面的贡献者当中 ~~，让更多的人可以前往观摩你的屎山~~ ~

你随时可以参与Code Space的编写与维护，请参阅[贡献章节](/common/contribute)，并请放心，芒果帆帆非常乐于与你合作继续这个项目。

那么，希望Code Space能够对你有所帮助。继续吧。
