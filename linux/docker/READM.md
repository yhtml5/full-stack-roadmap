# Docker Command Line

```sh
# 根据当前目录中的dockerfile构建镜像
docker build -t <镜像名称> .

# 使用 指定镜像 以 交互模式 运行容器，并监听服务端口开放外部（直接执行镜像startup CMD）
docker run -it -p <对外端口>:<服务端口> <镜像名称>

# 使用 指定镜像 以 交互模式 运行容器，并监听服务端口开放外部（直接执行镜像startup CMD），并按照 容器名称 保存容器
docker run -it --name <容器名称> -p <对外端口>:<服务端口> <镜像名称>

# 使用 指定镜像 以 交互模式 运行容器，并监听服务端口开放外部（不执行startup，开启终端）
docker run -it -p <对外端口>:<服务端口> <镜像名称> /bin/bash

# 使用 指定镜像 以 交互模式 运行容器，并将本机文件映射到容器内部（不执行startup，开启终端）
docker run -it -v <本机文件地址>:<容器内部地址> <镜像名称> /bin/bash

# 使用 指定镜像 以 交互模式 运行容器，并使用本机网络
docker run -it --network=host <镜像名称>

# 如果已经有容器实例，可以直接启动（直接执行镜像startup CMD）
docker start <容器名称>

# 容器运行过程中，开启一个终端
docker exec -it <容器名称> /bin/bash

# 容器运行过程中，执行容器内 /root/test.sh 脚本
docker exec -it <容器名称> /bin/sh /root/test.sh

# 登录微信云托管 docker registry 【镜像上传指引中获取 用户ID】
docker login --username=<用户ID> ccr.ccs.tencentyun.com
% password：输入密码

# 将镜像推送到registry 【镜像上传指引中获取 仓库地址】
docker images
% 指定完后获取想要上传的镜像ID（IMAGE ID），在接下来的命令中替换粘贴
docker tag <镜像ID> ccr.ccs.tencentyun.com/<仓库地址>:<镜像TAG-自定义>
docker push ccr.ccs.tencentyun.com/<仓库地址>:<镜像TAG-自定义>
```

## 参考

[Dockerfile编写指南](https://zhuanlan.zhihu.com/p/105885669)
