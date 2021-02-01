java执行机制：java源代码 -> java字节码 -> JVM执行字节码

JVM + Runtime Library = JRE
JRE + Compiler, debugger = JDK

[JDK下载](https://www.oracle.com/cn/java/technologies/javase-downloads.html)

安装JDK并设置环境变量(macOS)
`vim .bash_profile`
`export JAVA_HOME=$(/usr/libexec/java_home)`
`export PATH=$JAVA_HOME/bin:$PATH`
`source .bash_profile`
`echo $JAVA_HOME`

IDE(Idea)使用：
[创建一个JAVA 应用程序](https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html)
File | New | Project | Java | Project SDK | Next | Next | Project name | Finish
src | cmd + N | Java Class | com.example.helloworld.HelloWorld
cmd + shift + R

[快捷键](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html)
cmd + F/R      Find/Replace
cmd + sft +F/R Find/Replace in project
sft + sft      Search Everywhere
cmd + [/]      Navigate
cmd + B 	   Go to declaration
tab            Select Indent
cmd + ,        Settings/Preferences

Java程序总是从main方法开始执行
一个Java源文件只能定义一个public类型的class，并且该class名称和源文件名要完全一致

[JDK 与 DOC 下载地址](https://www.oracle.com/java/technologies/javase-downloads.html)

参考：
1. [廖雪峰Java教程](https://www.liaoxuefeng.com/wiki/1252599548343744)
2. [stackoverflow](https://stackoverflow.com/)
3. [Idea官方文档](https://www.jetbrains.com/help/idea/getting-started.html)
