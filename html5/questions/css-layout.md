### 盒子模型

### css布局

* 使用float, boostrap源码中的栅格系统, 
```
.row:before,
.row:after {
  display: table;
  content: " ";
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-xs-1, .col-xs-2, .col-xs-3 {
  float: left;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-12 {
  width: 100%;
}
```
* 使用[flexbox][flexbox-ruan], 在caniuse里可以查看浏览器兼容性
```
.box{
  display: flex; //inline-flex;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  //flex-flow: <flex-direction> || <flex-wrap>;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

.item {
  order: <integer>; //属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
  flex-grow: <number>; //定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
  flex-shrink: <number>; //属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
  flex-basis: <length> | auto; //定义了在分配多余空间之前，项目占据的主轴空间（main size）
  //flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  align-self: auto | flex-start | flex-end | center | baseline | stretch; //允许单个项目有与其他项目不一样的对齐方式

}
```
* 使用display/position设置 
```
.box {
  display: block; 
}
.item {
  display: inline-block; 
  width: 25%; 
}
```
