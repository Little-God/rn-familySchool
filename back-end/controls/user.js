var db = require('../dbmysql/db')
var mysql = require('mysql');

let pool = mysql.createPool(db)

module.exports = {
    testajax(req,res){
        console.log(req.body)
        res.send({code:200,msg:'done'});
    },
    fetchAll(req,res){
        pool.getConnection((err,connection) => {
            connection.query('select * from user',(err,rows)=>{
                res.json({code:200,msg:'ok',user:rows})
                connection.release();
            })
        })
    }
}