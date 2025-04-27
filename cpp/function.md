# 函数

C++中的定义函数与C语言中高度类似，[你可以前往这里回顾。](/c/function)。

## 函数定义

```cpp
#include <iostream>
using namespace std;


int main() {
    cout << "Hello World!" << endl;
    return 0;
}
```

程序的入口依然是`main`，`main`函数需要返回整形，可以不传参数。在C语言中我们规范在函数的形参中写`void`表示函数不传参，而C++中则建议不写`void`。

## 函数重载

C++相比C语言，支持了函数的重载。函数重载即定义多个拥有相同的名称与不同的形参和/或返回值的函数，在调用时根据传入的形参类型动态判断调用哪种函数定义。

**比如，在C语言中编写函数实现两个数字的加法时：**

```c
int cal_add(const int a, const int b) {
    const int result = a + b;
    printf("执行加法计算：%d + %d = %d\n", a, b, result);
    return result;
};
```

此函数接收两个整形，返回一个整形，可以用做整形之间的加法。而如果我们需要实现浮点型之间的加法，则需要定义另一个不同的函数，比如：

```c
int cal_add(const int a, const int b) {
    const int result = a + b;
    printf("执行加法计算：%d + %d = %d\n", a, b, result);
    return result;
};

double cal_add_double(const double a, const double b) {
    const double result = a + b;
    printf("执行加法计算：%lf + %lf = %lf\n", a, b, result);
    return result;
}
```

然后在调用时：

```c
cal_add(9, 3);
cal_add_double(9.3, 9.2);
```

**而使用C++的函数重载特性实现同时支持整形和浮点型加法的函数：**

```cpp
int cal_add(const int a, const int b) {
    const int result = a + b;
    printf("执行加法计算：%d + %d = %d\n", a, b, result);
    return result;
};

double cal_add(const double a, const double b) {
    const double result = a + b;
    printf("执行加法计算：%lf + %lf = %lf\n", a, b, result);
    return result;
}
```

直接重复定义`cal_add`，只需要保持形参不同，C++就会将其视为重载。然后在调用`cal_add`时，C++会根据传入的参数类型判断调用哪个`cal_add`的定义，如果都不满足再报错。
