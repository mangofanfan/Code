# JetBrains IDEs
JetBrains 是一家专门制作各种语言的 IDE 的公司，他们为每一种或每一类语言制作专门的 IDE。你可以在[它们的官网](https://www.jetbrains.com.cn/ides/)上查看所有的 IDE。

过去，JetBrains 的 IDE 大部分需要收费使用，只有 Intellij IDEA 和 Pycharm 提供免费使用的 Community Edition 社区版本；现在，他们的大部分 IDE 均已经对非商业用途免费，剩余的少部分收费 IDE 也支持验证学生身份后免费获取。美中不足的是 AI 功能的免费额度过低了，得省着用……

## 下载
JetBrains 的所有 IDE 均可以使用其 JetBrains Toolbox 获取和管理。Toolbox 相当于是 JetBrains IDE 的启动器，同时兼具一定的项目管理能力。

![JetBrains Toolbox](/common/img/JetBrains-Toolbox.png)

正在运行的 IDE 会在图标右下角显示绿色圆点。你可以通过 Toolbox 来方便地安装、卸载、升降级 IDE，并通过 Toolbox 登录 JetBrains 账户来取代在每个 IDE 中分别登录。

从 IDE 版本 2025.3 开始，所有的 JetBrains IDE 都获得了全新的外观，好康~

![JetBrains New Theme](/common/img/JetBrains-IDEs-new-theme.png)

### Fleet
Fleet 是 JetBrains 推出的对标 VSCode 的 IDE 兼代码编辑器。Fleet 是 JetBrains 的一次大胆尝试，尽管目前看来尝试并不成功。

### Gateway
Gateway 是 JetBrains 的远程开发解决方案，用于连接到远程开发环境进行开发，同时启用本地 IDE 可以使用的各种工具和功能。

![JetBrains Gateway](/common/img/JetBrains-Gateway.png)

例如说，在 Windows 下，你需要通过 Gateway 连接到本地的 [WSL](/common/wsl)。Gateway 会在 WSL 中下载 JetBrains IDE 后端，然后启动后端，再在 Windows 中启动轻量级的 IDE 前端以供开发。VSCode 也是基于同样的原理连接到 WSL 的。

同样可以连接到其他的开发环境，例如 JetBrains CodeCanvas，以及通过 ssh 连接到普通的远程主机。

## 许可证
JetBrains IDEs 的价格曾经是天文数字。~~骗你的，现在也是。~~单个 IDE 的商业许可证的年付价格从 800 ~ 1600 不等，可在其[官网的定价部分](https://www.jetbrains.com.cn/store/?section=personal&billing=yearly)查看。包含所有 IDE 的 All Products Pack 更是达到 2500 年付的天价。AI 功能包含在内，但是额度仍然有限，如果你对 AI 的需求量很大的话可能需要额外购买 AI 额度。

### 永久可回退许可证
如果你购买了年度订阅或连续 12 个月的月度订阅，你将获得所订阅的 IDE 的永久可回退许可证，这允许你在订阅结束之后继续使用订阅开始时的 IDE 版本。如果你在订阅期间升级到了更新的 IDE 版本，那么你需要回退到订阅开始时的版本，因此称之为永久回退许可证。

详请参阅：<https://sales.jetbrains.com/hc/zh-cn/articles/207240845-%E4%BB%80%E4%B9%88%E6%98%AF%E6%B0%B8%E4%B9%85%E5%9B%9E%E9%80%80%E8%AE%B8%E5%8F%AF%E8%AF%81-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8>

### 学生和教师的免费许可证
请参见：<https://www.jetbrains.com.cn/academy/student-pack/>

JetBrains 向学生和学术人员提供免费的全套 IDE 许可证，这需要每年验证教育邮箱或学信网报告。在毕业之后，凭此可以享受 JetBrains 所有产品的六折优惠 ~~，仍然很贵~~。

该免费许可证被要求仅使用于教育用途。如果你受雇于公司，或者从事自由职业，理论上应当使用商业许可证。

该免费许可证不包含完整的 AI 服务。不过，你仍然可以试用 AI。

### 跨国家和地区
JetBrains 不会根据你的 IP 地址等因素检查你的实际位置与账户地区是否一致，因此你可以切换账户地区来享受不同国家和地区的服务。账户地区每月只能切换一次，并且会影响你的 JetBrains 产品购买和插件市场购买时的可用支付方式。

## 问题与解决方案
:::warning 注意
这里的问题可能并非每个人都会遇到，解决方案可能也并非官方方案，仅供参考。
:::

### 插件市场无法加载
所有 JetBrains IDE 的插件市场都是：<https://plugins.jetbrains.com/>

IDE 中可以下载安装市场中的插件，前提是 IDE 能够成功访问这个网站。一般来说，如果无法获取插件列表、无法搜索等，首先需要检查网络问题。

你可以在 IDE 的「设置-外观与行为-系统设置-HTTP代理」中调整 IDE 的代理设置，一般来说只需要勾选「自动检测代理设置」即可，无需设置「自动代理配置 URL」。

如果有需要，也可以选择「手动代理配置」，并在下方配置使用的 HTTP 代理。最后，记得检查连接以确保配置无误。

![jetbrains-ides-proxy](/common/img/JetBrains-IDE-HTTPProxySettings.png)

不要尝试将自动代理配置 URL 设置为 `https://plugins.jetbrains.com/` 。这是毫无意义的行为，没有人知道这是从哪里来的说法。

### 无法从 IDE 中下载插件
并且你可能会得到 `远程主机拒绝连接` / `Remote host has terminated the connection` 之类的错误信息。

首先，向上一个问题一样排查网络问题。如果仍然存在问题的话，则可能是 JetBrains 的插件下载网站的问题。不同于插件市场域名为 `plugin.jerbrains.com`，下载插件时的域名是 `downloads.marketplace.jetbrains.com`，而这个域名可能存在一些 DNS 解析上的问题。如果问题在此，为了最简单地解决此问题，你需要修改本机的 `Hosts.txt` 文件，在其中添加 `downloads.marketplace.jetbrains.com` 域名的 IP 地址，然后刷新 DNS 缓存。

下面以 Windows 为例尝试解决这个问题。首先，获取 `downloads.marketplace.jetbrains.com` 的真正可用的 IP 地址，需要你在域名解析工具中查询，比如 [站长工具](https://tool.chinaz.com/dns/downloads.marketplace.jetbrains.com) 。

从查询结果中选择一个看起来靠谱一些的 IP，比如 `18.155.68.15`，然后编辑你的系统 `Hosts.txt` 文件。建议使用工具，比如 PowerToys 中的 Hosts 编辑器，这是微软官方的工具箱软件，[我们也有针对其的教程](/common/others.md#powertoys)可供参考~

![PowerToys Hosts Editor](/common/img/PowerToys-Hosts-editor.png)

或者一些其他软件也提供编辑 Hosts 文件的功能，比如火绒安全……

总之，编辑完成之后，还需要刷新本机的 DNS 缓存记录。在 PowerShell 中运行 `ipconfig /flushdns`，大功告成。

如果无法下载插件的问题正是域名 `downloads.marketplace.jetbrains.com` 的 DNS 问题，那么问题应当已经解决。
