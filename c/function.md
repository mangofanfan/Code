# 函数

## 函数定义

函数式编程是C语言开发者必须学会的要点。我们已经知道所有C语言程序的入口都是一个`main`函数，现在让我们回顾前面的那个C语言程序：

```c
#include <stdio.h>

int main()
{
    /* 我的第一个 C 程序 */
    printf("Hello, World! \n");
 
    return 0;
}
```

### 无形参

我们通过`int main() {...}`的方式定义了`main`函数。

* 第一个`int`是函数的返回值，表明`main`函数会在结束时返回一个整形变量。
* `main`是函数的名称。
* `()`中的是函数的形参。如果函数无需传参（例如`main`函数），可以留空，但建议写`void`表示不传参。
* `{}`中的代码是函数体。

在继续之前，我们首先声明两点，**除源代码文件顶部的头文件引入部分之外**：

1. C语言**对换行和空格是不敏感的**；
2. C语言**对半角分号`;`敏感**。

这意味着以下三段代码在运行时层面上是等价的：
:::code-group

```c [code1.c]
#include <stdio.h>

int main(void)
{
    printf("Hello, World! \n");
 
    return 0;
}
```

```c [code2.c]
#include <stdio.h>

int main(void){printf("Hello, World! \n");return 0;}
```

```c [code3.c]
#include <stdio.h>

int main     (void )
{

                    printf("Hello, World! \n");
 
    return 0;
}
```

:::

### 有形参

`main`函数可以没有形参，也可以有形参。你也可以自己定义另外的有形参的函数，比如定义一个整形加法函数：

```c
int cal_add(const int a, const int b) {
    const int result = a + b;
    printf("执行加法计算：%d + %d = %d\n", a, b, result);
    return result;
};
```

同样，`int cal_add(...) {...}`的形式，最左边的`int`是返回类型，`cal_add`是函数名，`(...)`中的是形参，`{...}`中的是函数体。

在形参中我们定义了`a`和`b`两个形参，在它们之前的`int`是参数类型，即`cal_add`需要两个整形类型的传入值。`const`关键字修饰`a`和`b`，表明在函数体中，`a`和`b`的值不应该发生改变。

:::info `main`函数的形参？
`main`函数的形参表示程序运行时接收的命令行参数，在此不深度涉及。
:::
