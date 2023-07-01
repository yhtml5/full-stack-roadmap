# SSH

* cat ~/.ssh/id_rsa.pub
* ls -al ~/.ssh  `列出证书`
* ssh-keygen -t rsa -b 4096 -C "<youremail@example.com>"  `创建ssh证书`
* ssh-keygen -t rsa -C "<youremail@example.com>"  `创建SSH Key`
* eval "$(ssh-agent -s)"  --??
* ssh-add ~.ssh/id_rsa  --??
* clip < ~/.ssh/id_rsa.pub  `克隆`
