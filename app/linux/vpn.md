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

config setup
    nat_traversal=yes
    virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12
    oe=off
    protostack=netkey 
    force_keepalive=yes 
    keep_alive=1800
conn L2TP-PSK-NAT
    rightsubnet=vhost:%priv 
    also=L2TP-PSK-noNAT
conn L2TP-PSK-noNAT
    authby=secret 
    pfs=no 
    auto=add 
    keyingtries=3 
    rekey=no 
    ikelifetime=8h 
    keylife=1h 
    type=transport 
    left=$serverip 
    leftid=$serverip 
    leftprotoport=17/1701 
    right=%any 
    rightprotoport=17/%any 
    dpddelay=40 
    dpdtimeout=130 
    dpdaction=clear

/etc/ipsec.secrets


#include /etc/ipsec.d/*.secrets 
$serverip username PSK password

rm -f /etc/ppp/options.xl2tpd 
cat >>/etc/ppp/options.xl2tpd<<EOF 
#require-pap 
#require-chap 
#require-mschap 
ipcp-accept-local 
ipcp-accept-remote 
require-mschap-v2 
ms-dns 8.8.8.8 
ms-dns 8.8.4.4 
asyncmap 0 
auth 
crtscts 
lock 
hide-password 
modem 
debug 


config setup
conn %default
	ikelifetime=60m
	keylife=20m
	rekeymargin=3m
	keyingtries=1
conn l2tp
	keyexchange=ikev1 # IKE版本
	left=<对外IP>
	leftsubnet=0.0.0.0/0
	leftprotoport=17/1701
	authby=secret
	leftfirewall=no
	right=%any
	rightprotoport=17/%any
	type=transport
	auto=add


  altNames:  47.89.194.18