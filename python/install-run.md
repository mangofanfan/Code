# 安装与执行

<Constructing></Constructing>

Python 是一门解释型语言，其源码文件无需编译过程即可直接由解释器逐行运行。执行 Python 代码的程序就是 Python 解释器，Python 官方使用 C 语言实现的 CPython 是目前的官方解释器，此外还有非官方的 PyPy、Jython 和 rustPython 等。

## 版本
Python 是在 GitHub 上的开源项目。与 C 语言不同，Python 官方提供使用 C 实现的解释器 CPython，因此 Python 每年发布新版本时会直接提供 CPython 的新版本，而非 C 语言出台新标准后等待 gcc、clang 等编译器跟进。

目前，Python 的最新版本为 2025 年的 Python 3.14，该版本也被昵称为 **πthon**。

## 安装 CPython

如果你的需求只是安装 Python，那么你就应当安装 CPython，而非其他各种稀奇古怪的 Python 解释器。

### 通用：使用 uv
中文文档：<https://uv.oaix.tech/>

uv 是使用 Rust 开发的新一代 Python 环境管理工具，也可以用于管理设备中安装的 Python，此工具可以取代 virtualenv、pip、poetry、pipx 等，集 Python 版本管理、pip 包管理、虚拟环境管理、依赖管理等于一体。

uv 支持 Windows、Linux 和 macOS。你可以通过终端安装 uv。

:::code-group

```powershell [Windows]
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

```bash [macOS / Linux]
curl -LsSf https://astral.sh/uv/install.sh | sh
```

:::

这行命令会开始下载并安装 uv。完成之后，你就可以这样查看支持的 Python 版本并安装一个了。

```bash
> uv python list
cpython-3.14.0a6-linux-x86_64-gnu                 <download available>
cpython-3.14.0a6+freethreaded-linux-x86_64-gnu    <download available>
cpython-3.13.3-linux-x86_64-gnu                   .local/share/uv/python/cpython-3.13.3-linux-x86_64-gnu/bin/python3.13
cpython-3.13.3+freethreaded-linux-x86_64-gnu      <download available>
cpython-3.12.10-linux-x86_64-gnu                  <download available>
...
```

对于已经存在的版本，会显示其可执行文件的路径。

使用 `python3.xx` 来执行 CPython 的对应版本，也可以完整复制上面列表中存在的版本名称来指定更精细的版本。uv 仅支持 3.8 及以上的版本，已经足够了。比如，安装 Python 3.12：

```bash
uv python install python3.12
```

与常规的使用安装程序安装 Python 不同，uv 直接下载针对平台编译完毕的 CPython 二进制文件。

### 从官网下载
前往Python官网：<https://www.python.org/downloads/windows/>，获取任意版本、任意平台的安装程序并进行安装。

安装程序将完成一切过程，如果你有需要，也可以帮助配置环境变量。

### Linux

许多 Linux 发行版已经附带了 Python 环境作为其功能实现的一部分。你可以首先在Linux终端中运行 `python`、`python3` 等命令来检查是否可用。

如果不可用，则需要另外进行安装。如对于 Ubuntu 发行版，可以使用如下命令：

```bash
sudo apt update
sudo apt install python3 python3-pip
```

然后，`python3` 与 `pip3` 命令应当可用，表明安装成功。

如果你有需要，也可以考虑从源码编译安装，这里不做详细介绍。更多在Linux下安装Python的信息可参见<https://zhuanlan.zhihu.com/p/24469848200>。

## 虚拟环境

不同于其他的编译型语言，解释型语言与「环境」的交互更加强烈。在Python中，你可以通过pip包管理系统安装其他人做好的软件包，从而使用其他人实现的功能。

比如说安装`numpy`做数据处理，如果你直接使用`pip install numpy`，则`numpy`会被安装在全局环境中。长此以往，全局环境将变得臃肿，因此我们需要特事特办，使用虚拟环境来隔离臃肿，也可以减少不同库之间可能的潜在冲突。

### uv

在刚才，安装完成 uv 并安装一个指定的 Python 版本之后，你可以创建一个空的项目目录，在其中运行 uv 的初始化命令来创建模板项目。

```bash
uv init
```

也可以带上项目名称参数，uv 会在该名称命名的子目录下创建项目。

```bash
uv init MyProject
# 创建的模板项目位于 /MyProject 路径下
```

uv 会在模板项目中创建一些东西，具体来说有：

```text
.
├── .venv
│    ├── bin
│    ├── lib
│    └── pyvenv.cfg
├── .python-version
├── README.md
├── main.py
├── pyproject.toml
└── uv.lock
```

其中：
* `.venv` 是虚拟环境目录，其中就是当前项目使用的 Python 虚拟环境解释器。
* `.python-version` 是当前项目使用的 Python 版本，虚拟环境依据该文件中指定的版本创建，你可以直接修改。
* `README.md` 是项目的自述文件。
* `main.py` 是项目入口。
* `pyproject.toml` 是 uv 的项目元数据配置文件，其中包含项目的名称、版本、作者和依赖等。
* `uv.lock` 是项目依赖锁文件。

在 uv 管理的环境中安装新的包时，需要使用 `uv add [package]` 而不是 `pip install [package]`，这样才能让 uv 管理你的项目的依赖和虚拟环境。

在 uv 管理的环境中，使用 `uv run main.py` 运行 `main.py`，也可以以此类推运行其他名称的 Python 源文件。

### venv
这是官方放在标准库中的虚拟环境实现。在终端中定位到你的目标位置，然后使用`python -m venv myEnvironmentName`，即可建立一个空白的虚拟环境。

在目录下会新增`.venv`目录，里面是启动此虚拟环境的脚本，与虚拟环境中安装的包，和 Python 可执行程序的「副本」。

### Anaconda
Anaconda 是一个定制的 Python 发行版本，用于计算科学，致力于简化软件包管理和部署，并提供许多用于数据科学等领域的软件包。不过，你也可以把它当做是你的系统 Python。

与其他的虚拟环境管理模式不同，Anaconda 将所有的虚拟环境都保存在系统盘中，连带各虚拟环境中安装的软件包。

你可以从 **[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)** 获取 Anaconda 的安装程序，注意可能稍微有一点大（300MB ~ 1GB），你可能需要关注以年份命名的 Anaconda 版本，因为它们比使用版本号命名的 Anaconda 更新。
