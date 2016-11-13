var express = require('express');
var adminRouter = express.Router();
 var sql = require('mssql');
var router = function(nav){
        adminRouter.route('/add')
        .get(function(req,res){
              var request = new sql.Request();
    request.query("INSERT INTO dbo.booksTest (Id, title, author) VALUES ( 11, 'ddd', 'fff')",
                 function(err,recordset){
            res.send(err);
        })});
        return adminRouter;
};

module.exports = router;