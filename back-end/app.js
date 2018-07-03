var express = require('express');
var app = express();
let bodyParser = require('body-parser')
let router = require('./routes/router')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.use(bodyParser.json());
app.use(router)

app.listen(8083,()=>{
    console.log('服务器已启动')
})
