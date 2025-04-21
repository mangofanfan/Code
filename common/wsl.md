# Windows Subsystem for Linux

## 什么是WSL

**运行Linux的Windows子系统**，即WSL，是微软为Windows 10/11提供的在Windows中无缝运行Linux的方便的工具。WSL目前已经拥有第二代（WSL2），其底层基于微软的Hyper-V虚拟机技术，能够实现五秒内启动，并且充分利用宿主机的硬件性能。

考虑到Code Space的访客们大多使用Windows作为主力开发机器，并且应该大多是10/11，因此推荐各位安装WSL，原因见下：

* **环境独立** - WSL本质是虚拟机，你可以在电脑中安装不止一台Linux虚拟机，需要哪台用哪台，搞坏了就抢救，救不回来就删，不会污染其他Linux乃至Windows宿主机的环境；
* **互相操作** - 从Linux虚拟机的终端调用Windows程序易如反掌，例如`cd`到任意目录然后使用`code .`就能使用VSCode打开该目录作为项目。也可以从Windows中启动已经安装的Linux程序，包括命令行程序和GUI程序（例如Linux版的Blender）；
* **VSCode支持** - 微软为VSCode内置了对WSL的支持，能够像操作本地文件一样操作WSL中的文件 ~~（当然这是remote ssh的功劳）~~ 。
* **系统级别交互** - 直接使用Windows资源管理器打开Linux中的所有文件，同时Windows中的所有盘符也会被挂载在Linux的目录中。

### 什么是Linux

Linux是经常被与Windows、macOS并列提起的操作系统，其完全开源，因此尤为受到社区的喜爱。由于Linux完全开源的自由性，Linux拥有众多发行版，例如最广为人知的Ubuntu、Deepin、CentOS，还有太多数不清的各有特色的版本。

相比于Windows，Linux是自由、轻量化且高度可定制化的，同时具备了较强的稳定性，因此常被用作长期运行的服务器。既然项目最终需要在Linux中部署，那么开发阶段是否就需要针对Linux特殊照顾呢，于是我们就会接触到在Linux中配置开发环境，

常规思路是配置一台电脑独立运行Linux，但是这并不常见。首先问题在于Linux并不出厂随带图形化界面，你只能在类似Windows和macOS中的命令行的黑框框里输入命令，也正因此Linux更常见于服务器中而非个人电脑。考虑到Linux的轻量化与自由性，更常见的做法是在一台服务器上虚拟化出众多Linux系统，或者在个人电脑上以虚拟机的方式运行Linux。

例如，微软提供的WSL就是基于Hyper-V虚拟机运行的Linux。值得一提的是，在Windows上开启虚拟化之后，电脑上的Windows实际上也是在虚拟机中运行，Linux和Windows在理论上是平权的。

### 关于Linux

任何向你无脑推销Linux的好的人都不怀好意。Linux不适合作为个人主力机器的操作系统，哪怕用macOS都比用Linux合适。

在Linux上安装程序确实似乎是一行命令的事，但是安装五花八门的程序时很可能遭遇意外情况，例如依赖地狱，对于我们这些新手来说只有等死的份。成熟的Linux玩家会告诉你，最好让一台Linux只干一件事，不同的事扔给不同的Linux干，**把Linux连同上面安装的服务当做一整个程序，多个程序就是多个Linux，坏了一个不影响其他的**。

你瞧，这不就是在Windows中的程序吗。

我们安装的WSL作为开发环境，仅在我们通过Windows的终端等地输入`wsl`命令时，或用VSCode打开在WSL中的项目时被启动，在退出后几分钟停止，可以创建不止一个WSL，随时可以删除任何一个WSL。

Linux也绝非比Windows方便之流。有的Linux发行版可以安装图形化桌面，看起来可能比Windows好看，但很多Windows、macOS的大众化应用并没有Linux版本。

所以就让Linux躺在WSL里面，成为我们的教学工具吧。

## 安装

:::tip 安装WSL，可参见微软官方的文档
<https://learn.microsoft.com/zh-cn/windows/wsl/install>

~~不愧是写文档比做产品认真的公司呢~~
:::

### 安装Windows Terminal（推荐）

在开始之前，首先建议安装Windows Terminal（Windows终端）。

![Microsoft Store中的Windows Terminal](/common/img/Windows%20Terminal%20in%20ms-store.png)

Windows Terminal为Windows提供了一个全新的多标签页终端应用程序，并且拥有对WSL的支持，可以快速打开WSL的Linux终端。

![Windows Terminal](/common/img/Windows%20Terminal.png)

### 安装WSL

假设您此前没有安装过WSL，打开PowerShell并输入以下命令来开始安装：

```powershell
wsl --install
```

:::tip 在WSL下运行`wsl`命令
将`wsl`替换成`wsl.exe`即可在WSL中的Linux终端下运行上面的命令，例如`wsl.exe --install`，可以方便在Linux终端环境中操作WSL。
:::

默认，你的电脑上会安装WSL2，发行版是Ubuntu，对我们来说哪个发型版本其实问题不大，加上以后可以安装别的发行版本。

可以使用命令查看可供安装的Linux发行版：

```powershell
(base) PS C:\Users\mango> wsl -l -o
以下是可安装的有效分发的列表。
使用 'wsl.exe --install <...>' 安装。

NAME                            FRIENDLY NAME
Ubuntu                          Ubuntu
Debian                          Debian GNU/Linux
kali-linux                      Kali Linux Rolling
Ubuntu-18.04                    Ubuntu 18.04 LTS
Ubuntu-20.04                    Ubuntu 20.04 LTS
Ubuntu-22.04                    Ubuntu 22.04 LTS
Ubuntu-24.04                    Ubuntu 24.04 LTS
OracleLinux_7_9                 Oracle Linux 7.9
OracleLinux_8_7                 Oracle Linux 8.7
OracleLinux_9_1                 Oracle Linux 9.1
openSUSE-Leap-15.6              openSUSE Leap 15.6
SUSE-Linux-Enterprise-15-SP5    SUSE Linux Enterprise 15 SP5
SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6
openSUSE-Tumbleweed             openSUSE Tumbleweed
```

列表可能不完整，你可以在Microsoft Store中搜索具体的发行版名称，并从Microsoft Store将其下载安装，比如Deepin。

![Microsoft Store上的Deepin](/common/img/Deepin%20ms-store.png)

以及Ubuntu的许多LTS版本：

![Microsoft Store上的Ubuntu](/common/img/Ubuntu%20ms-store.png)

也可以通过命令安装指定的全新Linux发行版，例如使用如下命令安装Debian发行版，效果与在Microsoft Store中安装完全一致：

```powershell
wsl --install -d Debian
```

记得在完成每一个WSL Linux发行版的安装后，设置其root管理员账户和密码。该账户和密码与你的Windows用户无关。

### 使用VSCode打开WSL上的项目

现在，你可以在Windows的文件资源管理器中打开刚刚安装的WSL的文件系统。

![文件资源管理器中的Linux文件系统](<img/Explore WSL.png>)

Linux系统中不存在盘符的概念，Linux视一切为文件，一切文件都在根目录下的或深或浅的目录中，并且绝大多数目录，你都没有权限从Windows的文件资源管理器中编辑。

问题不大。我们拥有权限的地方位于我们在Linux上的用户目录`/home/<username>`中，这个目录也被简写成`~/`，你以后会经常在Linux终端中见到。打开你的VSCode，点击左下角的「打开远程窗口」，从顶部弹出菜单中选择「WSL」，VSCode会自动开始安装WSL拓展。然后，你就可以使用VSCode连接到你安装的Linux发行版中，VSCode可以打开你的用户目录下的任意目录或文件。

比如呢，芒果帆帆把此时此刻正在使用的VSCode截个图——

![VSCode~](<img/VSCode WSL.png>)

VSCode可以在WSL中自动安装VSCode拓展，让你可以像在本地编辑项目一样在WSL中编辑与调试项目，更重要的是你可以随心所欲地配置各种环境，而无需担心搞坏整台Windows——说句难听的，WSL搞坏了就坏了呗，重新安装一个不过是`wsl --install`的事。
  
:::info 如果WSL无法访问网络
虚拟机的网络配置是一门复杂的学问。对于WSL2来说，所有虚拟出来的Linux子系统都通过NAT方式桥接网络，因此无法从外界直接与Linux子系统通信。

同时，如果Windows宿主机启用了代理，则WSL需要特别配置，通常是需要关闭WSL、稍等8秒再重新使用。你也可以尝试切换代理模式来测试。

Windows的代理状态切换时，WSL会提醒你重启以应用网络更改。你可以关闭所有Linux终端和在Linux中打开的VSCode项目，通过`wsl --shutdown`命令关闭WSL，输入命令后等候8秒左右，然后重新打开你的终端或VSCode即可。

如果你的VSCode无法列出安装在WSL上的拓展，或无法在WSL上安装拓展，则需要考虑是否出现了网络问题。
:::

### 管理WSL

使用命令`wsl -l`列出所有安装的WSL发行版，使用`wsl -l -v`列出的同时给出每个版本的WSL版本（1或2，现在的Windows默认安装2）与运行状态。在`wsl -l -v`给出的列表中，行首带有`*`的发行版就是默认发行版。

你可以非常简单地不进入Linux终端地在Linux发行版中执行命令：

```powershell
wsl -d <...> [command]
```

其中`<...>`是发行版名称，例如`Ubuntu`；`[command]`是Linux命令，例如`ls`可以列出当前目录下的文件，`pwd`可以查看当前工作的位置。

如果不提供`-d <...>`，则会在默认Linux发行版中执行命令。

如果不给出`[command]`，则当前输入命令的PowerShell终端会变成Linux终端，你可以在其中执行任何Linux命令。在执行完毕之后，输入`exit`可以退出Linux终端，回到PowerShell终端。

你可以使用以下命令来设置默认Linux发行版。

```powershell
wsl -s <...>
```

或通过以下命令卸载指定的Linux发行版。

```powershell
wsl -uninstall <...>
```

实在记不得的话，通过`wsl --help`可以查看`wsl`的帮助。由于我们已经介绍的原因，使用`wsl help`会得到Linux发行版的帮助，而非WSL的帮助。
