const express = require('express')
const app = express()
var mysql = require("mysql");
const port = 3000

var bodyParser     =         require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import {getCustInfo} from './GetCustInfo'
import {loanRouter} from './GetLoanInfo'
import {setLoanRouter} from './SetLoanInfo'


app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "",
        connectionLimit: 5, //mysql connection pool length
        database: "proj_444"
      });
	res.locals.connection.connect();
	next();
});
app.use('/getCustInfo', getCustInfo);
app.use('/getLoanInfo', loanRouter);
app.use('/setLoanRouter', setLoanRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))