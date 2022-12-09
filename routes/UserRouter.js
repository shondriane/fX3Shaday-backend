const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllUsers)
Router.get('/:user_id', controller.GetUserById)
Router.post('/', controller.CreateUser)
Router.put(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUserById
)
Router.delete(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserById
)

module.exports = Router
