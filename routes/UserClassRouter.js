const Router = require('express').Router();
const controller = require('../controllers/UserClassController');

Router.get('/pk', controller.GetAllUserClassesWithPk);
Router.get('/', controller.GetAllUserClasses);
Router.get('/all', controller.GetAllUsersAndClasses);
Router.get(
	'/user/:user_id',
	controller.GetAllUsersAndClassesByUserId
);
Router.get(
	'/class/:class_id',
	controller.GetAllUsersAndClassesByClassId
);
Router.post(
	'/user/:user_id/class/:class_id',
	controller.CreateUserClass
);
Router.put('/:user_class_id', controller.UpdateUserClassById);
Router.delete('/:user_class_id', controller.DeleteUserClassById);

module.exports = Router;


