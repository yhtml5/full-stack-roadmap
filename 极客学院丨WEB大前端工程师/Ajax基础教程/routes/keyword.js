/*=============================================
 * 搜索框关键词命中功能
 *========================================== */
var express = require('express');
var router = express.Router();

var TEST_DATA = ['c#从入门到精通', 'c++ primer', 'Object c语言基础', 'HTML5 and CSS3', 'canvas api', 'android体系结构', 'Bootstrap 精讲', 'Javascript高级编程', 'Java Web开发', 'Express框架指南'];


router.all('/hit', function(req, resp) {
	var keyword = req.query.keyword;
	if (!keyword) {
		keyword = req.body.keyword;
	}
	var retlist = select(keyword);
	
	setTimeout(function() {
		resp.json(retlist);
	}, 2000);
});

function select(keyword) {
	var ret = [];
	if (keyword) {
		keyword = keyword.toLowerCase();
		for (var i = 0, len = TEST_DATA.length; i < len; ++i) {
			if (TEST_DATA[i].toLowerCase().indexOf(keyword) == 0) {
				ret.push(TEST_DATA[i])
			}
		}
	}
	return ret;
}

module.exports = router;