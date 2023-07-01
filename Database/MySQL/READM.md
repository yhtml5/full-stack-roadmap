
# MySQL

## Installation

```sh
# Install MySQL
brew install mysql

# Start MySQL server
brew services start mysql

# Configure MySQL server
# We need to run the following script to configure the security of the MySQL server:
mysql_secure_installation
```

MySQL server management commands
Brew provides useful commands to manage the MySQL server.

```sh
# list
brew services list

# Start MySQL server and set it to auto-start.
brew services start mysql

# Stop MySQL server and set it to not auto-start.
brew services stop mysql

# Only start MySQL server.
brew services run mysql

# Start MySQL server.
mysql.server start

# Stop MySQL server.
mysql.server stop
```
