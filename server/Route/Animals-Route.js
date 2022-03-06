const animalRoute = require('express').Router();
const animalController = require('../Controller/Animal-Controller');
animalRoute.get('/',animalController.getAll);
animalRoute.get('/:id',animalController.getById);
animalRoute.post('/',animalController.addAnimal);
animalRoute.put('/:id',animalController.updateAnimal);
animalRoute.delete('/:id',animalController.deleteAnimal);
module.exports = animalRoute;