const mongoose = require('mongoose')

const articleModel = require('../schema/article')
const pagenation = require('../config/pagenation')

exports.add = async(ctx, next) => {
	var articleInfor = ctx.request.body;
	var newArticle = new articleModel({
		title: articleInfor.title,
		content: articleInfor.content,
		created: new Date(),
		last_mod_time: new Date(),
    tags: articleInfor.tags,
		role: articleInfor.role ? articleInfor.role : 'normal',
	})
	try {
		await newArticle.save((err, docs) => {
			console.log(docs)
			if(err){
				ctx.body = {status: 'error', data: '添加失败'}
				return
			}
			ctx.body = {status: 'success', data: '添加成功'}
		})
	} catch (error) {
		ctx.body = {status: 'error', data: '添加失败'}
	}
}

exports.list = async(ctx, next) => {
	let articleInfor = ctx.request.body;
	let _option = {};
	let page = pagenation(articleInfor)
	let searchOption = () => {
		if(!articleInfor) {
			return _option
		}
    !articleInfor.title || articleInfor.title == '' ? '' : _option.title = new RegExp(articleInfor.title);
    !articleInfor.tags || articleInfor.tags == '' ? '' : _option.tags = articleInfor.tags;
		!articleInfor._id || articleInfor._id == '' ? '' : _option._id = articleInfor._id;
		return _option
	}
	searchOption()
	try {
		let list = await articleModel.find(_option, { '__v': 0 }).sort({'created':-1}).skip(page.skipNum).limit(page.pageSize)
		ctx.body = {status:'success', data: list}
	} catch (error) {
		ctx.body = {status: 'error', data: error}
	}
}

exports.update = async(ctx, next) => {
	let updateInfor = ctx.request.body;
	let articleId = updateInfor.id;
	delete updateInfor.id
	updateInfor.last_mod_time = new Date();
	try {
		let details = await articleModel.findByIdAndUpdate({"_id":articleId}, updateInfor, {"new": true})
		ctx.body = {status:'success', data: details}
	}catch(error) {
		ctx.body = {status: 'error', data: error}
	}
}

exports.delete = async(ctx, next) => {
	let infor = ctx.request.body;
	let articleId = infor.id;
	try {
		let details = await articleModel.remove({"_id":articleId})
		ctx.body = {status:'success', data: '删除成功'}
	}catch(error) {
		ctx.body = {status: 'error', data: error}
	}
}



