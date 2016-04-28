// 设置项目属性
fis.set('project.name', 'yhtml5-fis3');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '_');
fis.set("project.ignore", [''])
fis.match('/**', {
	release: '/runoob',
})
fis.match('{/*.js,/*.css}', {
	release: '/static/img/$1',
	url: '../static/img/$1',
})