interface pageSidebarItem {
    text: string,
    items: {text: string, link: string}[]
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
            {text: "软件", link: '/common/software', items: [
                {text: "WSL", link: '/common/wsl'},
                {text: "CMake", link: '/common/cmake'},
                {text: "vim", link: '/common/vim'},
                {text: "杂项", link: '/common/others'},
            ]},
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
        ]
    } as pageSidebarItem,
]

export const python = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/python/features'},
            {text: "碎碎念", link: '/python/something'},
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
            {text: "特殊方法", link: '/python/special-method'}
        ]
    } as pageSidebarItem
]

export const css = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/css/features'}
        ]
    } as pageSidebarItem
]

export const scss = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/scss/features'}
        ]
    } as pageSidebarItem
]

export const javascript = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/javascript/features'}
        ]
    } as pageSidebarItem
]


export const typescript = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/typescript/features'}
        ]
    } as pageSidebarItem
]

