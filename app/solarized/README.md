# The tutorial of solarized

[official website][solarized]

### install
 
```
git clone git://github.com/altercation/solarized.git
```

### item2
 
#### problem
 
* Failed to load preferences form custom directory. Falling back to local copy
> 不勾选 load preferences from a custom folder 

#### hight light

```
vim ~/.bash_profile
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

### ls

```
$ vi ~/.bash_profile
export CLICOLOR=1
```

### vim  

```
$ cd solarized
$ cd vim-colors-solarized/colors
$ mkdir -p ~/.vim/colors
$ cp solarized.vim ~/.vim/colors/
$ vi ~/.vimrc
syntax enable
set background=dark
let 
colorscheme solarized
```


[solarized]:http://ethanschoonover.com/solarized