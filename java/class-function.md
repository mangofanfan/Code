# 类与方法
很不幸的是，在 Java 语言教程的一开始，我们就必须要引入「类」这一概念了~

<WhatsClass></WhatsClass>

放心吧，Java 的语法和 C 系语言非常相近，很容易理解~

## 类与文件名的基本规范
Java 要求每个 `.java` 文件中都需要有一个与文件名相同的 Java 类。因此，`Main.java` 文件中需要有 `public class Main`，`Calculator` 类需要在文件 `Calculator.java` 中。

因此，你需要习惯于在每个 `.java` 中只写一个公共类。

事实上，Intellij IDEA 对 Java 的这种规范有独特的优化：在左侧的项目文件窗格中，IDEA 不会显示 Java 源代码文件的后缀 `.java`，因为每个文件在项目中可以等效地看作一个类。

![IDEA Java Files view](/java/img/IDEA-Java-Files-view.png)

而实际上，在 `src` 目录下的是 `Calculator.java` 和 `Main.java` 两个文件。

## 程序入口的基本规范
你的 Java 程序需要有一个入口。在上面的截图中，IDEA 为 `Main` 的图标上标注了一个小小的绿色三角形，表明这个程序的入口是 `Main`。

### 入口类
打开 `Main`（实际上是 `Main.java`，本教程中以后在无歧义的地方可能会混用这些叫法），其内容如下：

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Hello, World!");
        calc.add(9, 4);
        calc.sub(9, 4);
        System.out.println("Hello, World!");
    }
}
```

一般来说，我们规定 Java 项目中的公共静态方法 `Main.main()` 是程序入口，签名也固定为 `public static void main(String[] args)`。显然，该方法接收任意数量的字符串，无返回值，公共，且静态。

### 基本类
打开 `Calculator`，其内容如下：

```java [Calculator.java]
public class Calculator {
    private final String name;

    public Calculator() {
        this.name = "Normal Calculator";
    }

    public Calculator(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public int add(int a, int b) {
        int result = a + b;
        print(a, b, result, '+');
        return result;
    }

    public int sub(int a, int b) {
        int result = a - b;
        print(a, b, result, '-');
        return result;
    }

    private void print(int a, int b, int result, char op) {
        System.out.printf("%s: %d %s %d = %d\n", name, a, op, b, result);
    }
}
```

自然而然，这是一个传统意义上的类。
* 该类名为 `Calculator`，访问权限是公共的；
* 拥有 `name` 一个成员字段，访问权限是私有，并且用 `final` 修饰，这表明字段 `name` 一旦被赋值之后就不会再更改；
* 拥有两个构造方法，访问权限均是公共，一个接收字符串作为 `name` 字段的值，另一个使用默认 `name`；
* 拥有一个 `getName` 方法可以获取私有字段 `name` 的值，或者称之为 `name` 的 getter；
* 拥有 `add` 和 `sub` 方法，处理加法和减法；
* 拥有私有方法 `print`。

要想使用这个类（或者只是使用其中的一个方法，比如 `Calculator.add` 一下 `4` 和 `9`），就需要首先将 `Calculator` 实例化，就像我们在 `Main` 中做的那样。

## 实例化类
```java 
Calculator calc = new Calculator();
```

以上代码会实例化一个 `Calculator` 类，保存为变量 `calc`。然后，就可以调用 `calc.add(4, 9)` 来计算 `4` 和 `9` 的和了~