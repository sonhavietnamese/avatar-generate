import express from 'express'
import cors from 'cors'
import routes from './routes/generate.route.js'

const app = express()
app.use(cors())

routes(app)

const port = process.env.PORT || 8888
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Connected to port ${port}`)
})
