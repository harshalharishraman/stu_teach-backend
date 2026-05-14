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
        {expiresIn:'1m'})
            return t;
        }
        catch(error){
            console.error('error in generationg access token:',error)
            throw error
        }
    }
    static async ref_t_gen(n,e,p){
        try{
            console.log('test')
            const t= j.sign({
                name:n,
                email:e,
                password:p
            },process.env.refresh_sec_k,
        {expiresIn:'7d'})
            return t;
        }
        catch(error){
            console.error('error in generationg access token:',error)
            throw error
        }
    }

    static async jwt_verify(req,res,next){
try {
    
    const req_head_auth=req.headers.authorization

    //console.log(`${req_head_auth}`)
    if(!req_head_auth){
        return res.status(400).json(null,400,'header missing')

    }

    const acc_tk=req_head_auth.split(" ")[1]

    if(!acc_tk){
              return res.status(400).json(new re(null,400,'token missing'))
  
    }


    const dec=j.verify(acc_tk,process.env.access_sec_k)
    req.user=dec
    next();  
} catch (error) {
    return res.status(500).json(new re(null,500,'invalid or expired token'))
}
    }

    static async refresh(req,res){
        try{
        const {refresh_token}=req.body
        if(!refresh_token){
            return res.status(400).json(null,400,'missing token')
        }
        const v=j.verify(refresh_token,process.env.refresh_sec_k)
        const n_acc_tk=j.sign({
            tid:v.tid,
            name:v.name,
            email:v.email,
            password:v.password,

        },process.env.access_sec_k,{
            expiresIn:'5m'
        });
        const n_ref_tk=j.sign({
            tid:v.tid,
            name:v.name,
            email:v.email,
            password:v.password,

        },process.env.refresh_sec_k,{
            expiresIn:'7d'
        });
        res.status(200).json(new re({"access_token":n_acc_tk,"refresh_token":n_ref_tk,
        },200,'refresh sucessful'));}
        catch(error){
            return res.status(403).json(new re(null,403,'invalid refresh token'))
        }

        }
    

}
module.exports=tok