# CMake

在使用C或C++开发体量较大的项目时，你将需要通过更方便的工具来完成项目从源码到成品的构建与生成。芒果帆帆墙裂推荐各位[首先安装WSL](/common/wsl)，然后在Linux虚拟机中 ~~游玩~~ 实践CMake，以及实践任何C/C++项目，以避免一些可能奇奇怪怪、“Only work on my computer”的问题。

关于C与C++中如何通过头文件来组织多文件之间的依赖关系，请分别参见：

* C：[模块化与头文件](/c/head-file)
* C++：[模块化与头文件](/cpp/head-file)
* C++：[与C协同使用](/cpp/work-with-c)

## 安装 CMake

### Windows

在Windows下，前往CMake的官网下载安装包（文件拓展名为`.msi`），然后无脑安装即可。注意安装时需要选择`Add CMake to the system PATH for all users`，可以免去配置环境变量的痛苦。

当然，你仍然需要首先安装MinGW作为Windows上的C/C++编译环境，请参见C语言中的[安装](/c/install)章节。

### Linux

以WSL Ubuntu为例，运行如下命令安装：

```bash
sodu apt install cmake
```

如果你的Linux上此前没有，或不确定是否存在已有的C/C++环境，则建议完整运行下面的命令：

```bash
# 更新包列表: 更新包管理器的包列表，确保你能从最新的仓库中获取软件。
sudo apt update

# 安装 GCC 编译器 : GCC 是 GNU Compiler Collection 的简称，是最常用的C 和 C++ 编译器。
sudo apt install gcc

# 安装构建工具: build-essential 包提供了很多开发标准C和C++程序所需的工具。
# 包括 g++（GNU C++ 编译器）、make（用于自动化编译的工具）和一些其他必要的库和开发文件。
sudo apt install build-essential

# 安装调试工具
sudo apt install gdb
 
# 安装检测内存泄漏工具 valgrind
sudo apt install valgrind

# 安装CMake
apt install cmake

# https://zhuanlan.zhihu.com/p/687454451
```

也可以前往C语言中的[安装](/c/install)章节查看更详细的安装指南。

完成安装之后，新建一个终端并运行`cmake`以检查是否安装成功。

```txt
Usage

  cmake [options] <path-to-source>
  cmake [options] <path-to-existing-build>
  cmake [options] -S <path-to-source> -B <path-to-build>

Specify a source directory to (re-)generate a build system for it in the
current working directory.  Specify an existing build directory to
re-generate its build system.

Run 'cmake --help' for more information.
```

## 配置IDE以支持CMake

一个项目是否使用CMake，最简单直观的判断方式就是检查其目录下是否存在名为`CMakeLists.txt`的文件。接下来，我们首先让我们的IDE支持此类型的文件。

### Visual Studio Code

在VSCode的拓展商店中搜索CMake Tools，选择来自Microsoft的拓展并安装，即可启用VSCode的CMake支持。支持CMake，仅需此一个拓展即可。

拓展CMake Tools还包含在C/C++ Extension Pack中，因此你可以选择直接安装此拓展包。

![VSCode中的C/C++ Extension Pack](<img/VSCode CCPP Extension Pack.png>)

安装完成后，无论在Windows环境或WSL环境中均可直接使用这套方案。在使用VSCode打开的新项目中输入或选择命令`CMake: Quick Start`，然后经过一个简短的设置过程，即可生成你的第一个`CMakeLists.txt`文件。

![VSCode中的CMake快速开始命令](<img/VSCode command CMake Quick Start.png>)

### CLion

Jetbrains CLion内置了开箱即用的对CMake的支持，可直接使用。正常使用CLion新建项目，`CMakeLists.txt`将自动生成。

## CMakeLists.txt

此文件中按照约定的语法，存储了当前项目的构建信息，包括使用哪个版本的CMake、使用哪些标准的C或C++、根据哪些代码文件生成哪些可执行程序或库文件、将哪些库文件链接到哪些可执行程序……

配置成功后，对此文件的任何编辑都将触发IDE的自动构建，以检查编辑后的`CMakeLists.txt`是否仍然合法。当然，合法不代表正式构建时不会出现问题，总之先来学语法吧。

使用VSCode的快速开始生成的`CMakeLists.txt`文件如下：

```cmake
cmake_minimum_required(VERSION 3.10.0)
project(CppTest9 VERSION 0.1.0 LANGUAGES C CXX)

add_executable(CppTest9 main.cpp)
```

此默认生成的文件首行设置了最低CMake版本为3.10.0，一般无需改动此选项，除非日后你需要用到CMake的高级功能；第二行设置了项目的名称「CppTest9」、项目的版本「0.1.0」和项目的语言「C和CXX」。CXX在这里即指代C++。

由CLion自动生成的`CMakeLists.txt`文件如下：

```cmake
cmake_minimum_required(VERSION 3.30)
project(QQCode C)

set(CMAKE_C_STANDARD 11)

add_executable(QQCode main.c)
```

相比VSCode生成的文件，CLion额外限制了语言标准（C 11），这实际上是在创建项目时CLion要求用户设置的。由此可见，在前面的设置上，基本无需我们过多操心，IDE可以完全胜任项目基本信息的配置工作。

我们真正需要操心的就是构建编译设置。正巧最近，芒果帆帆刚刚炸完C++程序设计实践的鱼，遂拿其中实现得比较复杂的一道题目来作为介绍吧。

GitHub：**CppTest_BasicSort**：<https://github.com/mangofanfan/CppTest_BasicSort>

```cmake
cmake_minimum_required(VERSION 3.10.0)
project(CppTest1 VERSION 0.1.0 LANGUAGES CXX)

file(GLOB_RECURSE Sortlib_SRC
    "${CMAKE_CURRENT_SOURCE_DIR}/sortlib/*.cxx"
    "${CMAKE_CURRENT_SOURCE_DIR}/sortlib/*.h"
)

add_library(sortlib STATIC ${Sortlib_SRC})

add_executable(CppTest1_cmd main.cxx)
add_executable(CppTest1_word word.cxx)

target_include_directories(CppTest1_cmd PRIVATE sortlib)
target_include_directories(CppTest1_word PRIVATE sortlib)

target_link_libraries(CppTest1_cmd PRIVATE sortlib)
target_link_libraries(CppTest1_word PRIVATE sortlib)
```

### add_executable

项目的根目录下拥有`main.cxx`和`word.cxx`两个入口文件，其中分别有一个`main()`函数，显然不应该将他们一起构建成一个可执行程序。

`add_executable`语句用于增加生成一个可执行程序，接收的首个参数是生成的程序名，后面可以跟随多个用于编译的源代码文件。

```cmake:line-numbers=11
add_executable(CppTest1_cmd main.cxx)
add_executable(CppTest1_word word.cxx)
```

例如CppTest_BasicSort中，我们分别为两个入口文件各自生成一个可执行程序。构建完成后，`CppTest1_cmd`和`CppTest1_word`会出现在`build`目录下，运行他们即运行`main.cxx`和`word.cxx`。

### add_library

公共的排序方法被芒果帆帆扔到了目录`sortlib`下，其中`sortlib.h`是头文件，而`sortlib.cxx`是源码文件。我们需要`main.cxx`和`word.cxx`都能使用这其中定义的排序函数，因此将其以库的形式独立实现，并作为静态库编译构建。

```cmake:line-numbers=4
file(GLOB_RECURSE Sortlib_SRC
    "${CMAKE_CURRENT_SOURCE_DIR}/sortlib/*.cxx"
    "${CMAKE_CURRENT_SOURCE_DIR}/sortlib/*.h"
)

add_library(sortlib STATIC ${Sortlib_SRC})
```

我们首先通过`file`来搜索指定目录下的所有名称符合要求的文件。`GLOB_RECURSE`用来帮助我们使用`${CMAKE_CURRENT_SOURCE_DIR}`变量确定当前位置地搜索文件，`Sortlib_SRC`是我们为搜索到的所有文件起的别名，后跟数个我们需要的文件即可。

搜索之后，使用`add_library`添加一个库，起名为`sortlib`，`STATIC`表示编译为静态链接库，`${Sortlib_SRC}`就是我们搜索到的那些文件了。这样我们就将所有符合条件的源文件编译为了名为`sortlib`的库，然后需要做的就是将库与可执行程序链接起来。

```cmake:line-numbers=14
target_include_directories(CppTest1_cmd PRIVATE sortlib)
target_include_directories(CppTest1_word PRIVATE sortlib)

target_link_libraries(CppTest1_cmd PRIVATE sortlib)
target_link_libraries(CppTest1_word PRIVATE sortlib)
```

`target_include_directories`用来指定我们的程序在哪里搜索头文件。我们的两个入口文件的头部都用`include "sortlib.h"`包含了sortlib中的方法，因此需要指定搜索头文件的路径`sortlib`。注意此处的`sortlib`是目录而不是上面`add_library`得到的库。

`target_link_libraries`用来将库链接到可执行程序，这里的`sortlib`就是我们的排序库了。由于在编译可执行程序时没有包含sortlib，我们需要在这里将sortlib链接到程序，否则程序运行时将无法使用我们的排序方法。

这里的`PRIVATE`表明后者仅在前者中可用，而其他依赖前者的项目不会自动继承后者。

然后，在你的VSCode的底部命令栏中选择「生成」或直接选择「运行」，或在CLion中的顶部导航栏选择「运行」，CMake将开始根据`CMakeLists.txt`构建这个项目。构建结果会放在`build`目录下，接下来你就可以运行项目了：

```bash
./build/CppTest1_cmd
./build/CppTest1_word
```

（或者由您的IDE自动运行）
