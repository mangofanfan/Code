# C++

## 概述

C++是在C语言的基础上继续开发得到的面向对象的高级编程语言。

在学习C++之前，我们建议你拥有一定的C语言基础。[你可以在这里查看本站的C语言教程。](/c/features)

此外有些特殊的是，C++源码的文件拓展名可能为`cpp`或`cxx`。二者本质上并无区别，只是在Linux平台下由于`cpp`文件已经名花有主，因此C++只能退而求`cxx`，在其他平台如Windows上则可以使用`cpp`。“cpp”是“C Plus Plus”，即“C++”。

本站的C++教程中可能同时存在`cpp`和`cxx`两种形式，这是因为芒果在同时使用Windows和WSL中的Linux干活，问题不大啦。

## 示例

```cpp
#include <iostream>
using namespace std;


int main() {
    cout << "Hello World!" << endl;
    return 0;
}
```

以上代码将打印`Hello World!`。同C语言不同，我们没有在字符串中给出`\n`来强制换行。

`using namespace std;`表示使用标准命名空间，标准库`<iostream>`中的函数均定义在`std`命名空间中，因此声明使用该命名空间可以简化我们的代码。

如果不写`using namespace std;`，则代码会变成这样。

```cpp
#include <iostream>


int main() {
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```
