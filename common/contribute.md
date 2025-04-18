# 贡献

## 贡献 Code Space

Code Space本质上是一个静态的在线文档。文档使用Markdown语法编写并在构建时生成为静态站点，因此你可以通过编写Markdown的方式来贡献Code Space。

### 在线编辑

你可以在每个页面的底部找到「在GutHub编辑本页」的链接，点击即可前往编辑。

:::info 打不开？
GitHub确实存在访问不稳定的情况，可能需要你想些办法……
:::

### 更专业的工作流程

[这里是Code Space的GitHub仓库首页。](https://github.com/mangofanfan/Code)你可以将仓库克隆到你的开发环境中，然后使用您的本地IDE（或Markdown编辑器）操作本项目。

芒果帆帆在此仓库的工作中使用的IDE是JetBrains的WebStorm。使用WebStorm时会自动配置所需的环境和依赖，然后打开仓库根目录下的`package.json`，使用`docs:dev`即可在你的开发环境本地运行测试服务器。如果你使用的IDE没有为你提供这类的快捷选项，则可以在环境与依赖安装完毕后使用`vitepress dev`命令启动开发测试服务器。

以及，芒果帆帆正在将Code Space的工作流程转移到WSL上，编辑器也切换为Visual Studio Code。VS Code同样会自动配置环境，并提供快速启动项目的能力，你还可以通过一些拓展来在VS Code中直接打开VitePress网站预览，在此不再赘述。

如果你选择了更专业的工作流程，请避免修改VitePress的配置目录`.vitepress`下的文件，或者至少应该先和我取得共识。另外，如果只是修改一些错别字的话（毕竟我经常打错字嘛），直接在线编辑即可。

如有任何必要，可以发邮件给我：`mangofanfanw@icloud.com`、`mangofanfanw@hotmail.com`。

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
