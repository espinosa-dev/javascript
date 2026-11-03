let add = (persona, vector) => vector.push(persona);
let del = (persona, vector) => vector.splice(vector.indexOf(persona), 1);

module.exports = {
    add:add,
    del:del
}