/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
     await knex.schema.createTable('stu_tb',(t)=>{
        t.increments('uid').notNullable();
        t.integer('roll_no').unique().notNullable();
        t.string('name').notNullable();
        t.integer('phy');
        t.integer('chem');
        t.integer('maths');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
 await knex.schema.dropTableIfExists('stu_tb');};
