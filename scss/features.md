# SCSS
## 概述
SCSS是CSS的超集。在CSS的基础上，SCSS增加了类似于变量与函数式编程的概念，能够较为简洁方便地实现纯CSS中需要重复实现的功能（例如跨浏览器的兼容）。

SCSS的另一版本是SASS。SASS使用缩进来划分层级，而SCSS同CSS一样使用花括号，因此在实现相同功能的前提下，合法的CSS也是合法的SCSS。SCSS需要编译器来编译生成最终的CSS。

在学习SCSS之前，[你可能需要拥有一些CSS基础。](/css/features)

## 示例
:::code-group
```scss [global.scss]
@mixin radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.navbar-dropdown-menu {
  background-color: var(--theme-background-color-t);
  @include radius(8px);
  transition: all 0.3s ease-in-out;
}
```

```css [global.css]
/* 编译器生成的CSS */
.navbar-dropdown-menu {
    background-color: var(--theme-background-color-t);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
}
```
:::
`@mixin`是**Mixin**，也许可以被称作混入/注入。Mixin可以实现代码复用，并且类似这个例子，可以方便地实现跨浏览器的兼容性。