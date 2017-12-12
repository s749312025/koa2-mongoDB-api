var user = {
	signup: [
		{name: 'username', cn_name: '用户名', rule: 'isNull'},
		{name: 'nickname', cn_name: '昵称', rule: 'isNull'},
		{name: 'password', cn_name: '密码', rule: 'isNull'},
	],
	login: [
		{name: 'username', cn_name: '用户名', rule: 'isNull'},
		{name: 'password', cn_name: '密码', rule: 'isNull'},
	]
}

module.exports = user