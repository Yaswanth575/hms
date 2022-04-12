var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://admin:adminpwd@localhost:27017/hms-app");

module.exports = {mongoose};
