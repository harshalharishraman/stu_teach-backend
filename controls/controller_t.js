require('dotenv').config();
const m = require('../model/models_t');
const re = require('../resvo/res_t');
const enc=require('bcrypt');
class control_panelt{
static async c_tacc(req,res){
    try{
const {name,email,password}=req.body;
if(!name || !email || !password){
return res.status(400).json(new re(null,400,'all fields are required'))
}
const ck=await m.if_t_exist(email);
if(ck){
    return res.status(409).
    json(new re(null,409,'an account exists with this email'));}
const enc_p=await enc.hash(password,10);
const cr=await m.create_teach_acc(name,email,enc_p);
res.status(201).json(new re(null,201,`teacher account created using ${email}`))
}catch(error){
    return res.status(500).json(new re(null,500,`internal server issue`))
}
}
}
module.exports=control_panelt