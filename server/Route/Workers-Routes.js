const workerRoute = require('express').Router();
const workerController = require('../Controller/Worker-Controller');
workerRoute.get('/',workerController.getAll);
workerRoute.get('/:id',workerController.getById);
workerRoute.post('/',workerController.addWorker);
workerRoute.put('/:id',workerController.updateWorker);
workerRoute.delete('/:id',workerController.deleteWorker);
module.exports = workerRoute;