# Install Nginx

我装的系统是centos7,nginx有很多版本的，下面我给个链接`http://nginx.org/packages/mainline/centos/7/x86_64/RPMS/`

```
# cat /etc/redhat-release
# nginx -t
```
### 下载对应当前系统版本的nginx包(package)
```
建立nginx的yum仓库
# wget  nginx.org/packages/mainline/centos/7/x86_64/RPMS/nginx-1.9.9-1.el7.ngx.x86_64.rpm

下载并安装nginx
# rpm -ivh nginx-1.9.9-1.el7.ngx.x86_64.rpm
# yum install nginx
# nginx -t
```

### 查看nginx服务状态，如下：
```
# systemctl status nginx.service
nginx.service - nginx - high performance web server
Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled)
Active: inactive (dead)      //服务未开启
# systemctl start nginx.service           /启动nginx服务
# systemctl restart nginx.service       /重新启动
# systemctl stop nginx.service          /停止服务
# systemctl enable nginx.service      /开机启动
# systemctl disable nginx.service     /禁止开机启动
```

CentOS 7 默认是firewall
添加防火墙规则如下：
> # firewall-cmd --add-port=80/tcp          //http协议基于TCP传输协议，放行80端口

如果添加以上的命令还不行，那么就关闭firewalld
停止
> # systemctl stop firewalld.service 
禁止开机启动
> # systemctl disable firewalld.service

### 配置
默认的配置文件在 /etc/nginx 路径下，使用该配置已经可以正确地运行nginx；
如需要自定义，修改其下的 nginx.conf 或conf.d/default.conf等文件即可。

### 测试
在浏览器地址栏中输入部署nginx环境的机器的IP，如果一切正常，应该能看到如下字样的内容。

[ninghaoNginx]:http://ninghao.net/course/3996