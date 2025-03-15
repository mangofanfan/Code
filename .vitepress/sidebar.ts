interface pageSidebarItem {
    text: string,
    items: {text: string, link: string}[]
}

export const common = [
    {
        text: "关于本站",
        items: [
            {text: "如何食用", link: '/common/start'},
            {text: "贡献", link: '/common/contribute'}
        ]
    } as pageSidebarItem,
    {
        text: "编程概念",
        items: [
            {text: "面向对象", link: '/common/object-oriented'}
        ]
    } as pageSidebarItem,
    {
        text: "编码规范",
        items: [
            {text: "编码建议", link: '/common/advice'}
        ]
    } as pageSidebarItem,
]

export const c = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/c/features'},
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
            {text: "语言特性", link: '/cpp/features'}
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
            {text: "与C一同使用", link: '/cpp/work-with-c'}
        ]
    } as pageSidebarItem
]

export const python = [
    {
        text: "概览",
        items: [
            {text: "语言特性", link: '/python/features'},
        ]
    } as pageSidebarItem,
    {
        text: "帮助",
        items: [
            {text: "类型提示", link: '/python/type-hint'}
        ]
    } as pageSidebarItem,
    {
        text: "面向对象",
        items: [
            {text: "类型与实例", link: '/python/class-and-instantiation'},
            {text: "类型方法", link: '/python/class-method'}
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

