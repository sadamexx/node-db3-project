const db = require('../data/db-config.js');

module.exports = {
    add,
    addStep,
    find,
    findById,
    findSteps,
    remove,
    update
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
    .where("scheme_id", id );
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
function addStep(step, scheme_id){
    // const {instructions, step_number} = step
    return 
    db('steps')
    .join('schemes', "schemes.id", "steps.scheme_id")
    .insert(step, scheme_id, "id")
    // .then(id => {
    //     return db('steps')
    //     .where({ id : id[0] })
    // })
}
