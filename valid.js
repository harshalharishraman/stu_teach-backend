
require('dotenv').config()
console.log('valid test 1');
const re=require('./resvo/res_t');

class v{
static async ver(req,res){
console.log('valid test 1');
    const {name,email,password}=req.body;
console.log('valid test 1');
if(name.length<4){
    return res.status(400).json
    (new re(null,400,'name has less than 4 characters'));
}
console.log('valid test 2');
if((!email.includes('@')) &&
!(email.endsWith('.in')||email.endsWith('.com'))){
    return res.status(400).json
    (new re(null,400,'invalid email'));}
console.log('valid test 3');
 const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?=\S+$).{8,}$/;
console.log('valid test 4');
    if (!passwordRegex.test(password)) {
        return res.status(400).json
    (new re(null,400,`invalid password(atleast 1 no,special char,1 upper 
        and lowercase and atleast 8 char long and no spaces)`));
    }
console.log('valid test 5');
return true}}
    module.exports=v;