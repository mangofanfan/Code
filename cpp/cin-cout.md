# 输入输出
C++中，输入和输出可以继续使用C语言`<stdio.h>`中的`printf`、`scanf`等标准库函数，也可以使用C++的全新输入输出流。
## `cin`与`cout`
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