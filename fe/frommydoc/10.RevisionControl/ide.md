## vscode
### IDE配置同步工具：“Settings Sync”
按照欢迎页的提示配置
### 自定义vscode workbench 样式(hack)
feature-request difficult from @aeschli https://github.com/Microsoft/vscode/issues/26128 
一年多都管不了，凉凉了，自己hack, 为了用用等宽字体也是不容易

在文件 /Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/workbench.main.css
中加入如下样式 .monaco-shell {font-family: Menlo!important;}
可自定义vscode workbench 样式
这时会有 unsupported 的标识，烦人，用插件去掉： Fix VSCode Checksums
Fix Checksums: Apply
restart vscode
prefect!
### 解决git中文乱码 git config core.quotepath false

##webstorm

##sublime

##chrome
同步规则：
  书签账密等修改后马上上传至服务器；
  另一台chrome在某个时间间隔后从云端下载；
  登出登录可立即触发从云端下载；