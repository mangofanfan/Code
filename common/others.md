# 杂项

## Windows Terminal
Windows Terminal 是一个 Windows 官方的、支持多标签页的终端软件。

![Microsoft Store中的Windows Terminal](/common/img/Windows%20Terminal%20in%20ms-store.png)

Windows Terminal为Windows提供了一个全新的多标签页终端应用程序，并且拥有对WSL的支持，可以快速打开WSL的Linux终端。

![Windows Terminal](/common/img/Windows%20Terminal.png)

比较方便，建议使用，用过都说好~

## Windows 上的终端编辑器 Edit
微软也知道记事本已经变得越来越臃肿，甚至都要支持 Markdown，想想其实挺诡异的——毕竟记事本当个记事本就好了，整这些干什么呢？

于是，在最新的系统中，Windows 添加了一个基于终端的文本编辑器 Edit。只需要在 PowerShell 中输入 `edit` 即可。

![edit](/common/img/edit.png)

或者使用 `edit filename.txt` 打开 `filename.txt`，[其实和 vim 差不多](/common/vim)，对吧~

edit 的标题栏文本其实是可以直接用鼠标点击的，也可以直接用鼠标点击移动光标位置，也就是一个事实上的记事本，并且还更快。

哎微软。

## PowerToys
PowerToys 是微软官方的 Windows 实用工具集合。这些工具都非常有用，其中一些尤其有用，没用的也可以关闭从而不影响正常使用。

多说无益，可以前往微软的文档查看 PowerToys 的功能：<https://learn.microsoft.com/zh-cn/windows/powertoys/>

如需安装：
* 从 [GitHub Release](https://learn.microsoft.com/zh-cn/windows/powertoys/) 中获取最新版本的安装程序；
* 从 Microsoft Store 中搜索并下载；
* 使用 `winget install --id Microsoft.PowerToys --source winget` 下载。

## PowerShell
PowerShell 是 Windows 的新一代命令行，它的上一代是 CMD（命令提示符）。你可以在 Microsoft Store 中获取最新版本的 Windows PowerShell。

最新版本的 PowerShell 是 7.x 版本，不只局限于 Windows，而是可以在 Windows、Linux 和 macOS 上跨平台的现代化版本；而 Windows 预装的 PowerShell （或者没有预装）则是 Windows PowerShell，版本为 5.1 左右。

PowerShell 拥有自己的一套语法和命令，但是高度兼容 Linux Bash 命令。PowerShell 也可以用于编写脚本，脚本格式后缀为 `.ps1`。

:::tip 猜猜看为什么不是 `.ps`？
是呀是呀，为什么呢？

~~应该不会是因为有一款软件叫 Adobe Photoshop 吧……~~
:::

### 以管理员身份运行
在 Windows Terminal 中可以很方便地多开终端，表扬微软。

![Windows Terminal 打开新标签（以管理员身份）](/common/img/Windows-Terminal-OpenNewTab-admin.png)

按住 `Ctrl` 并单击 PowerShell，就可以以管理员身份打开新的 PowerShell 终端窗口了。一般来说，这时系统会请求一次 UAC。

管理员身份打开的终端会在新的 Windows Terminal 窗口中打开，这个窗口的左上角有一个管理员身份的标识，用作区分。

![Windows Terminal 管理员身份](/common/img/Windows-Terminal-admin.png)

### 允许运行脚本
PowerShell **默认拒绝运行脚本**，因为脚本中可能包含有害命令。但是很多时候我们都需要运行脚本呀，比如说启用 Python venv 工具创建的虚拟环境的时候？

可以在管理员身份运行的 PowerShell 中输入 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` 来更改脚本执行策略。该命令会将脚本执行策略更改为：运行远程脚本需要签名，运行本地脚本无需签名。这样就可以愉快地运行脚本啦。

使用 `Get-ExecutionPolicy` 可以获取当前的 PowerShell 脚本执行策略。默认为 `Restricted`，即拒绝运行所有脚本。

无论脚本运行策略如何，在 PowerShell 终端中进行交互都是可以进行的。

### 设置智能补全
PowerShell 应当已经自带了 PSReadLine 模块，这个模块可以提供体验更加的智能补全。使用 `Get-Module PSReadLine` 获取此模块，如果能打印出版本信息则已安装。

如果没有安装，则需要使用 `Install-Module PSReadLine` 安装此模块。

想要启用这个模块，你需要编辑 PowerShell 的配置文件。输入 `$profile` 可以获取当前的 PowerShell 配置文件。（`$profile` 和 `$PROFILE` 是等价的~）

```powershell
# 按下 Tab 时自动补全
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

# 使用键盘⬆️和⬇️获取不同的补全
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward

# 自动补全
Import-Module PSReadLine
Set-PSReadLineOption -PredictionSource History
```

使用你高兴的方法编辑这个配置文件，例如 `edit $profile`，然后将上面的内容复制进去，保存后退出。

打开一个新的 PowerShell 终端，现在你可以在其中得到基本的自动补全了：使用 `Tab` 查询补全 Cmdlet，方向键选择：

![PowerShell Auto Completion](/common/img/PowerShell-auto-completion.png)

以及，使用上下方向键输入历史命令，所有终端都具备的功能。

PowerShell 会用灰色显示历史命令中与当前输入的部分匹配的输入的剩余部分，此时可以使用键盘上的右方向键向右侧逐词补全。有些反直觉的是，如果此时使用 `Tab`，有可能补全的内容与灰色内容不相同，这……~~没救了不是~~

### 基本命令与 Cmdlet
Cmdlet 是什么？PowerShell 中设计了一系列由 `动词-名词` 构成的命令，例如 `Get-Help` `Get-Process` 等，这些命令不像 Linux Bash 中的 `ls` `cd` 等是可执行文件的链接，只是命令，被称作 Cmdlet。

记这些命令对于我们来说难度太大了，好在微软是个好人，帮我们降低学习门槛——

以下命令在 Linux Bash 和 PowerShell 中效果相同或相似。实际上，是微软将这些 Bash 命令链接为了 PowerShell 命令的别名。
* `cd` - 前往指定目录；
* `ls` - 查看当前目录下文件；
* `echo` - 在终端输出内容；

下面这些命令就是打开对应的可执行文件了，例如 `code` 是 VSCode：
* `edit` - 使用 Edit 工具打开文件，可参见上文的 Edit；
* `code` - 使用 VSCode 打开文件，[自然需要先安装 VSCode](/common/ide#visual-studio-code)；

## Everything
Everything 是一个闭源免费 Windows 平台的全盘搜索工具。

Windows 自带搜索，但是它太令人恼火了，构建索引耗时长，搜索体验还差，因此有了 Everything。Everything 会在运行时索引 Windows 中所有磁盘（NTFS卷）的所有目录和文件，并且这几乎是在瞬间完成的，占用低且能够实时更新。

Everything 还有更多功能用途等待探索，例如其完全支持 FTP，并且允许像搜索本地文件一样搜索 FTP 目录下的文件。

你需要从其官网获取该软件：<https://www.voidtools.com/zh-cn/>

:::info 已知问题
回收站中的内容不能被完全索引，这是 Windows 的设计使然。

Everything 需要管理员权限才能所以你 C 盘内的所有内容，这是 Windows 的设计使然。

你可以将 Everything 配置为开机启动。
:::

## Linux 上的第三方 shell Fish
Fish ~~（鱼）~~ （Friendly Interactive Shell，交互友好型终端）是一个可在 Linux 和 macOS 上使用的第三方 shell。

网站：<https://fishshell.com/>

Shell 与终端并不相同。Shell 是与操作系统内核交互的，从终端接收用户输入，将系统的处理结果返还给终端输出给用户。Linux 和 macOS 都是基于 Unix 的操作系统，Unix 拥有默认 shell Bash，而 macOS 还提供了不少其他的 shell 作为可选项。

但是 Bash 本身并不方便，它缺少智能补全、语法高亮，交互也不够友好，所以才会出现众多第三方的 shell，比如本段落的主角 fish。fish 是那种可以让人眼前一亮的 shell，拥有比 PowerShell 还人性化的交互逻辑，除了它并不完全兼容 Bash 语法之外几乎没有缺点了。~~不过，这也就是它最大的缺点吧。~~

### 安装
fish 需要从软件包源下载，在不同的 Linux 发行版中命令不同。

使用 apt 包管理器：`sudo apt install fish -y`

安装完成后，在当前终端中输入 `fish` 即可进入 fish shell，然后可以使用 `exit` 退出。基本的 Linux 命令操作没有改变，如 `ls` `cd` 等命令照样用。使用 `help` 可以获取 fish 的帮助，是一个完整的网页。

### 设为默认 shell
默认的 Linux shell 为 Bash，其可执行文件位于目录 `/usr/bin/bash`。fish shell 的可执行文件为 `/usr/bin/fish`，你可以通过下面的命令将默认 shell 切换为 fish。

```bash
chsh -s /usr/bin/fish
```

或者切换回 Bash。

```bash
chsh -s /usr/bin/bash
```

## 全平台终端美化 starship
网站：<https://starship.rs/zh-cn/guide/>

starship 是一个终端美化工具。

终端美化的意义远远不止在于好看，而是其能够在美观的同时提供更高效的使用体验。starship 支持显示当前终端所在目录下的项目的基本信息，包括其 Git 分支信息、Python 项目信息、nodejs 版本信息、CMake 项目信息等等。

![starship](/common/img/starship-wsl.png)

### 安装
以下 Linux Bash 命令可以在任何 Linux 发行版上安装 starship：`curl -sS https://starship.rs/install.sh | sh`

以下 PowerShell 命令可以在 Windows 上安装 starship：`winget install --id Starship.Starship`

然后还需要在你的终端中配置默认启用 starship。对于 Bash，在 `~/.bashrc` 的最后添加一行以下内容，保存并退出。

```bash
eval "$(starship init bash)"
```

对于 PowerShell，可以直接使用 `edit $profile` 或 `code $profile` 或 `notepad $profile` 来打开它，然后在末尾增加下面一行，保存并退出。

```powershell
Invoke-Expression (&starship init powershell)
```

更改后的配置会在新的终端中生效，现在可以把旧的终端都关掉了~

### 主题（预设）
starship 拥有多种主题，可以在其文档网站中查看。上面的截图是 [Jetpack 预设](https://starship.rs/zh-CN/presets/jetpack)，简单好看 =w。

在 Linux 中可以使用 `starship preset jetpack -o ~/.config/starship.toml` 来使用预设。在 Windows 中由于路径问题，可以在新打开的终端中使用 `starship preset jetpack -o .config/starship.toml`。不过 PowerShell 并不支持该预设需要的右提示词，因此该预设在 PowerShell 中使用体验不佳，建议换一种~

对于其他的预设同理。
