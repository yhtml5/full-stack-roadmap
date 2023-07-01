## 云服务器 ECS CentOS 7配置默认防火墙 Firewall

说明：Centos7 下默认的防火墙是 Firewall，替代了之前的 iptables，Firewall 有图形界面管理和命令行管理两种方式，
本文简要介绍命令 行Firewall 的使用。

### 配置 Firewall

进入系统之后，Centos7 默认是已安装了 Firewall，但是没有启动的，所以需要先启动下 Firewall，同时设置开机自启动

```sh
systemctl start firewalld           ##启动
systemctl disable firewalld         ##停止
systemctl stop firewalld            ##禁用
systemctl enable firewalld.service  ##设置开机自启动

ln -s '/usr/lib/systemd/system/firewalld.service' '/etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service'
ln -s '/usr/lib/systemd/system/firewalld.service' '/etc/systemd/system/basic.target.wants/firewalld.service'
```

### 常用命令介绍

|command line|usage|
|---|---|
|sudo firewall-cmd --state|                           ##查看防火墙状态，是否是running|
|sudo firewall-cmd --reload|                          ##重新载入配置，比如添加规则之后，需要执行此命令|
|sudo firewall-cmd --get-zones|                       ##列出支持的zone|
|sudo firewall-cmd --get-services|                    ##列出支持的服务，在列表中的服务是放行的
|sudo firewall-cmd --query-service ftp|               ##查看ftp服务是否支持，返回yes或者no|
|sudo firewall-cmd --add-service=ftp|                 ##临时开放ftp服务|
|sudo firewall-cmd --remove-service=ftp|              ##临时移除ftp服务|
|sudo firewall-cmd --add-service=ftp --permanent|     ##永久开放ftp服务|
|sudo firewall-cmd --remove-service=ftp --permanent|  ##永久移除ftp服务|
|sudo firewall-cmd --add-port=80/tcp --permanent|     ##永久添加80端口|
|sudo iptables -L -n|                                 ##查看规则，这个命令是和iptables的相同的|
|man firewall-cmd|                               ##查看帮助|


