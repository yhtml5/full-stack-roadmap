# Install Nodejs With NVM

[4 ways to install node js on centos 7 servers][intsallNode]

NVM（Node version manager）顾名思义，就是Node.js的版本管理软件，可以轻松的在Node.js各个版本间切换[项目源码GitHub][nvm]

```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash
$ source ~/.bash_profile
$ nvm list-remote
$ nvm install v6.9.1

$ nvm list
->  v6.9.1
      system
      
$ nvm use v6.9.1  | 切换版本 
$ nvm alias default v6.9.1 | 设定默认版本
```

[installNode]:https://www.vmvps.com/4-ways-to-install-node-js-on-centos-7-servers.html
[nvm]:https://github.com/creationix/nvm