interface pageSidebarItem {
  text: string,
  items: { text: string, link: string }[]
}

export const common = [
  {
    text: "关于本站",
    items: [
      {text: "如何食用", link: '/common/start'},
      {text: "贡献", link: '/common/contribute'},
      {text: "提问的艺术", link: '/common/how-to-question'},
    ]
  },
  {
    text: "编程概念",
    items: [
      {text: "IDE", link: '/common/ide'},
      {text: "面向对象", link: '/common/object-oriented'}
    ]
  },
  {
    text: "编码规范",
    items: [
      {text: "编码建议", link: '/common/advice'}
    ]
  },
  {
    text: "其他帮助",
    items: [
      {
        text: "软件", link: "/common/software", items: [
          {text: "VSCode", link: '/common/vscode'},
          {text: "JetBrains IDEs", link: '/common/jetbrains-ides'},
          {text: "Git", link: '/common/git'},
          {text: "WSL", link: '/common/wsl'},
          {text: "CMake", link: '/common/cmake'},
          {text: "vim", link: '/common/vim'},
          {text: "杂项", link: '/common/others'},
        ]
      },
      {text: "字体", link: '/common/fonts'},
    ]
  },
]

export const c = [
  {
    text: "概览",
    items: [
      {text: "语言特性", link: '/c/features'},
      {text: "安装", link: '/c/install'},
      {text: "执行", link: '/c/run'}
    ]
  } as pageSidebarItem,
  {
    text: "单文件入门",
    items: [
      {text: "数组", link: '/c/array'},
      {text: "字符串", link: '/c/string'},
      {text: "函数", link: '/c/function'},
    ]
  } as pageSidebarItem,
  {
    text: "多文件工程",
    items: [
      {text: "模块化与头文件", link: '/c/head-file'},
    ]
  } as pageSidebarItem
]

export const cpp = [
  {
    text: "概览",
    items: [
      {text: "语言特性", link: '/cpp/features'},
      {text: "安装（C）", link: '/c/install'},
      {text: "执行（C）", link: '/c/run'}
    ]
  } as pageSidebarItem,
  {
    text: "基本",
    items: [
      {text: "输入输出与命名空间", link: '/cpp/cin-cout'},
      {text: "函数", link: '/cpp/function'},
    ]
  } as pageSidebarItem,
  {
    text: "面向对象",
    items: [
      {text: "类型与实例", link: '/cpp/class-and-instantiation'}
    ]
  } as pageSidebarItem,
  {
    text: "多文件工程",
    items: [
      {text: "头文件", link: '/cpp/head-file'},
      {text: "与C一同使用", link: '/cpp/work-with-c'}
    ]
  } as pageSidebarItem
]

export const java = [
  {
    text: "概览",
    items: [
      {text: "语言特性", link: '/java/features'},
      {text: "安装", link: '/java/install'},
    ]
  } as pageSidebarItem,
  {
    text: "基本",
    items: [
      {text: "类与方法", link: '/java/class-function'},
      {text: "getter setter", link: '/java/getter-setter'},
    ]
  } as pageSidebarItem,
]

export const python = [
  {
    text: "概览",
    items: [
      {text: "语言特性", link: '/python/features'},
      {text: "安装与执行", link: '/python/install-run'},
    ]
  } as pageSidebarItem,
  {
    text: "入门",
    items: [
      {text: "基本类型", link: '/python/basic-type'},
      {text: "循环", link: '/python/loop'},
      {text: "条件与异常", link: "/python/if-try"},
      {text: "函数", link: '/python/function'},
      {text: "类型提示", link: '/python/type-hint'},
      {text: "模块和包", link: '/python/module-and-package'},
    ]
  } as pageSidebarItem,
  {
    text: "面向对象",
    items: [
      {text: "类型与实例", link: '/python/class-and-instantiation'},
      {text: "类型方法", link: '/python/class-method'},
      {text: "特殊方法", link: '/python/special-method'},
    ]
  } as pageSidebarItem,
  {
    text: "Tkinter",
    items: [
      {text: "特性", link: "/python/tkinter/features"},
      {text: "添加控件", link: "/python/tkinter/add_com"},
      {text: "添加布局", link: "/python/tkinter/layout"},
      {text: "事件循环", link: "/python/tkinter/eventloop"},
      {text: "控件", items: [
          {text: "标签 Label", link: "/python/tkinter/com/Label"},
          {text: "按钮 Button", link: "/python/tkinter/com/Button"},
        ]}
    ]
  } as pageSidebarItem,
]

export const web_front = [
  {
    text: "总览",
    items: [
      {text: "Web 开发", link: '/web-front/features'},
      {text: "打开一个网站", link: "/web-front/open-a-website"}
    ]
  } as pageSidebarItem,
  {
    text: "HTML",
    items: [
      {text: "语言特性", link: '/web-front/html/features'},
      {text: "基本结构", link: '/web-front/html/basic-structure'},
    ]
  } as pageSidebarItem,
  {
    text: "CSS",
    items: [
      {text: "语言特性", link: '/web-front/css/features'}
    ]
  } as pageSidebarItem,
  {
    text: "SCSS",
    items: [
      {text: "语言特性", link: "/web-front/scss/features"}
    ]
  } as pageSidebarItem,
  {
    text: "JavaScript",
    items: [
      {text: "语言特性", link: '/web-front/typescript/features'}
    ]
  } as pageSidebarItem,
  {
    text: "TypeScript",
    items: [
      {text: "语言特性", link: '/web-front/javascript/features'}
    ]
  } as pageSidebarItem
]

