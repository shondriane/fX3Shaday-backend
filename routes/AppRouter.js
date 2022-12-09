const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AuthRouter= require('./AuthRouter')
const ClassRouter= require('./ClassRouter')
const UserClassRouter = require('./UserClassRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)
Router.use('/classes',ClassRouter)
Router.use('/userclasses',UserClassRouter)
Router.use('/reviews',ReviewRouter )

module.exports = Router
