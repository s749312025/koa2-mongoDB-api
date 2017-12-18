var article = {
	add: [
		{name: 'title', cn_name: '标题', rule: 'isNull'},
		{name: 'content', cn_name: '内容', rule: 'isNull'}
	],
	update: [
		{name: 'id', cn_name: '文章ID', rule: 'isNull'}
	]
}

module.exports = article