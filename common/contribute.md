# 贡献

## 贡献 Code Space

Code Space本质上是一个静态的在线文档。文档使用Markdown语法编写并在构建时生成为静态站点，因此你可以通过编写Markdown的方式来贡献Code Space。

### 在线编辑

你可以在每个页面的底部找到「在GutHub编辑本页」的链接，点击即可前往编辑。

:::info 打不开？
GitHub确实存在访问不稳定的情况，可能需要你想些办法……
:::

:::tip 注意
Code Space 引入了 [pangu.js](https://github.com/vinta/pangu.js) 来在中英文之间自动添加空格，因此你在编写时无需注意这种习惯~
:::

### 更专业的工作流程

[这里是Code Space的GitHub仓库首页。](https://github.com/mangofanfan/Code)你可以将仓库克隆到你的开发环境中，然后使用您的本地IDE（或Markdown编辑器）操作本项目。

芒果帆帆在此仓库的工作中使用的 IDE 是 [JetBrains 的 WebStorm](/common/jetbrains-ides)。使用 WebStorm 时会自动配置所需的环境和依赖，然后打开仓库根目录下的`package.json`，使用`docs:dev`即可在你的开发环境本地运行测试服务器。如果你使用的 IDE 没有为你提供这类的快捷选项，则可以在环境与依赖安装完毕后使用`vitepress dev`命令启动开发测试服务器。

如果你选择了更专业的工作流程，请避免修改VitePress的配置目录`.vitepress`下的文件，或者至少应该先和我取得共识。另外，如果只是修改一些错别字的话（毕竟我经常打错字嘛），直接在线编辑即可。

### git
如果你的脑中还不存在如何参与项目贡献的基本思路，那么你可能需要了解：[git](/common/git)

## 自动部署与构建
一但你对 Code Space 的更改被提交到（合并到） GitHub 仓库中，自动构建将立刻开始。等待最迟不超过十分钟之后，构建完成的产物会被部署到 GitHub Pages 和腾讯云 COS。对于国内访客，还将刷新腾讯云 CDN 缓存。

你可以在 GitHub 仓库实时查看构建进展。如果构建出现错误也无需慌张，芒果帆帆会收到警告并爬起来处理的~

## 页面历史
**文档编写是一项值得记录的长期工程，尤其是对于 Code Space 而言。**

页面的底部会显示所有参与该页面编写的人员，并提供页面历史。每个页面底部都会自动更新这些内容，无需外部干预。

## VitePress Markdown帮助（英文）

:::warning 不适用于零Markdown基础的开发者
若你此前完全没有接触过名为Markdown的标记语言，则需要先寻找一些Markdown基础教程……

放心，这不难的，加油💪
:::
This page demonstrates some of the built-in markdown extensions provided by VitePress.

### Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

输入：

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

输出：

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Custom Containers

输入：

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

输出：

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
