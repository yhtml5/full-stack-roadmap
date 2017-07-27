## Nginx Web Server

[nginx config reference][nginx-reference]
[nginx question][nginx-question]
[nginx install][nginx-install]

### Nginx comman lind

|comman in linux|usage|
|---|---|
|sudo systemctl reload nginx|重新加载服务配置文件|
|sudo systemctl status nginx.service|查看服务器状态|
|sudo systemctl start nginx.service|启动nginx服务|
|sudo systemctl restart nginx.service|重新启动|
|sudo systemctl stop nginx.service|停止服务|
|sudo systemctl enable nginx.service|开机启动|
|sudo systemctl disable nginx.service|禁止开机启动|

|comman in mac|usage|
|---|---|
|sudo nginx | 启动 |
|sudo nginx -v | 版本 |
|sudo nginx -V | 详细版本 |
|sudo nginx -t| 测试配置 |
|sudo nginx -s reload| 重载配置 |
|sudo nginx -s stop | 停止 |
|sudo nginx -s quit | 停止 |

更改本地host地址指向域名

### Global Config 

```
$ ls /etc/nginx/ | nginx files
$ sudo vi /etc/nginx/nginx.conf | http
$ sudo vi /etc/nginx/conf.d/default.conf | virtual server
$ mkdir /home/yhtml5/project/server/nginx | errlog path
$ touch /home/yhtml5/project/server/nginx/error.log
$ touch /home/yhtml5/project/yhtml5.com/index.html | test file
$ sudo systemctl reload nginx
$ systemctl status nginx
```

### 访问出现 403

```
$ getenforce | 查看selinux状态; disable:运行用户权限问题; Enforcing:网站主目录权限问题
$ sudo vi /etc/nginx/nginx.conf | change user test
$ sudo chcon -Rt httpd_sys_content_t /home/yhtml5/project/yhtml5.com 
$ sudo systemctl reload nginx
$ sudo nginx -t
$ sudo systemctl status nginx
```

### 默认虚拟服务器

```            
ls /etc/nginx/ -all
$ sudo vi /etc/nginx/conf.d/default_custom.conf | 监听80端口
    server {
      listen    80 default_server;
      return    444;
    }

监听端口,返回相应域名,location对应的目录 
$ sudo vi /etc/nginx/conf.d/test.conf  
    server {
        listen  80;
        server_name test.yhtml5.com www.test.yhtml5.com;
        root  /home/yhtml5/project/yhtml5.com;
    
        # location / {
        #     index index.html index.htm;
        # }
    
        location /wechat {
            root /home/yhtml5/project/yhtml5.com;
        }
    
        # location ~* \.(gif|jpg|png)$ {
        #    expires 30d;
        # }
    
        location / {
            proxy_pass http://test.yhtml5.com:61201;
            proxy_set_header Host            $host;
            proxy_set_header X-Real-IP       $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-NginX-Proxy true;
        }
    }
    
$ sudo systemctl reload nginx
$ sudo nginx -t
$ netstat -ntlp
```

### [gzip][gzip]

```
gzip on;
gzip_min_length 1k;
gzip_buffers 4 16k;
#gzip_http_version 1.0;
gzip_comp_level 2;
gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary off;
gzip_disable "MSIE [1-6]\.";
```

[ninghaoNginx]:http://ninghao.net/course/3996
[gzip]:http://www.cnblogs.com/mitang/p/4477220.html
[nginx-reference]:http://www.cnblogs.com/gide/p/6180251.html
[nginx-question]:question.md
[nginx-install]:install.md
