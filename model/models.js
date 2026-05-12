const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);

class ModelPanel{

    static async create_s(d,rn){
        try{
            const [rw]=await knex('stu_tb')
            .insert({
                roll_no:rn,
                name:d.name,
                phy:d.phy,
                chem:d.chem,
                maths:d.maths
            })
            .returning('*');

            return rw;

        }catch(error){
            console.error("Error creating student:",error);
            throw error;
        }
    }

    static async getby_rn(rn){
        try{
            const rw=await knex('stu_tb')
            .where({roll_no:rn})
            .first();

            return rw;

        }catch(error){
            console.error("Error retrieving student:",error);
            throw error;
        }
    }

    static async get_all(){
        try{
            const rw=await knex('stu_tb')
            .select('*')
            .orderBy('roll_no','asc');

            return rw;

        }catch(error){
            console.error("Error retrieving all students:",error);
            throw error;
        }
    }

    static async udate_byid(rn,d){
        try{
            const [rw]=await knex('stu_tb')
            .where({roll_no:rn})
            .update({
                name:d.name,
                phy:d.phy,
                chem:d.chem,
                maths:d.maths
            })
            .returning('*');

            return rw;

        }catch(error){
            console.error("Error updating student:",error);
            throw error;
        }
    }

    static async del_byid(rn){
        try{
            const rw=await knex('stu_tb')
            .where({roll_no:rn})
            .del();

            return rw;

        }catch(error){
            console.error("Error deleting student:",error);
            throw error;
        }
    }

    static async del_all(){//try at last 
        try{
            const rw=await knex('stu_tb').del();

            return rw;

        }catch(error){
            console.error("Error deleting all students:",error);
            throw error;
        }
    }

}

module.exports=ModelPanel;