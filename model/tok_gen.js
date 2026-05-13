const j=require('jsonwebtoken')
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

}
module.exports=tok