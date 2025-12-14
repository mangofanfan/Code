# 按钮 Button
按钮 Button 是很明显的用于点击以执行任务的控件。

## 使用
```python
Button(frame,
       text="在控制台打印 Tkinter Hello",
       command=lambda: print("Tkinter Hello ~")
       ).pack()
```

![Label Image Text](./img/Label-image-text.png)

点击按钮，控制台将会输出 `Tkinter Hello ~`。点击几次，就会输出几次。

### command
`command` 属性是按钮在被点击时将会执行的方法。在上面，我们使用了一个 lambda 函数。

你也可以传一个货真价实的函数进去。这个函数的返回值将会被忽略。

```python
def hello():
    print("Tkinter Hello ~")
    print(f"\t Message from {__name__} / {__file__}")
```

```python
Button(frame,
       text="在控制台打印 Tkinter Hello",
       command=hello
       ).pack()
```

再次强调，`command` 接收的是**函数**，所以你应该使用 `command=hello` 而不是 `command=hello()`，后者实际上会将 `hello()` 方法的返回值传给 `command`。

同时，`command` 接收的函数不能有传入参数，因为在程序运行的时候没有人能给它传参。如果一定要传参的话，考虑使用 lambda 或者 partial。

现在，程序运行时点击按钮，控制台将会输出：

```text
Tkinter Hello ~
	 Message from __main__ / D:\PyCharmProjects\TkinterHello\main.py
```

### 显示图片
与 [Label](Label.md) 一样，你可以为 Button 设置显示图片，以及同时显示图片和文本。

```python
Button(frame,
    image=photo,
    command=hello
    ).pack()
```

![Button Image](./img/Button-image.png)

```python
Button(frame,
    text="在控制台打印 Tkinter Hello",
    image=photo,
    compound="left",
    command=hello
    ).pack()
```

![Button Image Text](./img/Button-image-text.png)
