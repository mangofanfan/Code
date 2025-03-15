# 与C一同使用
C++和C两种语言本就一家亲。在一个项目中是可以同时存在C++和C两种语言各自的源文件的，它们可以互相调用对方实现的函数与功能。

考虑到实际情况，我们仅提供从C++调用C语言的教程。

## 引入头文件
参见C语言教程中的[模块化与头文件章节的程序](/c/head-file)，我们部分切换到C++，继续完成这个计算器程序。

将`main.c`重命名为`main.cpp`，并对应修改`CMakeList.txt`和**头文件`calculator.h`**，使你的项目如下：
:::code-group
```cpp [main.cpp]
#include "calculator.h"

int main() {
    cal_add(1, 2);
    cal_sub(3, 4);
    cal_mul(5, 6);
    cal_div(8, 2);
    return 0;
}
```

```c [calculator.c]
#include <stdio.h>
#include "calculator.h"


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

#ifdef __cplusplus  // [!code ++]
    extern "C" {  // [!code ++]
#endif  // [!code ++]

int cal_add(int a, int b);
int cal_sub(int a, int b);
int cal_mul(int a, int b);
int cal_div(int a, int b);

#ifdef __cplusplus  // [!code ++]
    }  // [!code ++]
#endif  // [!code ++]

#endif //CALCULATOR_H
```

```c [CMakeList.txt]
cmake_minimum_required(VERSION 3.30)
project(CommandCalculator)

set(CMAKE_CXX_STANDARD 20)

add_executable(CommandCalculator main.cpp
        calculator.c
        calculator.h
)

```
:::
`extern "C"`是C++引入由C语言编写的模块时需要的语法，其有两种使用方法。
```c
#ifndef XXXXXX_H
#define XXXXXX_H

extern "C" int cal_add(int a, int b);

extern "C" {
    int cal_sub(int a, int b);
    int cal_mul(int a, int b);
    int cal_div(int a, int b);
}

#endif
```
`extern “C”`会让C++编译器以编译C语言的方式处理头文件，否则由于C++和C在编译期的行为不一致，会导致`main.cpp`中调用到的在C源文件中定义的函数未定义。

不过如果只是用`extern "C"`的话还是会有些问题，如果我们在其他C源文件中引入此头文件，则会导致错误，因为C编译器不认识这是什么意思。因此，我们采用了这种写法：
```c
#ifndef XXXXXX_H
#define XXXXXX_H

#ifdef __cplusplus
    extern "C" {
#endif

// 定义声明在这里

#ifdef __cplusplus
    }
#endif

#endif //XXXXXX_H
```
判断`__cplusplus`可以帮助我们得知此刻是C编译器还是C++编译器在引入此头文件，如果是C++则使用`extern "C"`，否则不使用。

这样，我们就实现了在C++项目中使用已有的C库。