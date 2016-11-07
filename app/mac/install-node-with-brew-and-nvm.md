## 本文主要简述了Mac下安装Node并切换taobao源。

[official website](http://www.jianshu.com/p/078d9900a7c8)

### 1.使用 brew 安装 nvm。

nvm(Node Version Manager) 是 Node 的版本管理器。用于安装、管理、切换 Node。

```
$ brew update
$ brew install nvm
```

### 2.更改 rc 文件

如果你使用的是 bash ( Mac 默认 shell )，则需要更改 .bash_profile（或 .bashrc）文件，如果你使用的是 Zsh 则需要更改 .zshrc 文件。

```
# Node
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

### 3.重新载入

> $ source ~/.zshrc

如果是 bash 则对应将配置文件更改为对应的即可。

### 4.测试nvm命令

> $ nvm

看到一堆输出就是已成功配置。当然你可以可以仔细看看 nvm 有哪一些参数和用法。

### 5.安装Node

首先查询远端版本列表，当然你也可以上 nodejs.org 看看最新的稳定版本是哪个。

> $ nvm ls-remote

找到你所需的版本并安装

> $ nvm install 4.2.4

切换版本、设定默认版本

> $ nvm use 4.2.4
> $ nvm alias default 4.2.4

### 6.测试 Node 安装状态

```
$ node -v
v4.2.4
$ npm -v
2.14.12
```

### 7.切换 npm 到国内镜像

命令行输入，注意使用 bash 的对应修改相关 .bashrc 或 .bash_profile 文件

```
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \ 
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

### 8.测试 cnpm 命令

> $ cnpm -v

以后就可以使用 cnpm 替换 npm 命令以达到提高速度、解决死链的目的。