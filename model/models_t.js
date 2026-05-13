const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);
const b=require('bcrypt')
const jwt=require('jsonwebtoken')
class ModelPanel{
    static async create_teach_acc(n,e,p,ac){
        try {
            const [rw]= await knex('teach_tb3').insert({
                name:n,
                email:e,
                password:p,
                access_token:ac
            }).returning('*');
            
        } catch (error) {
            console.error("Error creating teacher acc:",error);
            throw error;
        }
    } 
    static async if_t_exist(e){
        try{
            const u=await knex('teach_tb3').where({email:e}).first();
            return u
        }catch(error){
            console.error('error in retriving data of such email');
            throw error
        }
    }
    static async login_teach_acc(n,e,ep){
    try{
        const u=await knex('teach_tb3')
        .where({name:n,email:e})
        .first();

        // user not found
        if(!u){
            return false;
        }

        const ch=await b.compare(
            ep,
            u.password
        );/*.hash 1 a 1 direction hash meathod(cant covert 
        hashed passowrd to original) so we need to use .compare*/

        if(ch){
            return true;
        }

        return false;

    }catch(error){

        console.error(
            'error in retrieving data'
        );

        throw error;

    }
}
}

module.exports=ModelPanel;