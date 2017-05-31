## GIT-Server 

* 查看系统是否已经安装git
> git --version
> yum install git
> yum remove git

* 创建ssh证书
> $ ssh-keygen -t rsa -b 4096 -C "1417376255@qq.com"
> $ sudo chown -R test:test test.git 
> $ cat ~/.ssh/id_rsa.pub
> $ add id_rsa.pub into `/home/git/.ssh/authorized_keys`

* 初始化Git仓库
> sudo git init --bare sample.git
> git clone `ssh://git@XXX.com:8120/username/resources.git`
> git clone `../test/sample.git`

