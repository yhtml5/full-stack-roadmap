# docker配置加速器

## 编辑配置文件

```sh
$ sudo mkdir /etc/docker

# 编辑配置文件，如果文件不存在，以下命令会自动创建。
$ sudo nano /etc/docker/daemon.json

# 将配置信息粘贴到配置文件中，配置信息为 json 格式，可以根据实际需要设置多个国内的镜像服务器。
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}
```

## 重启Docker,以使docker的配置文件生效

```sh
service docker restart
```

## 检查设置是否生效

```sh
$ sudo docker info

# 结果中显示了我们设置的镜像服务器地址，则说明设置已经生效，返回的信息类似下面这样：
Registry Mirrors:
 https://hub-mirror.c.163.com/
```

## 很遗憾以上无效

简单粗暴应用

```sh
npm install --registry=https://registry.npmmirror.com
```
