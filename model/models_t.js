const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);

class ModelPanel{
    static async create_teach_acc(n,e,p){
        try {
            const [rw]= await knex('teach_tb3').insert({
                name:n,
                email:e,
                password:p
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
}

module.exports=ModelPanel;