### `ERR_CONTENT_LENGTH_MISMATCH`

[reference][stackoverflow-err-content-length-mismatch]

nginx 的工作进程对大文件做了缓存，这个缓存在 %nginx%/proxy_temp 目录下，主进程在读取缓存的时候由于权限问题而无法访问

工作者进程是 nobody 用户(nginx 默认的工作者用户就是 nobody，如果你没有配 user 指令的话)，
`proxy_temp` 目录所有者就是工作者进程的用户(可以 ll proxy_temp 对此进行验证)。

solution :
```
nginx -s stop

who      //user
whoami   //group
sudo chown -R yhtml5:staff /usr/local/var/run/nginx/proxy_temp

vim /usr/local/etc/nginx/nginx.conf
user user group

sudo nginx
sudo nginx -t
```

### 在Linux中1024以下的端口号都需要root权限才能使用

```
nginx: [emerg] bind() to 0.0.0.0:80 failed (13: Permission denied)

sudo nginx
```

[stackoverflow-err-content-length-mismatch]:https://stackoverflow.com/questions/25993826/err-content-length-mismatch-on-nginx-and-proxy-on-chrome-when-loading-large-file