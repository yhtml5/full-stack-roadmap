# 合并git仓库

## 需求

* 合并3个仓库, 保留提交记录
* 每个仓库中有不同分支, 文件需要都保留

```sh
originA
  --origin1
  --origin2
originB
  --branch1
  --branch2
```

## 背景知识

* git remote -v, 远程仓库名称默认为 origin
* git fetch —all, 拉取远程所有仓库的commit到本地仓库
* git pull —all, git fetch + git merge

## start

* 将本地仓库下所有文件放到目录A
* git remote add originB `git@domain:path/repository.git`
* git remote -v
* git fetch —all
* git merge originB/branch1
* git merge originB/branch2
* 整理目录结构
* 调整各文件的相对路径
* 基于远程跟踪分支创建本地分支
* git checkout -b --track branch1 origin/branch1
* 还原originB/branch1的修改, 后续在originA/branch1下继续开发
