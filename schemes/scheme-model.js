const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findById,
    findSteps,
    remove,
    update,
    addStep
};

//adds new scheme to database
function add(scheme){
    return db('schemes')
    .insert(scheme, "id");
};

//finds all data in database
function find() {
    return db('schemes');
};

//finds specific scheme by id 
function findById(id){
    return db('schemes')
    .where({ id })
    .first();
};

//finds all steps related to a scheme(id)
function findSteps(id){
    return db('steps')
    .join('schemes', "schemes.id", "steps.scheme_id")
    .select("steps.step_number", "steps.instructions", "schemes.scheme_name")
    .where("scheme_id", id )
    .orderBy("step_number", "asc");
};

//deletes a scheme by id
function remove(id){
    return db('schemes')
    .where({ id })
    .del();
};

//edits a scheme by id and changes
function update(changes, id){
    return db('schemes')
    .where({ id })
    .update(changes);
};

//adds step to a scheme(id)
function addStep(step, id){   
    return db('steps')    
    .insert({...step, scheme_id : id});
};
