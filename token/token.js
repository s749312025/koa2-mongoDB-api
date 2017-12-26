var qiniu = require('qiniu')

var accessKey = 'QVYabDASZxDRNdzyCN0Gg3rpiijL-iwVWze56bOP';
var secretKey = 'tk-hmkWnUgEeeChqoTXs7ou99_Uy06aAAnQ_t_8T';

var options = {
    scope: 'ssmmyy',
};

exports.getToken = (ctx, next) => {
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    ctx.body = { status: 'success', data: uploadToken }
}