## linux command line tutorial

[鸟哥的Linux私房菜][linux-vbird]

### Command Line

**command  `[-options]`  parameter1  parameter2 ...**

(指令/選項/參數1//參數2)

### authority
|command line|usage|note|
|:---|:---|:---|
|adduser test|add test account|
|chown -R test:test test.js|change test.js own and group to test/test|chown [-R] 账号名称:用户组名称 文件或目录|
|chown -R test:test node/|改变node 及 node下文件的权限|
|userdel -r test|remove test account|

### Operate files and directories
|command line|usage|note|
|:---|:---|:---|
|cat `<file>`|查看文件内容|  
|cd  `<directory>`|进入目录|
|ls `<directory>`|列出该文件夹下的东西|`-a`隐藏文件;`-l`权限|  
|mkdir `<directory>`|creat directory|  
|pwd|print working directory| |
|touch `<file>`|create file|  
|mv||
   
### Tools
|command line|usage|note|
|:---|:---|:---|
|date|display date|`+%Y/%m/%d`;`+%H:%M`;格式|
|bc|Calculator|`+`加法,`-`減法,`*`乘法,`/`除法,`^`指數,`%`餘數;`quit`exit|
|cal `month` `year`|display calendar|
|ifconfig -a|查看ip|
|ip addr|查看ip地址|
|man `command`|manual|`q`exit;`space`page down|
|who|view who online|
|netstat -a|view net status|
|netstat -ntlp|list port|
|ps -aux|后台执行的程序
|su -|切换管理者身份;`exit`|
|systemctl start firewalld|开启防火墙|

### other
|command line|usage|note|
|:---|:---|:---|
|cat /etc/redhat-release|查看服务器版本|CentOS Linux release 7.2.1511 (Core)|
|curl -0 path uri|download|
|exit|离开系统|
|history|查看命令日志|
|source ~/.bash_profile|命令生效|
|su root|切换root身份|
|su - root|用户和Shell环境一起切换成root身份|
   
[linux-vbird]:http://linux.vbird.org/       