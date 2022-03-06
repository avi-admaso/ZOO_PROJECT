const Animal = require("../Model/Animals-collection");
const getAll = async (req, res) => {
  await Animal.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send({ message: err }));
};
const getById = async (req, res) => {
  await Animal.findById(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send({ message: err }));
};
const addAnimal = async (req,res) =>{
    await Animal.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(400).send({message:err}))
}
const updateAnimal = async (req,res) =>{
    await Animal.findByIdAndUpdate(req.params.id,req.body)
    .then(data => res.send(data))
    .catch(err => res.status(400).send({message:err}))
}
const deleteAnimal = async (req,res) =>{
    await Animal.findByIdAndRemove(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(400).send({message:err})) 
}
module.exports = {
    getAll,
    getById,
    addAnimal,
    updateAnimal,
    deleteAnimal
}