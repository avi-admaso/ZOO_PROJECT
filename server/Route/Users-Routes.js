const userRoute = require('express').Router();
const userController = require('../Controller/User-Controller');
// userRoute.get('/',userController.getAll);
// userRoute.get('/:id',userController.getById);
// userRoute.post('/',userController.addUser);
userRoute.post('/',userController.register);
userRoute.post('/',userController.login);
module.exports = userRoute;