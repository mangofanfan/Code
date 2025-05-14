# 头文件

与C语言类似，C++中我们同样通过`.h`头文件来组织多个C++源码文件之间的依赖关系。我们同样要在头文件中给出定义，然后在源码文件中实现它，以允许别人使用我们定义的好东西。

## 命名空间+类型

为减少我们写的好东西与别人写的好东西的潜在命名冲突，减少不必要的麻烦，我们可以把咱写的好东西放到一个单独的命名空间里。如果你还不清楚命名空间是什么东西，回去看前面的教程哦。

以往，我们需要在命名空间中像平常一样定义类型和函数，如今也是如此。

:::code-group

```cpp [builtin.h]
#ifndef BUILTIN_H
#define BUILTIN_H

namespace builtin {
    class List {
    private:
        int size;
        int* data;
    public:
        explicit List(int size);
        List(int start, int end);
        explicit List(const List& another);
        ~List();
        void operator=(const List& another);
        void print();
    };
}

#endif
```

```cpp [builtin.cxx]
#include <iostream>
#include "builtin.h"
using namespace std;

namespace builtin {
    // 常量
    string msg = " <LIST> ";

    // 构造函数
    List::List(int size) : size(size) {
        if (size <= 0) {
            size = 0;
            data = nullptr;
            cout << msg << "参数错误，列表重设为空。" << endl;
            return;
        }
        data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = i;
        }
    }
    List::List(int start, int end) : size(end - start) {
        if (size <= 0) {
            size = 0;
            data = nullptr;
            cout << msg << "参数错误，列表重设为空。" << endl;
            return;
        }
        data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = start + i;
        }
    }
    List::List(const List& another) : size(another.size) {
        if (size <= 0) {
            size = 0;
            data = nullptr;
            cout << msg << "参数错误，列表重设为空。" << endl;
            return;
        }
        data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = another.data[i];
        }
    }

    // 析构函数
    List::~List() {
        if (data != nullptr) {
            delete[] data;
        }
    }

    // 重载运算符
    void List::operator=(const List& another) {
        if (this != &another) {
            delete[] data;
            size = another.size;
            data = new int[size];
            for (int i = 0; i < size; i++) {
                data[i] = another.data[i];
            }
        }
        return;
    }

    // 方法
    void List::print() {
        if (data == nullptr || size == 0) {
            cout << msg << "打印的列表为空！" << endl;
            return;
        }
        for (int i = 0; i < size; i++) {
            cout << data[i] << " ";
        }
        cout << endl;
    }
}
```

:::

参见上面的代码，我们实现了一个简单的「列表」，能够生成连续的整形数组，并存储其长度，在内部由一个普通的整型数组存储连续的数字。

我们在头文件中定义了面向调用者公开的方法，即`class List`，位于命名空间`builtin`内。然后在源文件中，我们只在`builtin`命名空间内给出`List`的各个方法的实现，包括其多种构造函数、析构函数和一个`print`方法。

需要注意如下：

* 在源文件的顶部依然需要`#include "builtin.h"`，与C语言一致；
* 不需要在源文件中完整地给出类`List`的定义，而是如在类的外部定义类的方法一样操作即可；
* 可以在源文件中定义头文件中没有的成员，以避免内部成员被外部直接调用。
