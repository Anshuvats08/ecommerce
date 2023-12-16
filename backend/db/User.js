const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    name:String,
    pass:String,
    email:String
})
module.exports=mongoose.model('regs',userschema);