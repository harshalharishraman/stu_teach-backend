require('dotenv').config();
const m = require('../model/models_t');
const re = require('../resvo/res_t');
const enc=require('bcrypt');
const jg=require('../model/tok_gen')
class control_panelt{
static async c_tacc(req,res){
    try{
const {name,email,password}=req.body;
if(!name || !email || !password){
return res.status(400).json(new re(null,400,'all fields are required'))
}
const v=require('../valid');
v.ver(req,res);
const ck=await m.if_t_exist(email);
if(ck){
    return res.status(409).
    json(new re(null,409,'an account exists with this email'));}
const enc_p=await enc.hash(password,10);
const ac_tk= await jg.acc_t_gen(name,email,enc_p)     
const cr=await m.create_teach_acc(name,email,enc_p,ac_tk);
const d={"sucess":true,
    "access_token":ac_tk
}
res.status(201).json(new re(d,201,`teacher account created using ${email}`))
}catch(error){
    return res.status(500).json(new re(null,500,`internal server issue`))
}
}

static async l_tacc(req,res){
    try{
const {name,email,password}=req.body;
if(!name || !email || !password){
return res.status(400).json(new re(null,400,'all fields are required'))
}
const v=require('../valid');
const cv=await v.ver(req,res);
if(!cv){
    return;
}
const ck=await m.if_t_exist(email);

if(!ck){
   return res.status(401).json(new re(null,401,`invalid credential`)) 
}

const cr=await m.login_teach_acc(name,email,password);

//-----------------------------------
if(cr){
res.status(201).json(new re(null,200,`logged into account using ${email}`))}
else{
    res.status(500).json(new re(null,500,`incorrect credentials`));
}}
catch(error){
    return res.status(500).json(new re(null,500,`internal server issue`))
}
}}

module.exports=control_panelt