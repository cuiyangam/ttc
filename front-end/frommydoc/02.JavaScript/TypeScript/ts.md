+ typescript
  + 伴有类型的es + es提案阶段的特性与其他语言的特性
  + https://gitee.com/geektime-geekbang/typescript-in-action
  + https://tool.lu/coderunner/
+ 基础篇
  + 语言分类
    + 弱类型 & 强类型
      弱类型同一个变量 可以 被赋值为不同类型的值
      强类型同一个变量 不可以 被赋值为不同类型的值
    + 静态类型 & 动态类型
      静态类型在 编译 阶段确定所有变量的类型
      动态类型在 运行 阶段确定所有变量的类型
  + npm i -g typerscript
    tsc --initå
    tsc path/to/your/files
  + 数据类型
    es6: number string boolean symbol undefined null object
    ts: es6 + 元组 any never void 枚举 高级类型
    void any expresstion 返回 undefined, 由于undefined不是保留字，所以常用void 0得到undefined
    类型断言 obj as Object
    可选属性 ?: 
    只读属性 readonly

+ 工程篇

+ 实战篇
