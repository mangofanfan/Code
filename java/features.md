# 概述
Java 是一门面向对象的高级编程语言。

<WhatsClass></WhatsClass>

需要额外强调，**Java 是一门强面向对象的语言**，因此你必须要在掌握面向对象的思想之后才能开始学习 Java。

那么，让我们来看看 Java 和其他语言的入门有什么不一样吧？

## Hello World
```java [Main.java]
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Java 源代码文件的格式后缀是`.java`，要求每个文件中都至少包含一个公共类，即`public class XXX`。其中，`XXX`需要和文件名一致，因此在上面的`Main.java`中是`public class Main`。

`public static void main(String[] args)`定义了一个公共静态方法`main`，接收`String[] args`，返回`void`。这样，我们就可以告诉 Java 我们的程序在启动时应该做什么——调用这个 `main` 方法。

`System.out.println("Hello, World!");`是我们的程序做的唯一一件事情：打印`Hello, World!`。

## 开发环境
为了编写 Java 代码，十分建议且只推荐以下两款 IDE：
* Visual Studio Code（VSCode）
* IntelliJ IDEA（JetBrains IDEA）

其中，VSCode 可能需要额外配置才能得心应手地使用，而 IDEA 则几乎可以开箱即用。请参见这里：[配置IDE](/common/ide)。

## 相关命名
**Java SE，是指 Java 标准平台，即我们使用的 Java。** 与之对应的，还有（或曾经存在过）Java 企业平台、嵌入式平台等。

**JRE，即 Java (SE) Runtime Environment，Java 运行时，是运行 Java 程序所需要安装的。**

**JDK，即 Java (SE) Development Kit，Java 开发套件，是开发 Java 程序所需要安装的。**

在 Oracle 接手 Java 之后，JRE 和 JDK 的概念区分正在淡化。总之，JDK 不仅可以用于开发，也可以用于运行，因此实际上没有必要区分并使用 JRE。