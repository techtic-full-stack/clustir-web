const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://127.0.0.1:27017/businessUserModel";
// db.userModel = require("./UserModel")(mongoose);
module.exports = db;
