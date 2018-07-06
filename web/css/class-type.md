### 选择器种类
* 通用选择器 | *
* 类选择器 | .a
* id选择器 | #id
* 后代选择器 | .a .b
* 元素选择器 | div
* 存在和值（Presence and value）属性选择器 | [attr] [attr=val] [attr~=val]
* 子串值（Substring value）属性选择器 | [attr|=val] [attr^=val] [attr$=val] [attr*=val]
* 伪类 | :nth-child() :focus :hover :active
* 伪元素 | ::after ::before
* 组合器和选择器组 | A,B;  A B;  A > B; A + B; A ~ B;

权重: 
行内样式 > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符
!important 
