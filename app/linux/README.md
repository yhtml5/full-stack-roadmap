## linux command line tutorial

[鸟哥的Linux私房菜][linux-vbird]

### Command Line

**command  `[-options]`  parameter1  parameter2 ...**

(指令/選項/參數1//參數2)

### Operate files and directories
|command line|usage|note|
|:---|:---|:---|
|cat `<file>`|查看文件内容|  
|cd  `<directory>`|进入目录|
|ls `<directory>`|列出该文件夹下的东西|`-a`隐藏文件;`-l`权限|  
|mkdir `<directory>`|creat directory|  
|pwd|displays the current directory|  
|touch `<file>`|create file|  
   
### Tools
|command line|usage|note|
|:---|:---|:---|
|date|display date|`+%Y/%m/%d`;`+%H:%M`;格式|
|bc|Calculator|`+`加法,`-`減法,`*`乘法,`/`除法,`^`指數,`%`餘數;`quit`exit|
|cal `month` `year`|display calendar|
|man `command`|manual|`q`exit;`space`page down|
|who|view who online|
|netstat -a|view net status|
|ps -aux|后台执行的程序
|su -|切换管理者身份;`exit`|

### other
|command line|usage|note|
|:---|:---|:---|
|history|查看命令日志|
|sudo apt-get install git|install with apt-get in ubuntu|  
|source ~/.bash_profile|命令生效|
|exit|离开系统|
  
### SSH 

|command line|usage|note|
|:---|:---|:---|
|ssh root@47.89.194.18|ssh login|  
   
[linux-vbird]:http://linux.vbird.org/       