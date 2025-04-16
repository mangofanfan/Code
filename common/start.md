# 使用本站
打开本站点的你想必已经做好成为一位程序员的准备了吧！👀

**Code Space**是一个包含各种语言的简单入门与代码示例的静态站点，基于VitePress构建并部署，并且在github开源。

在顶部导航栏中选择一种语言，即可进入该语言的空间中。

目前内容还有很多欠缺捏，等我慢慢写叭 TT

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

这样有助于重复多次运行同一段代码，尤其是在需要给出不同的输入时。实际上，芒果帆帆在WSL上执行这些测试代码。