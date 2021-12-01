import express from 'express'
import controller from '../controller/generateAvatar.controller.js'

const router = express.Router()

const routes = (app) => {
    router.get('/avatar', controller.generateAvatar)

    app.use(router)
}

export default routes
