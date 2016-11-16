## operation-and-maintenance-manual

[Aliyun Elastic Compute Service][aliecs]

## Initial configuration

#### 1.create account named yhtml5:

```
ssh root@127.0.0.1
adduser test 
passwd test
gpasswd -a test wheel | add test to whell group
su test | su -
cat /etc/sudoers
sudo cat /etc/sudoers
exit
exit
ssh test@127.0.0.1
ls -al
```

#### 2.use ssh install of password

```
local mac
brew install ssh-copy-id
ssh-copy-id test@127.0.0.1
exit
ssh test@127.0.0.1
```

### 3.prohibit root user remote login

```
sudo vi /etc/ssh/sshd_config
/PermitRootLogin
PermitRootLogin no | remove '#' and change 'yes' to 'no'
sudo systemctl reload sshd
exit
ssh root@127.0.0.1
Permission denied, please try again.
```

### 4.prohibit the user use SSH password to login server

```
sudo vi /etc/ssh/sshd_config
/PasswordAuthentication
PasswordAuthentication no | remove '#' and change 'yes' to 'no'
sudo systemctl reload sshd
exit
ssh test@127.0.0.1
Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
```

### 5.modify the port number of the SSH service

```
sudo vi /etc/ssh/sshd_config
/Port
Port xxx | remove '#' and change '22' to 'xxx'
sudo systemctl reload sshd
exit
ssh test@127.0.0.1
connect to host 47.89.194.18 port 22: Connection refused
ssh test@127.0.0.1 -p xxx
```

### 6.change host name

```
# hostname
# vi /etc/sysconfig/network
restart Ali ECS
```

### 7.add a disk

```
# pwd
# df -h
# bash auto_fdisk.sh
# df -h

```

## 阿里控制台操作

1. 设置实例快照
2. 自定义系统镜像
3. [设置安全组][安全组应用案例]
4. 修改安全组规则
5. 允许指定协议与端口的特定IP地址段

## Daily Operation

## security
* 更改root密码
* 创建管理员帐号
* 禁止 使用root远程登录
* 禁止 使用SSH 密码远程登录
* ping 风暴, 安全组策略


[安全组应用案例]:https://help.aliyun.com/document_detail/25475.html?spm=5176.2020520101.121.2.9mmMov
[aliecs]:http://ninghao.net/course/1584