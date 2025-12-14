# 添加布局
布局决定我们的 GUI 窗口中的众多控件应当如何编排位置。Tkinter 提供了三种布局。

在一个窗口或者一个 Frame 中只能存在一个布局，**混用布局会导致 Tkinter 抛出异常。**

## pack
pack 是最简单无脑的布局。所有控件会按照添加的顺序，在容器中自上而下排布。

```python
from tkinter import *
from tkinter.ttk import *

def main():
    root = Tk()

    frame = Frame(root)
    frame.pack()

    Label(frame, text="欢迎使用 Code Space").pack()
    Label(frame, text="Code Space 是 （此处省略一千字） 的网站~").pack()
    Button(frame, text="立即登录").pack()
    Button(frame, text="退出").pack()

    root.mainloop()


if __name__ == '__main__':
    main()
```

![layout pack](./img/layout_pack.png)

## grid
grid 与其他所有 GUI 框架中的 grid 类似，以行和列的网格形式对控件进行排列。

```python
from tkinter import *
from tkinter.ttk import *

def main():
    root = Tk()

    frame = Frame(root)
    frame.grid(row=3, column=3)

    Button(frame, text="返回").grid(row=0, column=0)
    Label(frame, text="登录 Code Space").grid(row=0, column=1, columnspan=2)

    Label(frame, text="账号").grid(row=1, column=0)
    Entry(frame).grid(row=1, column=1)

    Label(frame, text="密码").grid(row=2, column=0)
    Entry(frame, show="*").grid(row=2, column=1)

    Button(frame, text="找回").grid(row=1, column=2)
    Button(frame, text="登录").grid(row=2, column=2)

    root.mainloop()


if __name__ == '__main__':
    main()
```

![layout grid](./img/layout-grid.png)

对 Frame 使用 grid 之后，Frame 内的每个控件都要使用 grid 来设置自己所在的网格。
* `row` - 行
* `column` - 列
* `rowspan` - 跨行 ~~（类似合并单元格）~~
* `columnspan` - 跨列

## place
place 使用绝对定位，需要以像素为单位手动指定控件的尺寸和摆放位置。

```python
from tkinter import *
from tkinter.ttk import *

def main():
    root = Tk()

    frame = Frame(root)
    frame.place(x=0, y=0, width=200, height=200)

    Label(frame, text="Place").place(x=0, y=0)

    Button(frame, text="Place", command=lambda: print(root.geometry())).place(x=100, y=60)

    Combobox(frame, values=["A", "B"]).place(x=30, y=30)

    root.mainloop()


if __name__ == '__main__':
    main()
```

![layout place](./img/layout-place.png)

我们在按钮上绑定了一个方法用来获取窗口的尺寸。由于我们没有手动修改 `root` 的大小，因此获取到的是默认尺寸，为 `200x200`。

在 pack 和 grid 布局下，容器/窗口的大小会随内容的变化而自动调整，但 place 模式下不会，因此你需要仔细考虑每个组件的位置与大小，以及整个窗口的大小。

## 混合布局
我们目前在窗口 `root` 当中添加了一个 Frame 用于在其内部显示控件。你可以在 Frame 内部再添加更多的 Frame 来实现更复杂的布局。虽然这对于 Tkinter 来说有些太过高级了（？

## 禁止调整窗口大小
以上三种布局当中，**没有任何一种是完全响应性的**。如果用户调整窗口的大小，组件很可能会被遮挡，或者留出大量空白。因此，你可能还需要禁止调整窗口大小。
* 对于 pack - 控件在水平方向会居中显示，竖直方向无响应性。
* 对于 grid - 控件完全非响应性。
* 对于 place - 控件完全非响应性。

通过下面的方法设置窗口大小以及禁用缩放。两个 `Flase` 分别禁用的是宽度和高度。

```python
root.geometry("200x200")
root.resizable(False, False)
```
