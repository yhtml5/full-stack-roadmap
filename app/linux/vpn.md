## Create VPN with ppp

[VPN tutorial][tutorial]

you need sudo

```
$ yum install ppp iptables pptpd

vi /etc/pptpd.conf
/localip
localip 192.168.0.1 | remove '#'
remoteip 192.168.0.234-238,192.168.0.245 | remove '#'

vi /etc/ppp/options.pptpd
/ms-dns
ms-dns 8.8.8.8 | remove `#` and change DNS 
ms-dns 8.8.4.4 | remove `#` and change DNS

vi /etc/ppp/chap-secrets
username * pptpd password *

vi /etc/sysctl.conf
add `net.ipv4.ip_forward=1` in last line 

$ sysctl -p
$ iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -j SNAT --to-source `your ip`
$ chmod +x /etc/rc.d/rc.local

vi /etc/rc.d/rc.local
add `iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -j SNAT --to-source `your ip``

$ systemctl start pptpd | start vpn link server
$ chkconfig pptpd on | Boot from start
```

[tutorial]:http://www.xiukee.com/show_530564.html 