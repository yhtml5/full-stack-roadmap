# docker配置加速器

目前 Docker 官方已开始推荐使用 Alpine 替代之前的 Ubuntu 做为基础镜像环境

Alpine 使用 apk 来进行包管理。

可以在 Docker file 中添加以下语句，来加速 apk 的包管理。

```sh
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
RUN apk add --no-cache gcc musl-dev linux-headers
```

注： sed 可依照脚本的指令来处理、编辑文本文件。 Sed 主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。
