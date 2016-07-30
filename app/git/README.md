## git tutorial

### Create Repository
   * git init --初始化Git仓库
   * git add readme --添加文件到版本库
   * git add readme.txt --编写一个 readme.txt 文件
   * git commit -m "info" --用命令把文件提交到仓库，info本次提交的说明

### Git Basics
   * git add --把要提交的所有修改放到暂存区
   * git commit --一次性把暂存区的所有修改提交到分支
   * git checkout --把误删文件恢复
   * git checkout -- file --丢弃工作区的修改
   * git diff --查看具体修改内容
   * git log --查看历史记录（最近到最远显示），以便确定要回退到哪个版本
   * git log --pretty=oneline --查看减少后的历史记录
   * git reset --hard HEAD^ --返回到上个版本（上上个版本：HEAD^^；往上100个版本：HEAD~100）
   * git reset --hard 版本号 --回到删除的版本（当前命令行窗口未关闭；版本号没必要写全）
   * git reset HEAD file --将暂存区的修改退回工作区
   * git reflog --查看命令历史，以便确定要回到未来的哪个版本
   * git rm --用于删除一个文件
   * git status --查看修改状态
  

### Remote Repository
   * ssh-keygen -t rsa -C "youremail@example.com" --创建SSH Key
   * git remote add origin git@github.com:chenyexing/learngit.git --把本地仓库的内容推送到远程库
   * git push -u origin master --把本地库的所有内容推送远程库(第一次加-u)
   * git remote add origin git@server-name:path/repo-name.git --关联一个远程库
   * git clone --克隆

### Branch Manage
   * git branch <name> --创建分支
   * git branch --查看当前分支（当前分支前会标*）
   * git branch -d <name> --删除分支
   * git branch -D <name> --强行删除没有合并过的分支
   * git branch --set-upstream branch-name origin/branch-name --建立本地分支和远程分支的关系
   * git checkout <name> --切换分支
   * git checkout -b <name> --创建+切换分支
   * git checkout -b branch-name origin/branch-name --本地创建和远程分支对应的分支
   * git log --graph --查看分支合并图
   * git merge --合并指定分支到当前分支
   * git merge <name> --no-ff -m "merge" -dev
            --禁用 Fast formard 模式(删除分支后,丢掉分支信息,看不出历史合并记录)
   * git remote --查看远程库信息
   * git remote -v --查看详细远程库信息
   * git stash --“储藏”当前工作现场
   * git stash list --查看临时储藏的工作现场
   * git stash pop --回到工作现场
   * git pull --抓取远程分支
   * git push origin <branch-name> --推送本地分支到远程库


### Label Manage
   * git tag <name> --打标签
   * git tag --查看所有标签
   * git show <tagname> --查看标签信息
   * git tag -a <tagname> -m <note> --创建带有说明的标签
   * git tag -s <tagname> -m <note> --用PGP签名标签
   * git tag -d <tagname> --删除标签（本地）
   * git push origin :refs/tags/<tagname> --删除一个远程标签
   * git push origin <tagname> --推送一个本地标签
   * git push origin --tags --推送全部尚未推送到远程的本地标签


### Others
   * git log 查看git日志
   * git config --global color.ui true --让Git显示颜色
   * git config --global user.name "Your Name"  

