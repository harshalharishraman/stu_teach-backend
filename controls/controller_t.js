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
const v=require('../valid');
v.ver(req,res);
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

static async l_tacc(req,res){
    try{
        console.log('test 2')
const {name,email,password}=req.body;
if(!name || !email || !password){
return res.status(400).json(new re(null,400,'all fields are required'))
}
console.log('test 3')
const v=require('../valid');
console.log('test 3')
const cv=await v.ver(req,res);
console.log('test 3')
if(!cv){
    return;
}
console.log('test 4')
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