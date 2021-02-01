# VPS信息
https://bwh88.net
cuicui180180@163.com/uu22360679

ssh root@198.181.34.161 -p 26946
uu22360679
```
{
    "server":"198.181.34.161",
    "port_password":{
        "7776":"shadowsocks",
        "8887":"shadowsocks",
        "9998":"shadowsocks"
    },
    "timeout":800,
    "method":"aes-256-cfb",
    "fast_open":false,
    "workers":1
}
```

# 搭建教程
OS: Centos 6 x86_64 bbr 

vi install_shadowsocks
chmod 755 install_shadowsocks
./install_shadowsocks
```
cd
yum -y update
yum -y install gcc
yum -y install openssl-devel
yum -y install wget

wget http://python.org/ftp/python/2.7.3/Python-2.7.3.tar.bz2
tar -jxvf Python-2.7.3.tar.bz2 
cd Python-2.7.3  
./configure
make all
make install 
mv /usr/bin/python /usr/bin/python2.6.6
ln -s /usr/local/bin/python2.7 /usr/bin/python 
sed -i '1s/python/python2.6.6/' /usr/bin/yum

cd
yum install python-setuptools
wget https://bootstrap.pypa.io/ez_setup.py -O - | python
wget http://pypi.python.org/packages/source/d/distribute/distribute-0.6.10.tar.gz
tar zxvf distribute-0.6.10.tar.gz
cd distribute-0.6.10
python setup.py install
cd
easy_install pip
pip install shadowsocks

IP_ADDR=`ifconfig | awk -F':' '/inet addr/ && NR < 8{print $2}' | cut -d' ' -f1`

cat > /etc/shadowsocks.json << EOF
{
    "server":"$IP_ADDR",
    "port_password":{
        "7776":"shadowsocks",
        "8887":"shadowsocks",
        "9998":"shadowsocks"
    },
    "timeout":800,
    "method":"aes-256-cfb",
    "fast_open":false,
    "workers":1
}
EOF

cat >> /etc/rc.local << EOF
ssserver -c /etc/shadowsocks.json -d start
EOF

ssserver -c /etc/shadowsocks.json -d start
if [ $? -eq 0 ]
then
    echo "shadowsocks已启动..."
else
    echo "shadowsocks启动异常..."
fi

echo "
    =========================[ shadowsocks command ]==========================
    |  启动shadowsocks服务: ssserver -c /etc/shadowsocks.json -d start        |
    |  关闭shadowsocks服务: ssserver -c /etc/shadowsocks.json -d stop         |
    |  重启shadowsocks服务: ssserver -c /etc/shadowsocks.json -d restart      |
    ==========================================================================

    =========================[    win_turn 提醒您   ]==========================
    |  ip地址:   $IP_ADDR                                                     |
    |  端 口1:   7776                                                         |
    |  密 码1:   shadowsocks                                                  |
    |  端 口2:   8887                                                         |
    |  密 码2:   shadowsocks                                                  |
    |  端 口2:   9998                                                         |
    |  密 码2:   shadowsocks                                                  |
    ==========================================================================
"
```

# 附录
vi /etc/shadowsocks.json
修改在停启之后生效，停启命令:
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
ssserver -c /etc/shadowsocks.json -d restart

端下载地址
Windows
https://github.com/shadowsocks/shadowsocks-windows/releases
https://github.com/shadowsocks/shadowsocks-qt5/releases
Mac OS X
https://github.com/shadowsocks/ShadowsocksX-NG/releases
Linux
https://github.com/shadowsocks/shadowsocks-qt5/wiki/Installation
https://github.com/shadowsocks/shadowsocks-qt5/releases
ios
https://itunes.apple.com/app/apple-store/id1070901416?pt=2305194&ct=shadowsocks.org&mt=8
https://github.com/shadowsocks/shadowsocks-iOS/releases
android
https://play.google.com/store/apps/details?id=com.github.shadowsocks
https://github.com/shadowsocks/shadowsocks-android/releases

# ref
https://www.wervps.com/bwhss



..由于你的 VPS 内核支持开启 BBR ...已经为你启用 BBR 优化....




---------- V2Ray 配置信息 -------------

 地址 (Address) = 192.255.199.17

 端口 (Port) = 55511

 用户ID (User ID / UUID) = 25de35b3-ba55-4bc5-99ae-af5cb92da462

 额外ID (Alter Id) = 233

 传输协议 (Network) = tcp

 伪装类型 (header type) = none

---------- END -------------

V2Ray 客户端使用教程: https://233v2.com/post/4/

提示: 输入 v2ray url 可生成 vmess URL 链接 / 输入 v2ray qr 可生成二维码链接

免被墙..推荐使用JMS: https://getjms.comq123
