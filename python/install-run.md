# 安装与执行

Python是一门解释型语言，其源码文件无需编译过程即可直接由解释器逐行运行。执行Python代码的程序就是Python解释器，Python官方使用C语言实现的CPython是目前的官方解释器，此外还有非官方的PyPy、Jython和rustPython等。

## 安装Python环境

提到安装Python环境，我们默认是在您的设备上安装CPython解释器。

### Windows

在Microsoft Store中可以搜索到Python，并且简单地安装和使用。

此外也可以前往Python官网：<https://www.python.org/downloads/windows/>，获取指定版本的安装包并进行安装。

安装程序将完成一切过程，包括帮你添加好环境变量，允许你在任何路径下的终端直接`python`来使用Python。

### Linux

许多Linux发行版已经附带了Python环境作为其功能实现的一部分。你可以首先在Linux终端中运行`python`、`python3`等命令来检查是否可用。

如果不可用，则需要另外进行安装。如对于Ubuntu发行版，可以使用如下命令：

```bash
sudo apt update
sudo apt install python3 python3-pip
```

然后，`python3`与`pip3`命令应当可用，表明安装成功。

对于有更高需求的Linux用户，可以考虑从源码编译安装，这里不做详细介绍。更多在Linux下安装Python的信息可参见<https://zhuanlan.zhihu.com/p/24469848200>。

## 虚拟环境

不同于其他的编译型语言，解释型语言与「环境」的交互更加强烈。在Python中，你可以通过pip包管理系统安装其他人做好的软件包，从而使用其他人实现的功能。

比如说安装`numpy`做数据处理，如果你直接使用`pip install numpy`，则`numpy`会被安装在全局环境中。长此以往，全局环境将变得臃肿，因此我们需要特事特办，使用虚拟环境来隔离臃肿，也可以减少不同库之间可能的潜在冲突。

### IDE的虚拟环境管理功能

例如JetBrains的Python IDE Pycharm，支持非常方便地在新建项目时快速建立一个新的虚拟环境，基本可以无脑傻瓜式操作。VSCode的虚拟环境管理藏得深了点，但是也是有的。

此外，还有一些用于管理环境的工具。

### venv

这是官方放在标准库中的虚拟环境实现。在终端中定位到你的目标位置，然后使用`python -m venv myEnvironmentName`，即可建立一个空白的虚拟环境。

在目录下会新增`.venv`目录，里面是启动此虚拟环境的脚本，与虚拟环境中安装的包，和Python可执行程序的「副本」。这不是完整的Python解释器，因此不要指望在系统中卸载Python之后这些虚拟环境还能使用。

### uv

uv是新一代的Python环境管理工具，支持Python3.8及以上的版本，使用Rust编写 ~~，真的是Rust~~……

相比于官方与其他第三方的选择，uv解决了许多痛点，例如包之间的依赖管理、生产环境与开发环境的分离、安装之前的冲突检查等。你可以前往这篇文章了解详情：<https://zhuanlan.zhihu.com/p/1897568987136640818>

如果你使用Linux的话，不妨尝试一下完全使用uv管理所有的Python的玩意，没错uv甚至可以用来下载Python……

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

这行命令会开始下载并安装uv。完成之后，你就可以这样查看支持的Python版本并安装一个了。

```bash
> uv python list
cpython-3.14.0a6-linux-x86_64-gnu                 <download available>
cpython-3.14.0a6+freethreaded-linux-x86_64-gnu    <download available>
cpython-3.13.3-linux-x86_64-gnu                   .local/share/uv/python/cpython-3.13.3-linux-x86_64-gnu/bin/python3.13
cpython-3.13.3+freethreaded-linux-x86_64-gnu      <download available>
cpython-3.12.10-linux-x86_64-gnu                  <download available>
cpython-3.11.12-linux-x86_64-gnu                  <download available>
cpython-3.10.17-linux-x86_64-gnu                  <download available>
cpython-3.10.12-linux-x86_64-gnu                  /usr/bin/python3.10
cpython-3.10.12-linux-x86_64-gnu                  /usr/bin/python3 -> python3.10
cpython-3.9.22-linux-x86_64-gnu                   <download available>
cpython-3.8.20-linux-x86_64-gnu                   <download available>
pypy-3.11.11-linux-x86_64-gnu                     <download available>
pypy-3.10.16-linux-x86_64-gnu                     <download available>
pypy-3.9.19-linux-x86_64-gnu                      <download available>
pypy-3.8.16-linux-x86_64-gnu                      <download available>
graalpy-3.11.0-linux-x86_64-gnu                   <download available>
graalpy-3.10.0-linux-x86_64-gnu                   <download available>
graalpy-3.8.5-linux-x86_64-gnu                    <download available>
```

```bash
uv python install python3.12  # 也可以完整复制上面显示的名字给他
```

然后就可以定位到指定目录并初始化空项目了，虚拟环境会作为空项目框架的一部分被建立：

```bash
uv init
```

在uv管理的环境中安装新的包时，需要使用`uv add [package]`而不是`pip install [package]`，以使用uv提供的强大的依赖管理。
