
# Uninstall Yarn

Uninstalling Yarn often leaves behind residual files.

Additionally, after npm 6.x, the advantages of Yarn are no longer significant, so it is recommended to use npm directly.

If Yarn is still available after running `npm uninstall -g yarn`, you can try manually deleting it (Mac OSX):

```sh
rm -rf /usr/local/lib/node_modules/yarn
rm -rf /usr/local/bin/yarn yarnpkg
```

Other system uninstall methods:

```sh
brew: brew uninstall yarn

tarball: rm -rf "$HOME/.yarn"

npm: npm uninstall -g yarn

ubuntu: sudo apt-get remove yarn && sudo apt-get purge yarn

debian: yum uninstall yarn

windows: choco uninstall yarn
```

Method:
Use the `which yarn` command to find the location of the command.
Use `ls -al` to view the actual location of the symbolic link.
