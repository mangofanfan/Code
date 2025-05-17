# 安装

:::tip 文档结构提醒
「安装」与「执行」章节同时出现在C与C++两种语言的教程中，如果你从C++教程中跳转到此，请记得回城哦！

[此处返回C++：语言特性](/cpp/features)
:::

所谓对编程语言的安装，即配置开发使用的语言环境。鉴于C与C++开发几乎依赖完全相同的环境，以下内容对C与C++通用。

## 语言特点导致的安装特殊性

相信你曾经有所耳闻，gcc是C语言编译器，那clang是什么？我记得微软的Visual C++又是什么？没错，他们都是用于编译C/C++语言的编译器，由不同的团队维护，各自依据不断更新的C/C++标准来实现根据代码生成可执行程序或库的需求。

那么我们该使用哪种编译器呢？实际上需要分类讨论，例如gcc/g++是更广泛的选择，而Visual C++则对Windows平台进行了专门优化，且内置在微软的Visual Studio中。

在本章节中，我们将提供最为广泛的gcc/g++在Windows与Linux上的安装教程。

## Windows

### Jetbrains CLion && Microsoft Visual Studio

在开始之前，首先，Jetbrains开发的C/C++ IDE CLion可以帮你自动配置好最常用的MinGW环境，而微软的Visual Studio可以帮你自动配置好他们自家的Visual C++环境。如果你使用这两种IDE，且需要立刻开始工作，则可以跳过本章的剩余内容。

### 安装MinGW

（准确上说，我们安装使用的是MinGW-64，是原MinGW的分支，是比MinGW更好的选择。本章中由于并无歧义，固以MinGW代指MinGW-64）

MinGW其实正是gcc/g++在Windows上的非官方移植。毕竟gcc是在Linux基础上诞生的所谓官方编译器，MinGW允许开发者在Windows上搭建并获得于Linux中一致的开发体验。在Windows上，CLion会自动下载MinGW。

手动在Windows上安装，需要我们下载合适的版本的预构建MinGW，然后解压，并添加环境变量。首先在MinGW的官方代码仓库下载预构建包，有以下两个选择：

* SourceForge（~~不是很好用~~）：<https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/>
* GitHub（镜像但更好用）：<https://github.com/niXman/mingw-builds-binaries/releases>

以GitHub为例，在Release列表中的第一个版本下，根据你的设备信息选择对应的版本。对于使用Intel CPU、运行Windows 10及更高版本系统的设备而言，可以选择下图中的`x86_64-15.1.0-release-win32-seh-ucrt-rt_v12-rev0.7z`。首部的`i686`与`x86_64`是CPU指令集，`msvcry`与`urct`相比在Win10及以上优先选`urct`即可。注意如果选择了更旧的指令集等，可能导致编译程序的性能降低，但一般不会影响使用效果。

![GitHub上的镜像仓库](<img/MinGW_GitHub_Release.png>)

将下载得到的压缩包解压在一个指定的目录中，然后将解压目录下的`bin`目录添加到系统环境变量，然后即可在你的Windows的终端环境中使用一系列命令。例如，在PowerShell中输入`gcc -v`，将得到如下结果：

```powershell
Using built-in specs.
COLLECT_GCC=D:\code\mingw64\mingw64\bin\gcc.exe
COLLECT_LTO_WRAPPER=D:/code/mingw64/mingw64/bin/../libexec/gcc/x86_64-w64-mingw32/15.1.0/lto-wrapper.exe
Target: x86_64-w64-mingw32
Configured with: ../../../src/gcc-15.1.0/configure --host=x86_64-w64-mingw32 --build=x86_64-w64-mingw32 --target=x86_64-w64-mingw32 --prefix=/mingw64 --with-sysroot=/c/buildroot/x86_64-1510-win32-seh-ucrt-rt_v12-rev0/mingw64 --enable-host-shared --disable-multilib --enable-languages=c,c++,fortran,lto --enable-libstdcxx-time=yes --enable-threads=win32 --enable-libstdcxx-threads=yes --enable-libgomp --enable-libatomic --enable-lto --enable-graphite --enable-checking=release --enable-mingw-wildcard --enable-fully-dynamic-string --enable-version-specific-runtime-libs --enable-libstdcxx-filesystem-ts=yes --disable-libssp --disable-libstdcxx-pch --disable-libstdcxx-debug --enable-bootstrap --disable-rpath --disable-win32-registry --disable-nls --disable-werror --disable-symvers --with-gnu-as --with-gnu-ld --with-arch=nocona --with-tune=core2 --with-libiconv --with-system-zlib --with-gmp=/c/buildroot/prerequisites/x86_64-w64-mingw32-static --with-mpfr=/c/buildroot/prerequisites/x86_64-w64-mingw32-static --with-mpc=/c/buildroot/prerequisites/x86_64-w64-mingw32-static --with-isl=/c/buildroot/prerequisites/x86_64-w64-mingw32-static --with-pkgversion='x86_64-win32-seh-rev0, Built by MinGW-Builds project' --with-bugurl=https://github.com/niXman/mingw-builds LD_FOR_TARGET=/c/buildroot/x86_64-1510-win32-seh-ucrt-rt_v12-rev0/mingw64/bin/ld.exe --with-boot-ldflags='-pipe -fno-ident -L/c/buildroot/x86_64-1510-win32-seh-ucrt-rt_v12-rev0/mingw64/opt/lib -L/c/buildroot/prerequisites/x86_64-zlib-static/lib -L/c/buildroot/prerequisites/x86_64-w64-mingw32-static/lib  -Wl,--disable-dynamicbase -static-libstdc++ -static-libgcc'
Thread model: win32
Supported LTO compression algorithms: zlib
gcc version 15.1.0 (x86_64-win32-seh-rev0, Built by MinGW-Builds project)
```

在Windows上安装的更详细教程可参见这里：<https://www.cnblogs.com/zijie1024/articles/18376803>

## Linux（WSL）

### 安装gcc/g++

以Ubuntu为例，依次运行如下命令，完成对必备工具的安装。

```bash
# 1.更新包列表: 更新包管理器的包列表，确保你能从最新的仓库中获取软件。
sudo apt update

# 2.安装 GCC 编译器 : GCC 是 GNU Compiler Collection 的简称，是最常用的C 和 C++ 编译器。
sudo apt install gcc

# 3.安装构建工具: build-essential 包提供了很多开发标准C和C++程序所需的工具。
# 包括 g++（GNU C++ 编译器）、make（用于自动化编译的工具）和一些其他必要的库和开发文件。
sudo apt install build-essential

# 3.安装调试工具
sudo apt install gdb
 
# 3.安装检测内存泄漏工具 valgrind
sudo apt install valgrind
```

如果一切顺利，然后运行`gcc -v`，将会获得如下输出：

```bash
Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=/usr/lib/gcc/x86_64-linux-gnu/11/lto-wrapper
OFFLOAD_TARGET_NAMES=nvptx-none:amdgcn-amdhsa
OFFLOAD_TARGET_DEFAULT=1
Target: x86_64-linux-gnu
Configured with: ../src/configure -v --with-pkgversion='Ubuntu 11.4.0-1ubuntu1~22.04' --with-bugurl=file:///usr/share/doc/gcc-11/README.Bugs --enable-languages=c,ada,c++,go,brig,d,fortran,objc,obj-c++,m2 --prefix=/usr --with-gcc-major-version-only --program-suffix=-11 --program-prefix=x86_64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/lib --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-bootstrap --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-gnu-unique-object --disable-vtable-verify --enable-plugin --enable-default-pie --with-system-zlib --enable-libphobos-checking=release --with-target-system-zlib=auto --enable-objc-gc=auto --enable-multiarch --disable-werror --enable-cet --with-arch-32=i686 --with-abi=m64 --with-multilib-list=m32,m64,mx32 --enable-multilib --with-tune=generic --enable-offload-targets=nvptx-none=/build/gcc-11-XeT9lY/gcc-11-11.4.0/debian/tmp-nvptx/usr,amdgcn-amdhsa=/build/gcc-11-XeT9lY/gcc-11-11.4.0/debian/tmp-gcn/usr --without-cuda-driver --enable-checking=release --build=x86_64-linux-gnu --host=x86_64-linux-gnu --target=x86_64-linux-gnu --with-build-config=bootstrap-lto-lean --enable-link-serialization=2
Thread model: posix
Supported LTO compression algorithms: zlib zstd
gcc version 11.4.0 (Ubuntu 11.4.0-1ubuntu1~22.04)
```

关于在Linux（尤其是运行Ubuntu的虚拟机）上安装C/C++环境的详细资料可参见：<https://zhuanlan.zhihu.com/p/687454451>

## IDE配置

在VSCode的拓展市场中搜索C/C++等关键词，首先安装C/C++ Extension Pack，其中包含了让VSCode支持C/C++的基本拓展。

![VSCode拓展市场中的C/C++拓展](/common/img/VSCode%20CCPP%20Extension%20Pack.png)

这会允许你进行一些简单的C与C++开发，但并不够。你可以继续在拓展市场中探索其他拓展，例如C/C++ Advanced Lint允许你使用更好的代码静态检查，clangd可以为VSCode提供更好的C/C++代码提示与补全，但是都需要外部工具的支持。总之，如果设备上的C/C++环境正确安装，你应当能够通过工作区右上角的运行/调试选项来执行C/C++代码了。

特别一提，在Windows上使用VSCode连接到WSL，需要的只是在WSL中使用上文为Linux安装的方法配置环境，然后在Windows的VSCode中安装拓展。芒果帆帆推荐使用WSL+gcc作为开发环境。

那么，关于IDE的更多资料可以[参见这里](/common/ide)，关于WSL的更多资料可以[参见这里](/common/wsl)。
