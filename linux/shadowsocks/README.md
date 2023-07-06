## shadowsocks

### reference:

Official website:
> http://shadowsocks.org/en/index.html

> https://morning.work/page/2015-12/install-shadowsocks-on-centos-7.html
> http://ryantech.top/posts/16
> https://zzz.buzz/zh/gfw/2017/08/14/install-shadowsocks-server-on-centos-7

### install

```
#install python setup tools
sudo yum install python-setuptools -y

#install pip
sudo easy_install pip

#update pip
sudo pip install –upgrade pip

#install shadowsocks
sudo pip install shadowsocks
```

### Create shadowsocks service, With the system started
> vim /usr/lib/systemd/system/shadowsocks.service

```
[Unit]
Description=Shadowsocks Server
Documentation=https://github.com/shadowsocks/shadowsocks
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking

#设置启动时的配置文件,根据自己的需求改.
ExecStart=/usr/bin/ssserver -c /etc/shadowsocks-libev/config.json
-d start
ExecReload=/bin/kill -HUP $MAINPID
ExecStop=/usr/bin/ssserver -d stop

[Install]
WantedBy=multi-user.target
```

### config
```
{
“server”:”0.0.0.0″,
“server_port”:8989,
“local_address”: “127.0.0.1”,
“local_port”:1080,
“password”:”mypassword”,
“timeout”:300,
“method”:”aes-256-cfb”,
“fast_open”: false,
“workers”: 1
}
```

**mutil-users**
```
{
“server”:”0.0.0.0″,
“local_address”:”127.0.0.1″,
“local_port”:1080,
“timeout”:600,
“method”:”aes-256-cfb”,
“port_password”: {
  “8991”:”A用户密码”,
  “8992”:”B用户密码”
  }
}
```

### start service

```sh
sudo systemctl enable shadowsocks
sudo systemctl status shadowsocks
sudo systemctl start shadowsocks
sudo systemctl stop shadowsocks
```

### firewall

read firewall.md

```sh
sudo firewall-cmd -–permanent –-add-port=8989/tcp
sudo firewall-cmd –-permanent –-add-port=8989/udp
sudo firewall-cmd -–reload
```

### notice
* aliyun esc 配置安全组策略
* telnet host port 检查端口
* netstat -ntlp 检查端口使用情况

### 访问不了
* 阿里云禁用端口
* 防火墙增加端口
* 策略组增加端口






