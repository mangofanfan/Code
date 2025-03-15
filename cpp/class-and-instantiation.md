# 类型与实例
<WhatsClass></WhatsClass>

C++相比于C，最明显的升级就是支持面向对象编程。
```cpp
#include <iostream>
using namespace std;


class Cat {
public:
    string name;
    int age;

    Cat(string name, const int age) {
        this->name = std::move(name);
        this->age = age;
    }
    void miaow() const {
        cout << this->name << ": Miaow Miaow!!" << endl;
    }
};


int main() {
    Cat cat("Tom", 18);
    cat.miaow();
    return 0;
}
```
运行上面的程序，得到一只Tom猫喵了两声。
```cpp
Tom: Miaow Miaow!!
```

## 定义类型
使用如下的基本方式定义一个猫猫类：
```cpp
class Cat {
public:
    string name;
    int age;

    Cat(string name, int age) {...}
    void miaow() {...}
};
```
`Cat`是类名，`public`是访问控制符，与之类似的还有`private`和`protected`。在`public`下定义了两个变量`name`和`age`、两个方法`Cat`和`miaow`，定义方式基本与正常情况下一致。

### 构造函数
`Cat`方法是类型`Cat`的构造函数。不同于Python的类型构造函数固定为`__init__`，C++中类型的构造函数名称与类名一致。

C++要求构造函数不写返回值类型，连`void`都不能写。构造函数一般用来为类中定义的属性设置值，例如我们的猫猫类的构造函数：
```cpp
Cat(string name, int age) {
    this->name = name;
    this->age = age;
}
```
构造函数说明猫猫类在初始化时接收一个字符串和一个整形，分别是猫猫的名字和年龄。然后，通过`this`指针为实例化的猫猫设置名字和年龄。不可以在构造函数中`return`任何东西。

构造函数同样可以为形参设置默认值：
```cpp
explicit Cat(string name = "Tom", const int age = 18) {
    this->name = move(name);
    this->age = age;
}
```
:::tip `explicit`是什么？
`explicit`关键字用来**指定构造函数是显式的**，从而防止编译器进行隐式的构造函数转换。

一般来说，遵循规范的写法可以避免出现构造函数的隐式转换；但如果你的IDE提醒你添加此关键字，那便添加吧。
:::

:::tip `move`是什么？
`move`是标准命名空间`std`中的函数，在此处使用`this->name = move(name)`代替`this->name = name`可以带来一些性能上的提升。

不加也是完全合法的；但一样，如果你的IDE提醒你添加此类写法，那就添加吧。
:::

### 实例化方法
```cpp
int main() {
    Cat tom;
    Cat bro{};
    Cat jim{"Jim"};
    Cat mango{"Mango", 12};
    Cat mary("Mary", 15);
    tom.miaow();
    bro.miaow();
    jim.miaow();
    mango.miaow();
    mary.miaow();
    return 0;
}
```
保持上面的构造函数不变，运行，得到如下输出：
```cpp
18岁的Tom: Miaow Miaow!!
18岁的Tom: Miaow Miaow!!
18岁的Jim: Miaow Miaow!!
12岁的Mango: Miaow Miaow!!
15岁的Mary: Miaow Miaow!!
```
可以看出，C++允许开发者使用各种不同方法实例化类型。一般来说，在使用`{}`实例化类型时会具备更严格的类型检查（准确地说是禁止了隐式的类型转换），所以建议使用如`Cat bro{}`的格式，并在花括号中按顺序传参。

### 构造函数重载
同其他函数一样，类的构造函数也可以重载。
```cpp
#include <iostream>
using namespace std;


class Cat {
public:
    string name;
    int age;

    explicit Cat(string name = "Tom", const int age = 18) {
        this->name = move(name);
        this->age = age;
    }
    explicit Cat(const int age = 18, string name = "Tom") {
        this->name = move(name);
        this->age = age;
    }
    void miaow() const {
        cout << this->age << "岁的" << this->name << ": Miaow Miaow!!" << endl;
    }
};


int main() {
    // Cat tom;  由于同时满足多种构造方法的类型需要，程序不知道使用哪种构造函数来实例化这只猫
    Cat bro{3};
    Cat jim{"Jim"};
    Cat mango{"Mango", 12};
    Cat mary("Mary", 15);
    // tom.miaow();
    bro.miaow();
    jim.miaow();
    mango.miaow();
    mary.miaow();
    return 0;
}
```
同样的，在我们重载了多种构造函数之后，程序会根据我们传入的参数类型判断使用哪种构造函数。函数重载给了开发者很高的自由度，例如你可以使用下面的构造函数替换上面的代码，以允许不传参地实例化一只猫。
```cpp
explicit Cat() {
    this->name = "Tom";
    this->age = 18;
}
explicit Cat(string name, const int age = 18) {
    this->name = move(name);
    this->age = age;
}
explicit Cat(const int age, string name = "Tom") {
    this->name = move(name);
    this->age = age;
}
```
现在，通过`Cat tom;`来实例化一只名为`tom`的猫就是合法的了。
:::tip const关键字的作用
本页中的类的代码中有两处使用到了`const`。

在`explicit Cat(string name, const int age = 18) {...}`中的`const`表示传入的`age`的变量值不应更改，与`const`的一般行为一致。

在`void miaow() const {...}`中的`const`表示类的方法`miaow()`没有修改类本身的属性。在这里添加`const`有助于加快程序的运行速度，因此建议在所有未修改类本身属性的方法中都使用`const`关键字。
:::
