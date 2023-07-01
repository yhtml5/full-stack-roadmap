## install-mongodb-on-os-x

```
brew update
brew install mongodb
mkdir -p /data/db

whoami  # admin
sudo chown -R  admin /data
mongod  # sudo
 
show dbs 
use somedbname  # create or use database
```
 

[install-mongodb-on-osx]:https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/