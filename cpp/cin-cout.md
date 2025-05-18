# 输入输出与命名空间

## 输入输出：`cin`与`cout`

C++中，输入和输出可以继续使用C语言`<stdio.h>`中的`printf`、`scanf`等标准库函数，也可以使用C++的全新输入输出流。

`cin`和`cout`是位于`<iostream>`中，定义在标准命名空间`std`中的东西。因此，为了使用更先进的输入输出流，我们需要将`#include <stdio.h>`替换成下面代码块中的头部两行：

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a << " + " << b << " = " << a+b << endl;
    return 0;
}
```

```cpp
3 12
3 + 12 = 15
```

第7行`cin`是输入，后跟`>>`并连接变量，表示从控制台输入当中提取并赋值给对应的变量；第8行`cout`是输出，后跟`<<`并连接变量，表示将这些变量输出到控制台。你可以使用不限数量的`>>`和`<<`，也可以通过`cin`和`cout`操作不限数量的变量。

`cin`和`cout`中的`c`表示`console`控制台，即这些输入输出操作是在控制台中进行的。`in`和`out`合称`IO`，这就是所谓的**IO流**了。

`endl`表明一行打印结束，会自动添加`\n`，无需像使用`printf`一样手动给出`\n`。

## 命名空间

### std

在上面的代码中，`cin`、`cout`、`endl`都是在`<iostream>`中实现、位于`std`命名空间中的东东。这意味着：

* 你必须要导入`<iostream>`，并使用`std`命名空间，然后才可以像上面一样使用他们；
* 如果你只导入了`<iostream>`，则将需要使用`std::cin`、`std::cout`和`std::endl`，而非`cin`、`cout`和`endl`；
* 如果你没有导入`<iostream>`，则无论如何都无法使用他们；
* 没了。

命名空间相当于一层额外的保险。如果你不使用`using namespace std;`，而是坚持写`std::cin`等等，则他将确保你定义的变量名不会覆盖语言内部的关键字，而代价则是更麻烦。

### 自定义命名空间

你也可以创建你自己的命名空间，并把你定义的东西扔进去。下面是一个例子：

```cpp
#include <iostream>  // [!code focus:10]
#include <iomanip>
#include <random>
#include <vector>
#include <ctime>
#include "sortlib.h"
using namespace std;

// 可修改的参数
namespace app {
    int ARR_SIZE = 100;
    int INT_MAX = 10000;
    bool CLOCK = false;
}

// 格式化打印数组
void printArray(const vector<int>& arr) {
    for (int j = 0; j < app::ARR_SIZE;) {
        for (int i = 0; i < 20; i++) {
            cout << setw(8) << arr[j + i];
        }
        cout << endl;
        j += 20;
    }
}

// 排序并打印并计时
void sort(vector<int> arr, void (*sortFunc)(vector<int>&)) {
    if (app::CLOCK) {
        clock_t start = clock(), end;
        sortFunc(arr);
        end = clock();
        printArray(arr);
        cout << "排序耗时：" << fixed << setprecision(3) << (double)(end - start) / CLOCKS_PER_SEC << "秒" << endl;
    }
    else {
        sortFunc(arr);
        printArray(arr);
        cout << "排序完成，未记录耗时。" << endl;
    }
}

// 主函数
int main(){
    cout << "部分参数于main.cxx的顶部定义 | 你可以修改之后重新编译并运行程序。" << endl;
    cout << "当前配置：数组大小 = " << app::ARR_SIZE << "，是否计时 = " << (app::CLOCK ? "是" : "否") << endl;
    cout << "开始生成随机数..." << endl;
    default_random_engine randint;
    uniform_int_distribution<int> dist(1, app::INT_MAX);
    vector<int> arr(app::ARR_SIZE);
    for (int i = 0; i < app::ARR_SIZE; i++) {
        arr[i] = dist(randint);
    }
    printArray(arr);
    cout << "随机数生成完毕，开始排序..." << endl;

    while (true) {
        cout << "请选择排序算法：" << endl;
        cout << "1. 插入排序" << endl;
        cout << "2. 快速排序" << endl;
        cout << "3. 希尔排序" << endl;
        cout << "4. 归并排序" << endl;
        cout << "5. 堆排序" << endl;
        cout << "6. 退出" << endl;

        int choice;
        cin >> choice;

        if (choice == 6) {
            break;
        }

        switch (choice) {
            case 1:
                sort(arr, sortlib::insertionSort);
                break;
            case 2:
                sort(arr, sortlib::quickSort);
                break;
            case 3:
                sort(arr, sortlib::shellSort);
                break;
            case 4:
                sort(arr, sortlib::mergeSort);
                break;
            case 5:
                sort(arr, sortlib::heapifySort);
                break;
            default:
                cout << "无效的选择，请重新输入。" << endl;
                continue;
        }
    }
    cout << "正常退出..." << endl;
    return 0;
}
```

以后你会学到这段代码中的更多细节，现在你只需要看前十行。我们首先导入了五个标准库和一个我们在别处实现的`sortlib.h`，然后使用标准命名空间`std`，并定义了一个新的命名空间`app`用来存放常量。

然后你再看看被模糊掉的地方，`sortlib`是我们在库`sortlib`中使用的另一个自定义命名空间，里面放了我们实现的五个排序函数。如果你在程序的头部增加`using namespace sortlib;`的话，则我们可以直接写排序函数名而无需再在前面写`sortlib::`。

这就是命名空间的主要内容了。
