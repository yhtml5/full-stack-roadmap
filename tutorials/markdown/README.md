# markdown

[创始人 John Gruber 的 Markdown 语法说明](http://wowubuntu.com/markdown/#list)  

[Markdown 中文版语法说明](http://daringfireball.net/projects/markdown/syntax)  

## Rules

`\`: 转义 

1986. What a great season.
1986\. What a great season.

### title

 `#` 第一级标题 `<h1>`
 `##` 第二级标题 `<h2>`
 `######` 第六级标题 `<h6>`

### emphasize

 * 这些文字会生成`<em>`  
 * _这些文字会生成`<u>`_  
 * **这些文字会生成`<strong>`**  
 * __这些文字会生成`<strong>`__  

### br

 * 四个及以上空格加回车。
 * 如果不想打这么多空格，只要回车就为换行，请勾选：Preferences - Themes - Translate newlines to <br> tags

### ul

`* + 空格键`
`TAB + * + 空格键`

 * a 
 * b
     * a.a  
     * a.b

### ol

`数字 + . + 空格键`  
`TAB + 数字 + . + 空格键`
  
 1. a 
 2. b
    2. a.b
    2. a.b

### Task lists

 - [ ] 任务一 未做任务 `- + 空格 + [ ]`
 - [x] 任务二 已做任务 `- + 空格 + [x]`

### img

 ![GitHub set up](http://zh.mweb.im/asset/img/set-up-git.gif)
 格式: ![Alt Text](url)
 
 参考式:  
 ![Alt text][id]  
 [id]: url/to/image  "Optional title attribute"  
 

### link

#### 自动链接  

 email <example@example.com>

 自动生成连接  <http://www.github.com/>  
 
#### 如果你是要链接到同样主机的资源，你可以使用相对路径：
 
[GitHub](http://github.com)

See my [About](/README.md/) page for details.

#### 参考式的链接: 

在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：
 
This is [an example][id] reference-style link.
 
接着，在文件的任意处，你可以把这个标记的链接内容定义出来
 
[id]: http://example.com/  "Optional Title Here"

#### 隐式链接标记

[Google][]  

然后定义链接内容：

[Google]: http://google.com/

由于链接文字可能包含空白，所以这种简化型的标记内也许包含多个单词：
Visit [Daring Fireball][] for more information.

然后接着定义链接：

[Daring Fireball]: http://daringfireball.net/

#### demo

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/        "Google"
[yahoo]:  http://search.yahoo.com/  "Yahoo Search"
[msn]:    http://search.msn.com/    "MSN Search"


### block

 某某说:
 > 第一行引用

 > 第二行费用文字

### code

* 插入反引号 `` ` ``
* `` `foo` ``
* 像这样即可：`<addr>` `code`

### 多行或者一段代码

 ```js
 function fancyAlert(arg) {
   if(arg) {
     $.facebox({div:'#foo'})
   }

 }
 ```

### table 

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


### 删除线

 加删除线像这样用：

  ~~删除这些~~

 ~~昂对~~


### divider 

 ***
 
 * * *
 
 *****
 
 - - -
 
 ---------------------------------------
 
### 学习地址

  http://zh.mweb.im/markdown-syntax-guide-suggest-version-zh.html


[tutorial]:http://zh.mweb.im/markdown-syntax-guide-suggest-version-zh.html
