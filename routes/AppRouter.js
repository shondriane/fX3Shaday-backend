const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AuthRouter= require('./AuthRouter')
const ClassRouter= require('./ClassRouter')

Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)
Router.use('/classes',ClassRouter)

module.exports = Router
