"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express5 = require('express');
var router = express5.Router();
router.post('/', function (req, res) {
    var _a = req.body, loanerAccount = _a.loanerAccount, loanId = _a.loanId, loanStatus = _a.loanStatus;
    var sql = "UPDATE loanDetails "
        + ("SET loanerAccount = " + loanerAccount + ", loanStatus = \"" + loanStatus + "\" ")
        + ("WHERE id = " + loanId + " ;");
    res.locals.connection.query(sql, function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({ "status": 500, "error": error, "response": null }));
            //If there is error, we send the error in the error section with 500 status
        }
        else {
            console.log("Updated Loaner Id");
            res.send({ "status": 200 });
            //If there is no error, all is good and response is 200OK.
        }
    });
});
exports.setLoanerInLoan = router;
