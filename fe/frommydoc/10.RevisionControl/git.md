# git学习笔记
参考：https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
##1.git简介
git是目前世界上最先进的分布式版本控制系统。
Linus花了两周时间用C写了一个分布式版本控制系统，即git。
git极其强大的分支管理，功能远超SVN等集中式版本管理系统。
##2.安装git
>brew install git  // macOS
// git全局配置
git config --global user.name "Your Name"  // git提交记录会使用该名字
git config --global user.email "email@example.com"  // 同上
git config --get user.anme  // 获取配置(--help)

##3.创建版本库(Unix的哲学是“没有消息就是好消息”)
>git init  // 把当前目录变成git可以管理的仓库
git add .  // 
git commit -m "wrote a readme file"  // 
##4.时光机穿梭
>vi readme.txt
git status  // Changes not staged for commit:git 
git diff readme.txt
git add readme.txt 
git status  // Changes to be committed:
git commit -m "add distributed"
git status  // nothing to commit, working tree clean
###4.1.版本回退
>vi readme.txt
git add .
git commit -m "append GPL"
git log
git log --pretty=oneline
git reset --hard HEAD^  ## HEAD^^ HEAD^^^ HEAD~x(回退到前x个版本)
more readme.txt
git reflog
git reset --hard 204ec  // reflog查看的版本号或者HEAD~x

###4.2.工作区(Working Directory)/版本库(Repository)/暂存区(stage)
###4.3.管理修改
###4.4.撤销修改
###4.5.删除文件
git rm file 
git commit -m ""          

```sequence
工作区->暂存区: git add
暂存区->分支: git commit
分支  ->暂存区: git reset HEAD <file>
暂存区->工作区: git checkout -- file
分支  ->工作区: git reset --hard  HEAD// 暂存区同工作区
远程分支  ->工作区: git reset --hard  origin/master  // 暂存区同工作区同分支
```
##5.远程仓库
ssh-keygen -t rsa -C "youremail@example.com"
###5.1.添加远程库
cd gitTest 
git remote add origin https://github.com/getlinerm/gitTestOnline.git ##origin为远程库的别名
git push -u origin master ## union,仅第一次用

github.com: getlinerm/fox225225
gitee.com: acuix/fox225225
###5.2.从远程库克隆
git clone git@github.com:getlinerm/gitKiller.git
##6.分支管理
创建分支的好处：保存自己每日的进度，同时不影响同事的开发。
###6.1.创建与合并分支
git checkout -b dev
git branch dev
git checkout dev

git checkout master
git merge dev
git branch -d dev
###6.2.解决冲突
手动解决
git log --graph --pretty=oneline --abbrev-commit
###6.3.分支管理策略
git merge dev3 --no-ff -m "ff merge5"  ##(--no-ff 不保留分支记录,graph图没有圈)

###6.4.Bug分支
git stash
git stash list
git stash pop
git stash apply stash@{0}
###6.5.Feature分支
 git branch -D feature-has-not-been-merged ##(强行删除未合并的分支)
###6.6.多人协作
1.查看远程库信息，使用git remote -v；
2.在本地创建和远程分支对应的分支，使用如下命令，本地和远程分支的名称最好一致，
git checkout -b branch-name origin/branch-name；
3.从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交，如果有冲突，要先处理冲突。
4.建立本地分支和远程分支的关联，使用
git branch --set-upstream-to <branch-name> origin/<branch-name>；
###6.7.Rebase
git pull
git status
git log
git rebase
###6.8
git push origin local_branch:remote_branch

这个操作，local_branch必须为你本地存在的分支，remote_branch为远程分支，如果remote_branch不存在则会自动创建分支。

类似，git push origin :remote_branch，local_branch留空的话则是删除远程remote_branch分支。
查看远端所有分支
git branch -a
##7.标签管理
标签也是版本库的一个快照
###7.1.创建标签
git tag v1.0
git tag

git log --pretty=oneline --abbrev-commit
git tag v0.9 f52c633
git show v0.9
git tag 1094adb -a v0.1 -m "version 0.1 released"
###7.1.操作标签
git push origin v1.0
git push origin --tags
git tag -d v0.9
git push origin :refs/tags/v0.9
##8.使用gitHub
twbs/bootstrap -> my/bootstrap ->local/bootstrap
pull request
##9.使用码云
https://gitee.com/
##10.自定义git
###10.1.忽略特殊文件
创建 .gitignore
强制提交 git add -f App.class
查看ignore规则 git check-ignore -v 2.txt
###10.2.配置别名
git config --global alias.last 'log -1'

默认本仓库生效： more ./.git/config
--global本用户生效：more ~/.gitconfig
###10.3.搭建git服务器