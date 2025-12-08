# JetBrains IDEs
JetBrains 是一家专门制作各种语言的 IDE 的公司，他们为每一种或每一类语言制作专门的 IDE。你可以在它们的官网上查看所有的 IDE。

过去，JetBrains 的 IDE 大部分需要收费使用，只有 Intellij IDEA 和 Pycharm 提供免费使用的 Community Edition 社区版本；现在，他们的大部分 IDE 均已经对非商业用途免费，剩余的少部分收费 IDE 也支持验证学生身份后免费获取。美中不足的是 AI 功能的免费额度过低了，得省着用……

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
