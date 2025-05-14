# 模块化与头文件

当一个项目的体量越来越大之后，一个`main.c`文件似乎招架不住了。C语言自然也支持多文件项目，可以帮助你将代码按照逻辑拆分到不同的`c`源文件中，再在编译时照常生成一个可执行文件。

我们继续以一个命令行计算器程序为例。

## 头文件

现在我们希望能将代码中的入口`main`函数与实现计算功能的函数分装在两个源文件中，即类似下面的形式：
:::code-group

```c [main.c]
int main(void) {
    cal_add(6, 9);
    cal_sub(6, 9);
    cal_mul(6, 9);
    cal_div(9, 3);
    return 0;
}
```

```c [calculator.c]
#include <stdio.h>

int cal_add(const int a, const int b) {
    const int result = a + b;
    printf("执行加法计算：%d + %d = %d\n", a, b, result);
    return result;
};

int cal_sub(const int a, const int b) {
    const int result = a - b;
    printf("执行减法计算：%d - %d = %d\n", a, b, result);
    return result;
};

int cal_mul(const int a, const int b) {
    const int result = a * b;
    printf("执行乘法计算：%d × %d = %d\n", a, b, result);
    return result;
};

int cal_div(const int a, const int b) {
    const int result = a / b;
    printf("执行除法计算：%d ÷ %d = %d\n", a, b, result);
    return result;
};
```

:::
在C语言中，若我们想要在`main.c`中使用在`calculator.c`中定义的函数、变量等，则需要通过头文件的方式将其引入。为此，我们需要编写一个文本格式的`h`文件，对于`calculator.c`我们一般约定其头文件为`calculator.h`。

```c [calculator.h]
#ifndef CALCULATOR_H
#define CALCULATOR_H

int cal_add(int a, int b);
int cal_sub(int a, int b);
int cal_mul(int a, int b);
int cal_div(int a, int b);

#endif //CALCULATOR_H
```

然后对已经存在的两个源码文件稍作更改，现在你的项目应当是这样的：
:::code-group

```c [main.c]
#include "calculator.h"  // [!code ++]

int main(void) {
    cal_add(6, 9);
    cal_sub(6, 9);
    cal_mul(6, 9);
    cal_div(9, 3);
    return 0;
}
```

```c [calculator.c]
#include <stdio.h>
#include "calculator.h"  // [!code ++]

int cal_add(const int a, const int b) {
    const int result = a + b;
    printf("执行加法计算：%d + %d = %d\n", a, b, result);
    return result;
};

int cal_sub(const int a, const int b) {
    const int result = a - b;
    printf("执行减法计算：%d - %d = %d\n", a, b, result);
    return result;
};

int cal_mul(const int a, const int b) {
    const int result = a * b;
    printf("执行乘法计算：%d × %d = %d\n", a, b, result);
    return result;
};

int cal_div(const int a, const int b) {
    const int result = a / b;
    printf("执行除法计算：%d ÷ %d = %d\n", a, b, result);
    return result;
};
```

```c [calculator.h]
#ifndef CALCULATOR_H
#define CALCULATOR_H

int cal_add(int a, int b);
int cal_sub(int a, int b);
int cal_mul(int a, int b);
int cal_div(int a, int b);

#endif //CALCULATOR_H
```

上面的`h`文件就是**头文件**。我们在`calculator.h`头文件中给出了四个函数`cal_add`、`cal_sub`、`cal_mul`和`cal_div`的定义，然后再在`calculator.c`中给出四个函数的具体实现。之后，我们需要在其他文件（例如`main.c`）中引入`calculator.h`头文件，然后就能在`main.c`中使用这四个函数。

现在此项目将通过编译，并且在运行时拥有正确的输出。

```c
执行加法计算：6 + 9 = 15
执行减法计算：6 - 9 = -3
执行乘法计算：6 × 9 = 54
执行除法计算：9 ÷ 3 = 3
```

### 引入头文件

你可能已经注意到，在`calculator.c`中引入两个头文件时的语法略有不同：

```c
#include <stdio.h>
#include "calculator.h"
```

`stdio.h`是C语言内置的头文件，`calculator.h`是我们刚刚编写的头文件。在C语言中，我们约定使用`<...>`表示内置的头文件，使用`"..."`表示我们自己编写的头文件。

:::tip 你知道吗？
在编译过程中，我们引入头文件的语句`#include ...`会被替换成头文件中包含的所有方法的具体实现，无论你有没有调用这些方法。
:::

### 头文件格式

头文件中最少需要包含有关函数或变量的定义，否则你就没有编写这个头文件的必要了。

不过，我们约定将头文件编写为如下结构：

```c [FILENAME.h]
#ifndef FILENAME_H  // 人话：如果 FILENAME_H 未被定义
#define FILENAME_H

// 把定义写在这里...

#endif //FILENAME_H
```

在头文件中包含了条件判断，这样的话可以避免我们意外地重复引入头文件。在上一节的「你知道吗？」中你已经得知引入头文件的语句会被替换成完整的代码，因此重复引入会让编译后的程序体积更大、效率更低。

现代工具会在创建头文件时帮助你完成这些基本的格式。

## 编译与运行

对于单文件程序，你可以使用一行命令完成编译；而这个多文件的计算器就不允许你简单地照搬这一行代码了。

在项目中包含大量C源文件时，我们需要使用更专业的工具来帮助我们编译整个项目。[例如，CMake就是非常成熟的工具了。](/common/cmake)

如下编写您的`CMakeList.txt`：

```c [CMakeList.txt]
cmake_minimum_required(VERSION 3.30)
project(Calculator C)

set(CMAKE_C_STANDARD 11)

add_executable(Calculator main.c
        calculator.c
        calculator.h
)
```

确保你的所有C语言源文件（包括`c`和`h`文件）都包含在`add_executable(...)`中，且你的所有源文件中有且仅有一个`main`函数即可。您的IDE现在应当会正确地提供运行、调试或生成的选项，详请参见[这里的教程哦](/common/cmake)。

如果你需要编译一个C++与C的混合项目，请参见C++教程中的[与C一同使用章节](/cpp/work-with-c)。
