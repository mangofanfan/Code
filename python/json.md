# json 标准库
json 是常用的数据存储和交换格式。Python 提供了标准库 `json` 来读写 json 数据，并将其与 Python 的内置数据类型进行转换。

## json -> 内置数据类型

### 从 json 文件反序列化
读取 json 文件中的序列化数据：

```json [data.json]
{
    "name": "Code Space",
    "author": 1,
    "url": "https://code.mangofanfan.cn",
    "users": [
        {
            "name": "MangoFanFanw",
            "age": 18,
            "male": true
        }
    ]
}
```

```python [main.py]
import json

data = json.loads(open("data.json", encoding="utf-8").read())

print(data)
```

运行结果如下，可以看到 `data` 的结构与原 json 是一致的。

```text
{'name': 'Code Space', 'author': 1, 'url': 'https://code.mangofanfan.cn', 'users': [{'name': 'MangoFanFanw', 'age': 18, 'male': True}]}
```

json 提供 `loads` 方法，将字符串格式的 json 数据反序列化为 Python 内部的结构化数据，即**列表与字典构成结构、字符串与数字与布尔值构成键值对的数据**。

在上面，为了读取文件 `data.json` 中的 json 数据，我们使用 `open("data.json", encoding="utf-8").read()` 以文本形式读取其中的内容，再将读取结果作为字符串扔给了 `loads`。

### 从字符串反序列化
如果手中直接有 json 格式的序列化字符串，处理起来会更简单：

```python [main.py]
import json

json_data = """
{
"name": "Code Space",
"author": 1,
"url": "https://code.mangofanfan.cn",
"users": [
{
"name": "MangoFanFanw",
"age": 18,
"male": true
}
]
}
"""

data = json.loads(json_data)

print(data)
```

对于上面的 `json_data` （字符串格式的 json 文本），将其压缩到一行，或是使用空格、制表符、换行符将其格式规范化，都**不会影响对其结构化数据的解析**。

## 内置数据类型 -> json

```python [main.py]
import json

json_data = {
    "name": "Code Space",
    "author": 1,
    "url": "https://code.mangofanfan.cn",
    "users": [
        {
            "name": "MangoFanFanw",
            "age": 18,
            "male": True
        }
    ]
}

data = json.dumps(json_data)

print(data)
```

```text
{"name": "Code Space", "author": 1, "url": "https://code.mangofanfan.cn", "users": [{"name": "MangoFanFanw", "age": 18, "male": true}]}
```

如需将其写入到文件中：

```python
open(file="data.json", mode="w", encoding="utf-8").write(data)
```

这样，我们得到的 data.json 文件中，json 格式的数据会全部挤在一行中，不是很利于人类阅读或修改。这是因为 `dumps` 方法默认不会为序列化得到的数据添加合适的换行和缩进。你可以为其传入 `indent` 参数来指定缩进格数，一般指定为 2 或者 4。

```python
data = json.dumps(json_data, indent=4)

open(file="data.json", mode="w", encoding="utf-8").write(data)

print(data)
```

这样，在得到的 data.json 和终端中，我们都会得到下面这样的结果：

```json
{
    "name": "Code Space",
    "author": 1,
    "url": "https://code.mangofanfan.cn",
    "users": [
        {
            "name": "MangoFanFanw",
            "age": 18,
            "male": true
        }
    ]
}
```
