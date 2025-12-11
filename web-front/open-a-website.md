# 打开一个网站

## 从域名找到网站 - DNS解析
用户访问网站的流程开始自获取将要访问的网址。

在浏览器中，一般来说，我们访问的网址多少会呈现这种结构：

```text
https://www.hello.com
https://www.hello.com/
https://www.hello.com/abc/def/ghi
https://www.hello.com/abc/opq.html
https://www.hello.com/aaaaaaa/
https://www.hello.com/index.php
https://www.hello.com/index.php?title=hello&random=1
```

其中，`https://`是协议头，`www.hello.com`是域名，`/abc/...`或者`index.php`是相对域名根目录的访问路径，`?title=hello&...`是附带的参数。

访问网站的第一步是根据域名找到网站服务器的地址。域名例如`www.hello.com`本身只是一个名字，我们需要的是地址，这一过程就是 DNS 查询。

在域名`www.hello.com`中，`com`是其顶级域名，`hello.com`是一级域名，`www.hello.com`是二级域名。DNS 查询首先从根域名服务器查起，获取顶级域名`com`的 DNS 服务器地址，然后从`com` 的 DNS 服务器中获取 `hello.com` 的 DNS 服务器地址，再从 `hello.com` 的 DNS 服务器中获取 `www.hello.com` 的 DNS 服务器地址。

所谓 **DNS**，即**互联网域名解析系统**，是一套用于将域名解析为 IP 地址的标准系统。由于 DNS 所依赖的基础协议限制，全世界共有 13 个根域名服务器地址，在这些地址上通过任播技术设立并运行了一千多台根域名服务器，构成了全球互联网的基础。在我们访问 `www.hello.com` 的流程中，一千多台根域名服务器中的某一台会被我们查询，然后返回 `com` 顶级域名的 DNS 服务器地址，告诉我们接下来去找 `com`。

根域名服务器只负责解析顶级域名，在各顶级域名上的更多域名的解析则依靠于该顶级域名的管理机构。例如，`com`顶级域名是由商业公司 VeriSign 管理的，这家公司还同时管理13台互联网根域名服务器中的两台、`net`、`name`、`cc`、`tv`顶级域名，并作为一家美国网络服务商。`com`的DNS服务器会告诉我们`hello.com` 的 DNS 服务器地址，告诉我们接下来去找 `hello.com`。

`hello.com` 的 DNS 服务器地址就是由 `hello.com` 域名的实际持有人设置的了，`com`的DNS服务器会记住他为`hello.com`设置的DNS服务器，并返还给任何查询`hello.com` 的 DNS 服务器地址的访客。作为域名的持有者，他还可以随心设置 `hello.com` 的所有子域名，包括`www.hello.com`，和任何其他的，比如`www2.hello.com`或者`world.everyone.hello.com`。

总之，经过层层查询，我们最终获得了 `www.hello.com` 的 DNS 服务器地址。现在，我们终于可以去问这台 DNS 服务器，名为 `www.hello.com` 的网站到底在哪里了。我们会得到一个 IP 地址，指向 `www.hello.com` 的网站服务器，**直到此时，DNS 查询才算成功。**

## 安全地访问网站 - HTTPS 协议
访客使用浏览器访问网站，现在已经获得了网站的 IP 地址，接下来只要发起访问就好了……吗？

**HTTP 协议**（超文本传输协议，HyperText Transfer Protocol），也是互联网的基础，规定了服务器和客户端（网站和用户）之间请求和应答的标准。

**HTTPS 协议**则是在 HTTP 的基础上应用了 SSL/TSL 加密，确保了服务端和客户端之间的整个交互流程的安全，防止交互中可能存在的来自其他人的偷窥和动手动脚。网站的所有者需要为网站配置正规 HTTPS 证书（也称作 SSL/TSL 证书），来确保用户访问网站的过程是安全的。

今天，HTTPS 已经被视作互联网基础建设的一部分。我们假设 `www.hello.com` 也是应用 HTTPS 的网站，浏览器会首先尝试从网站获取其证书信息，并验证证书是否有效。验证内容包括：
* **有效期**：证书不能过期；
* **颁发者**：证书需要由受信任的权威机构颁发；
* **被颁发网站**：`www.hello.com`必须使用颁发给`www.hello.com`的证书；
* **加密强度**：证书必须使用强度足够高的加密算法。

如果证书验证失败，浏览器会阻止连接，并且明显地显示警告，并且中断与网站之间的任何数据交换。

好消息是，`www.hello.com`的证书配置得没有什么问题，所以你的浏览器成功地打开了它。
