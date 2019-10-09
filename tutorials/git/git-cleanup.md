# GIT Cleanup

## 查看仓库中的大文件
```sh
git rev-list --all --objects | \
grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -n 3 | awk -F ' '  '{print $1}')"
```

> git rev-list 查看commit
> git verify-pack 检查git打包的文件，输出SHA-1、size等字段
> 另外这里用到$ 先求解git verify-pack 的输出

## 删除仓库中的大文件
```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch *.pcd' --prune-empty --tag-name-filter cat -- --all
```

> git filter-branch 用于重新branch

## 回收空间

```sh
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```
> git reflog 用于管理reflog信息
> git gc 移除不必要的文件并优化本地文件

## 强制推送改动到远端
> git push origin --force --all
