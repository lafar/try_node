var express = require('express');

var bookRouter = express.Router();
var sql = require('mssql');

var router = function(nav){
var books = [
    {
        title :'aaaa',
        author :'bbb'
    },
     {
        title :'cccc',
        author :'ddd'
    },
     {
        title :'eeee',
        author :'fff'
    }
];

bookRouter.route('/')
            .get(function(req,res){
    var request = new sql.Request();
    request.query('select * from dbo.booksTest',
                 function(err,recordset){
        res.render('bookListView', {title:'Books',
                                nav: nav,
                        books:recordset
                        });
    });
    
});

bookRouter.route('/:id')
            .get(function(req,res){
    var id = req.params.id;
    var ps = new sql.PreparedStatement();
    ps.input('id', sql.Int);
    ps.prepare('select * from dbo.booksTest where id = @id',
              function(err){
        ps.execute({id: req.params.id},
                  function(err,recordset){
            res.render('bookView', {title:'Books',nav: nav,
                        book:recordset[0] });
          //  console.log(recordset[0]);
                       
        });
    });
    
});
    return bookRouter;
};
module.exports = router;
