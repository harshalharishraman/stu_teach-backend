const j=require('jsonwebtoken')
const re = require('../resvo/res_t');
class tok{
    static async acc_t_gen(n,e,p){
        try{
            console.log('test')
            const t= j.sign({
                name:n,
                email:e,
                password:p
            },process.env.access_sec_k,
        {expiresIn:'30d'})
            console.log(t)
            return t;
        }
        catch(error){
            console.error('error in generationg access token:',error)
            throw error
        }
    }
    static async jwt_verify(req,res,next){
try {const req_head_auth=req.headers.authorization
    if(!req_head_auth){
        return res.status(400).json(null,400,'header missing')
    }
    const acc_tk=req_head_auth.split()[1]
    if(!acc_tk){
        return res.status(400).json(null,400,'token missing')}
    const dec=j.verify(acc_tk,process.env.access_sec_k)
    req.user=dec
    next();  
} catch (error) {
    res.status(500).json(new re(null,500,'invalid token'))
}
    }

}
module.exports=tok