### nginx 缓存大文件

```
cd /usr/local/var/run/nginx
sudo chown -R www:www proxy_temp
```


### 在Linux中1024以下的端口号都需要root权限才能使用

```
nginx: [emerg] bind() to 0.0.0.0:80 failed (13: Permission denied)

sudo nginx
```
