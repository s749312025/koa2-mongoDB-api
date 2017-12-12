const vaildator = require('validator');
//const v = new vaildator();

const user = require('./user.js')

const switchJson = (eventName) => {
	let e = [];
	switch(eventName) {
		case 'signup':
			e = [...user.signup]
			break;
		case 'login':
			e = [...user.login]
			break;
		default:
			e = []
	}
	return e;
}

const vaildatorFun = (data, v_type) => {
	let v_json = switchJson(v_type);
	let noStr = '';
	v_json.map((rule) => {
		switch(rule.rule) {
			case 'isNull':
				vaildator.isEmpty(data[rule.name]) ? noStr = rule.cn_name + '不能为空' : '';
				break;
			case 'isEmail':
				vaildator.isEmail(data[rule.name]) ? '' : noStr = rule.cn_name + '格式不正确';
				break;
		}
		if(noStr.length > 0) return false;
	})
	if(noStr.length > 0) {
		return {
			status: 'error',
			data: noStr
		}
	}else {
		return {
			status: 'success'
		}
	}
}

module.exports = vaildatorFun