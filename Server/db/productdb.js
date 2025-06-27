const mongoose = require("mongoose")
const pschema = mongoose.Schema({
    pname:String,
    pprice:Number,
    pDetails:String,
    pimg:String
});

module.exports=mongoose.model("Product",pschema)