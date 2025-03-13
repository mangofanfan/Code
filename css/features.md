# CSS
## 概述
CSS是网站开发前端三件套中负责样式的部分，全称为层叠样式表。CSS可以写为后缀为`.css`的文本格式文件，在HTML中引用；也可以写为内联HTML，或直接标注在HTML元素的标签内。

在了解了CSS基础之后，[你也可以尝试学习SCSS](/scss/features)，这是CSS的超集，在兼容原本CSS的写法的基础上增加了更多的特性。SCSS是编译型语言，编译之后也会生成CSS文件。

## 示例
在本站中直接演示CSS的效果似乎有些困难。
```css
* {
  color: var(--theme-text-color);
  transition: all 0.3s ease-in-out;
}

body {
  background-color: var(--theme-body-color);
  background-image: var(--theme-background-image);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center 0;
  transition: all 0.4s;
}

img {
  width: 100%;
}

a {
  text-decoration: none;
  color: var(--theme-link-color);
  transition: all 0.3s;
}
```
例如上面的CSS片段，依次为页面中的所有元素和`<body>`、`<img>`、`<a>`三个标签增加了特定样式。我怕在CSS中使用花括号`{}`包含样式语句，语句间以半角分号`;`分隔，在花括号前使用**选择器**来生命花括号中的样式应用在哪些地方。

上面的CSS中使用的`*`是通配符，选定了所有的元素；后面三个直接书写的HTML标签是标签选择器。此外，还有类选择器和ID选择器，将在后面的教程中介绍。