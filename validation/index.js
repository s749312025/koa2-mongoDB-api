const vaildator = require('validator.tool');
const v = new vaildator();

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
}