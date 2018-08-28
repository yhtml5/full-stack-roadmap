## 使用 ESlint, husky, lint-staged 半自动提升项目代码质量

### tool
- git
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

### husky 注册 git hook
在git中，我们每次执行commit、push等操作时，都会触发一个或多个shell脚本，  
这些脚本我们称为钩子，它们存放在.git/hooks目录下，  
我们可以看到目录下有commit-msg.sample、pre-commit.sample等文件，  
这些都是案例文件，不会执行，要想执行的话把后面的.sample后缀去掉就可以了。  

### 实现过程
-> 待提交的代码
-> git add 添加到暂存区
-> 执行 git commit
-> husky注册在git pre-commit的钩子调起 lint-staged
-> lint-staged 取得所有被提交的文件依次执行写好的任务（ESLint 和 Prettier）
-> 如果有错误（没通过ESlint检查）则停止任务，等待下次commit，同时打印错误信息
-> 成功提交

在钩子里写入指令，执行git操作前先运行钩子里的指令，  
调用eslint检查代码，如果代码不符合规范就非零退出，git操作就会停止
