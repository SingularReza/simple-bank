var sqlite3 = require('sqlite3').verbose()
// create a sqlite db with specified data
var db = new sqlite3.Database('local.sqlite', sqlite3.OPEN_READONLY)

var getBanksList = function(bankName, bankCity, done) {
    console.log(bankCity, bankName)
    db.all("SELECT * FROM bank_branches WHERE bank_name = ? AND city = ?", [bankName, bankCity], function (err, rows) {
        done(rows)
    })
}

exports.getBanksList = getBanksList
