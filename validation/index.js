const vaildator = require('validator');
//const v = new vaildator();

const user = require('./user.js')
const article = require('./article.js')

const switchJson = (eventName) => {
	let e = [];
	switch(eventName) {
		case 'signup':
			e = [...user.signup]
			break;
		case 'login':
			e = [...user.login]
			break;
		case 'articleAdd':
			e = [...article.add]
			break;
		case 'articleUpdate':
			e = [...article.update]
			break;
    case 'articleDelete':
      e = [...article.delete]
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
		let _noStr = ''
		switch(rule.rule) {
			case 'isNull':
				if(!data[rule.name]) {
					_noStr = rule.cn_name + '不能为空'
					break
				};
				vaildator.isEmpty(data[rule.name]) ? _noStr = rule.cn_name + '不能为空' : '';
				break;
			case 'isEmail':
				vaildator.isEmail(data[rule.name]) ? '' : _noStr = rule.cn_name + '格式不正确';
				break;
		}
		noStr.length == 0 ? noStr =  _noStr: '';
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