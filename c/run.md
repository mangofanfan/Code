# 执行

:::tip 文档结构提醒
「安装」与「执行」章节同时出现在C与C++两种语言的教程中，如果你从C++教程中跳转到此，请记得回城哦！

[此处返回C++：语言特性](/cpp/features)
:::

C语言程序需要先编译再运行。本教程不涉及较为底层的编译原理与中间过程。

## 编译

如果你对C语言的具体编译过程感兴趣，可以看看以下外部资料：

* [C语言的编译过程详解](https://zhuanlan.zhihu.com/p/558783902)

在您的设备上配置C/C++语言的开发环境，请参见[安装](/c/install)章节。

在大多数情况下，例如在Windows上使用MinGW、在Linux上使用gcc，你都可以使用如下命令对单个文件进行快速编译：

```bash
gcc [source.c] -o [program]  // gcc编译C语言源文件
g++ [source.cpp] -o [program]  // g++编译C++源文件
```

此命令会将源文件`source.c`或`source.cpp`编译并最终生成名为`program`的可执行程序，然后你可以在终端中运行`program`程序。下面给出一个使用C++语言的简单的示范：

```cpp [test_2_5.cxx]
#include <iostream>
using namespace std;

class Vehicle {
protected:
    int MaxSpeed;
    int Weight;
public:
    Vehicle(int m, int w) {
        MaxSpeed = m;
        Weight = w;
        cout << "Constructing Vehicle...\n";
    }
    ~Vehicle() {
        cout << "Destructing Vehicle...\n";
    }
    void Run() {
        cout << "The vehicle is running!\n";
    }
    void Stop() {
        cout << "Please stop stopped!\n";
    }
    void Show() {
        cout << "It\'s maxspeed is:" << MaxSpeed << endl;
        cout << "It\'s widget is:" << Weight << endl;
    }
};

class Bicycle : virtual public Vehicle {
protected:
    int Height;
public:
    Bicycle(int m, int w, int h) : Vehicle(m, w) {
        Height = h;
        cout << "Constructing Bicycle...\n";
    }
    ~Bicycle() {
        cout << "Destructing Bicycle...\n";
    }
    void Show() {
        Vehicle::Show();
        cout << "It\'s height is:" << Height << endl;
    }
};

class Car : virtual public Vehicle {
protected:
    int SeatNum;
public:
    Car(int m, int w, int s) : Vehicle(m, w) {
        SeatNum = s;
        cout << "Constructing Car...\n";
    }
    ~Car() {
        cout << "Destructing Car...\n";
    }
    void Show() {
        Vehicle::Show();
        cout << "It\'s seatnum is:" << SeatNum << endl;
    }
};

class MotorCycle : public Bicycle, public Car {
public:
    MotorCycle(int m, int w, int h, int s) : Vehicle(m, w), Bicycle(m, w, h), Car(m, w, s) { // [16]
        cout << "Constructing MotorCycle...\n";
    }
    ~MotorCycle() {
        cout << "Destructing MotorCycle...\n";
    }
    void Show() {
        cout << "It\'s maxspeed is:" << MaxSpeed << endl;
        cout << "It\'s widget is:" << Weight << endl;
        cout << "It\'s height is:" << Height << endl;
        cout << "It\'s seatnum is:" << SeatNum << endl;
    }
};

int main() {
    MotorCycle mc(10, 20, 30, 40);
    mc.Run();
    mc.Stop();
    mc.Show();
    return 0;
}
```

```bash
g++ test_2_5.cxx -o test_2_5
```

文件拓展名`cxx`与`cpp`实质上并无区别。现在，在该目录下将出现名为`test_2_5`的文件。运行它：

```bash
> ./test_2_5
Constructing Vehicle...
Constructing Bicycle...
Constructing Car...
Constructing MotorCycle...
The vehicle is running!
Please stop stopped!
It's maxspeed is:10
It's widget is:20
It's height is:30
It's seatnum is:40
Destructing MotorCycle...
Destructing Car...
Destructing Bicycle...
Destructing Vehicle...
```

## 运行

编译完成后得到可执行文件，执行即运行了编译的代码。

对于单源码文件编译成的程序来说，程序的入口是`main`函数。对于多文件编译而成的程序，编译一个可执行程序用到的所有源文件中只能存在一个`main`函数作为入口。C语言中，`main`函数需要以如下方式定义：

```c
int main(void) {
    // 一些代码
    return 0;
}
```

在后面的教程中会涉及到函数的有关概念。`main`函数是允许没有形参、返回整形类型的函数，其返回值将会作为程序进程结束时的返回值，`0`表示程序正常结束，任何非`0`的值都意味着错误。

如果想要了解如何编译并运行多文件项目，请参见C语言或C++教程的后面内容，以及[CMake](/common/cmake)章节的教程。
