# Typescript
## 概述
Typescript（TS）是Javascript的超集。在完全兼容JS写法的基础上，TS增强了JS中缺失的类型检查，简化了JS中面向对象的实现，并且提供了对Javascript标准ES5的向下兼容。

Typescript是编译型语言。按照工程惯例，Typescript脚本需要编译为Javascript脚本后提供给浏览器使用。考虑到不是所有用户的浏览器都支持ES6，Typescript编译器可以将TS脚本编译为ES5标准的JS，确保开发者只需要掌握最现代的写法。

学习TS需要你拥有一些JS基础，[你可以在这里查看本站的Javascript教程。](/javascript/features)

## 预览
Typescript相比于Javascript最明显的提升就是提供了强制性的类型检查，例如你可以定义一个**接口**，然后支持Typescript的IDE将会检查你指定到该接口的对象是否符合接口定义的规范。

:::code-group

```typescript [validate.ts]
// noinspection JSAnnotator
// 这里是你简单编写的 Typescript 代码
interface ErrorMessage {
    name: string;
    value: string;
}

function validate(...messages: [string, string][]): ErrorMessage[] {
    let errors: ErrorMessage[] = [];
    for (let message of messages) {
        if (message[1] == "") {
            let msg: ErrorMessage = {name: message[0], value: "输入值为空"}
            errors.push(msg)
        }
        if (message[0] == "password") {
            if (message[1].length < 8) {
                let msg: ErrorMessage = {name: message[0], value: "密码长度过短，长度应大于等于8"}
                errors.push(msg)
            }
        }
        if (message[0] == "phone_number") {
            if (message[1].length != 11) {
                let msg: ErrorMessage = {name: message[0], value: "电话号码需要为11位数字"}
                errors.push(msg)
            }
        }
    }
    return errors;
}

function generateMsg(errors: ErrorMessage[]): string {
    let message = "";
    for (let error of errors) {
        message += `[ ${error.name} ] ${error.value}<br>`;
    }
    return message;
}

```

```javascript [validate.js]
// 这里是编译器生成的 Javascript 代码
function validate() {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    var errors = [];
    for (var _a = 0, messages_1 = messages; _a < messages_1.length; _a++) {
        var message = messages_1[_a];
        if (message[1] == "") {
            var msg = { name: message[0], value: "输入值为空" };
            errors.push(msg);
        }
        if (message[0] == "password") {
            if (message[1].length < 8) {
                var msg = { name: message[0], value: "密码长度过短，长度应大于等于8" };
                errors.push(msg);
            }
        }
        if (message[0] == "phone_number") {
            if (message[1].length != 11) {
                var msg = { name: message[0], value: "电话号码需要为11位数字" };
                errors.push(msg);
            }
        }
    }
    return errors;
}
function generateMsg(errors) {
    var message = "";
    for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
        var error = errors_1[_i];
        message += "[ ".concat(error.name, " ] ").concat(error.value, "<br>");
    }
    return message;
}

```
:::
Javascript并不要求类型，在Typescript中定义的类型实际上是在帮助开发者。这样的好处是，IDE可以在开发者工作时提供更精准智能的代码补全，且只要编译通过，生成的Javascript在运行时不应该有任何编码问题导致的错误。

你可能已经发现，编译生成的Javascript完全没有使用到ES6中方便快捷的新特性，这是Typescript编译器的功劳，可以让你的脚本能在更多的浏览器上运行。你无需担心编译结果的可靠性，只要Typescript在编写时没有报错，编译就不会出错。
