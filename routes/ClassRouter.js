const Router = require('express').Router();
const controller = require('../controllers/ClassController');
const middleware = require('../middleware');


Router.get('/', controller.GetAllClasses);
Router.get('/class/:class_id', controller.GetClassById);
Router.get('/user/:user_id', controller.GetClassByUserId);
Router.post(
	'/',
	middleware.stripToken,
	middleware.verifyToken,
	controller.CreateClass
);
Router.put(
	'/:class_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.UpdateClassById
);
Router.delete(
	'/:class_id',
	middleware.stripToken,
	middleware.verifyToken,
	controller.DeleteClassById
);

module.exports = Router;

