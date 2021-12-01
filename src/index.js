import express from 'express'
import routes from './routes/generate.route.js'

const app = express()

routes(app)

const port = process.env.PORT || 8888
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Connected to port ${port}`)
})
