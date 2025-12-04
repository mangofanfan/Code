# 安装
## 版本
Java 每半年发布一个新版本，每数个版本中有一个长期支持版本（Long-term Support，LTS）。一般来说，一定是优先选择更新的版本，但是具体而言还是要因情况而定，比如：
* Minecraft Java 版在游戏版本 1.17 之前的官方 Java 版本始终是 Java 8，自游戏版本 1.17 开始才向后升级到 Java 16、17 直到今日的 Java 21/22；
* 大型项目往往需要谨慎地升级版本，因为升级 Java 版本同时意味着升级框架本身的版本，并且往往导致大量代码需要重写；

新版本中引用的新的特性显然不能在旧的版本中使用，因此，如果你想要学习开发 Minecraft Java 版的模组，那么就不能使用 Java 25。甚至于如果你需要开发 1.12.2 的模组，你只能考虑 Java 8，甚至连使用 Java 11 都可能导致意外的问题。

总得来说，对于今天的初学者，综合考虑来看，最适合学习使用的版本是 Java 21，发布于2023年9月的 Java LTS 版本。

## OpenJDK 和 OracleJDK
OpenJDK 和 OracleJDK 都是 Java。从 Java 11 开始，二者在代码层面几乎不再有区别。

其中，OpenJDK 是由 Oracle、其他商业公司和社区共同维护的开源项目（所以叫做**Open**JDK）；而 OracleJDK 是 Oracle 公司的闭源商业项目，如需商业使用需要向其购买商业许可证，然后可以获得更长时间的商业支持。

总之，我们能够轻松获取到的 Java 几乎都是 OpenJDK，哪怕是 OracleJDK 也允许个人用途非商业地使用，所以随便用，记住这点就 ok。

你可以在你的 IDEA 中随意打开一个项目，然后检查你的系统中存在哪些 Java：

![IDEA project java](/java/img/IDEA-project-Java.png)

## 访问下载网站
Java 目前属于Oracle公司（甲骨文公司）所有，因此优先建议从他们的官方网站下载：<https://www.oracle.com/cn/java/technologies/downloads/>

从该页面可以获取 LTS 版本的 Java，可能还可以获取最新的非 LTS 版本。就芒果编写本段落时，可以直接下载的版本是两个最新的 LTS：Java 25 和 Java 21。

![Oracle Java Download](/java/img/Oracle-Java-download.png)

这里提供了三种平台的 Java 下载。此外，你也可以在他们的 Java archive 页面中找到完整的版本列表，以获取例如 Java 8 等曾经流行的版本：<https://www.oracle.com/cn/java/technologies/downloads/archive/>

注意，下载一些版本前，你可能会被要求注册或登录 Oracle 账户。

## Windows

### 从 Oracle 官网下载并安装
在刚才的 Oracle 网站上获取 Java 安装包。`Installer` 是安装程序，`x64 Installer`和`x64 MSI Installer`都是提供给 Windows 64位的安装程序，二者都可以使用。只需要下载其中一个，然后无脑下一步即可。

在终端中输入 `java --version` 检查是否已经正确安装且配置了环境变量。

```ps
◎ java --version
java 22.0.2 2024-07-16
Java(TM) SE Runtime Environment (build 22.0.2+9-70)
Java HotSpot(TM) 64-Bit Server VM (build 22.0.2+9-70, mixed mode, sharing)
```

这样获取到的 Java 是 Oracle OpenJDK，即 Oracle 构建的 OpenJDK。它们默认位于你的 `C:\Program Files\Java` 目录下。

### 从 Microsoft 下载并安装
Microsoft 也提供 Java，这是他们自行构建的 OpenJDK，称之为 Microsoft Build of OpenJDK。由于你正在使用 Windows，因此这样也许会更为方便。

打开你的 PowerShell，在其中输入：`winget search Microsoft.OpenJDK`。

```ps
◎ winget search Microsoft.OpenJDK
名称                                       ID                   版本       源
----------------------------------------------------------------------------------
Microsoft Build of OpenJDK with Hotspot 11 Microsoft.OpenJDK.11 11.0.29.7  winget
Microsoft Build of OpenJDK with Hotspot 16 Microsoft.OpenJDK.16 16.0.2.7   winget
Microsoft Build of OpenJDK with Hotspot 17 Microsoft.OpenJDK.17 17.0.17.10 winget
Microsoft Build of OpenJDK with Hotspot 21 Microsoft.OpenJDK.21 21.0.9     winget
Microsoft Build of OpenJDK with Hotspot 25 Microsoft.OpenJDK.25 25.0.0.36  winget
```

`winget`是微软为 Windows 平台制作的包管理器，类似于 Ubuntu 中的 `apt` 等，许多软件都可以直接这样下载，效果与使用它们的官方安装程序类似。这样，你就成功为你的系统安装了 Java。

等下，还没安装呢，接着需要输入 `winget install Microsoft.OpenJDK.25`，这样就可以安装 Java 25 了。

![winget install Java](/java/img/winget-install-Java.png)

```ps
◎ winget install Microsoft.OpenJDK.25
已找到 Microsoft Build of OpenJDK with Hotspot 25 [Microsoft.OpenJDK.25] 版本 25.0.0.36
此应用程序由其所有者授权给你。
Microsoft 对第三方程序包概不负责，也不向第三方程序包授予任何许可证。
正在下载 https://aka.ms/download-jdk/microsoft-jdk-25.0.0-windows-x64.msi
  ██████████████████████████████   188 MB /  188 MB
已成功验证安装程序哈希
正在启动程序包安装...
安装程序将请求以管理员身份运行。期待提示。
已成功安装
```

这样获取到的 Java 是 Microsoft OpenJDK，即 Microsoft 构建的 OpenJDK。它们默认位于你的 `C:\Program Files\Microsoft` 目录下。

## Linux

### 查看已安装的 Java 版本
对于 Ubuntu，使用此命令查看已经安装的 Java 版本，以及系统默认的 Java：`sudo update-alternatives --config java`。

```fish
  Selection    Path                                         Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-21-openjdk-amd64/bin/java   2111      auto mode
  1            /usr/lib/jvm/java-21-openjdk-amd64/bin/java   2111      manual mode
```

加`*`的是目前的默认 Java 版本。如果你无需更改默认 Java，比如芒果的 WSL 上现在有且只有一个 Java，那就不需要改，直接按回车即可。

### 从 Oracle 官网下载并安装
刚刚，在 Oracle 官网的下载页面，也提供了 Linux Java 的下载。

这可能需要你有一定的 Linux 水平，由于芒果没有，所以就此打住 QAQ

### 从 apt 查找并安装（Ubuntu）
`apt` 是 Ubuntu 的包管理器，你可以从中安装 LTS 版本的 OpenJDK。首先需要更新 `apt` 源：`sudo apt update`。

然后，可以使用 `apt search openjdk`，在其中搜索所有的 OpenJDK。一般来说可以找到不少 OpenJDK。

```fish
◎ apt search openjdk                                                                       ⌂ 22:13
Sorting... Done
Full Text Search... Done

...

default-jdk/noble,now 2:1.21-75+exp1 amd64 [installed]
  Standard Java or Java compatible Development Kit

default-jdk-doc/noble 2:1.21-75+exp1 amd64
  Standard Java or Java compatible Development Kit (documentation)

default-jdk-headless/noble,now 2:1.21-75+exp1 amd64 [installed,automatic]
  Standard Java or Java compatible Development Kit (headless)

default-jre/noble,now 2:1.21-75+exp1 amd64 [installed,automatic]
  Standard Java or Java compatible Runtime

default-jre-headless/noble,now 2:1.21-75+exp1 amd64 [installed,automatic]
  Standard Java or Java compatible Runtime (headless)

...

openjdk-25-dbg/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  Java runtime based on OpenJDK (debugging symbols)

openjdk-25-demo/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  Java runtime based on OpenJDK (demos and examples)

openjdk-25-doc/noble-updates,noble-security 25.0.1+8-1~24.04 all
  OpenJDK Development Kit (JDK) documentation

openjdk-25-jdk/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  OpenJDK Development Kit (JDK)

openjdk-25-jdk-headless/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  OpenJDK Development Kit (JDK) (headless)

openjdk-25-jre/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  OpenJDK Java runtime, using Hotspot JIT

openjdk-25-jre-headless/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  OpenJDK Java runtime, using Hotspot JIT (headless)

openjdk-25-jre-zero/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  Alternative JVM for OpenJDK, using Zero

openjdk-25-jvmci-jdk/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  JVMCI-enabled SDK for building graalvm

openjdk-25-source/noble-updates,noble-security 25.0.1+8-1~24.04 all
  OpenJDK Development Kit (JDK) source files

openjdk-25-testsupport/noble-updates,noble-security 25.0.1+8-1~24.04 amd64
  Java runtime based on OpenJDK (regression test support)

...
```

很多吧。如果你看中了例如 `openjdk-25-jdk-headless`，只需要在接下来运行 `sudo apt install openjdk-25-jdk-headless` 即可。

:::tip `headless` 是什么？
Linux 环境未必存在图形化界面。

`openjdk-25-jdk-headless` 是 `openjdk-25-jdk` 中移除图形化界面相关的组件之后的版本。在没有图形化界面的系统中，`headless`版本的 Java 在这种环境下更加节约资源。

例如，在 WSL 中，建议安装 `headless` 版本。

那么如果需要在带有图形化界面的 Linux 系统中进行 GUI 程序开发呢？就不能安装 `headless` 了~
:::

安装完成之后，再次运行 `sudo update-alternatives --config java` 检查系统中的 Java 版本：

```fish
  Selection    Path                                         Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-25-openjdk-amd64/bin/java   2511      auto mode
  1            /usr/lib/jvm/java-21-openjdk-amd64/bin/java   2111      manual mode
  2            /usr/lib/jvm/java-25-openjdk-amd64/bin/java   2511      manual mode
```

## macOS
没有 macOS 的电脑，所以…… =w