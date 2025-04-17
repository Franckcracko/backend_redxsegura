import express from 'express'
import cors from 'cors'
import indexRouter from './routes'

const app = express()

app.disable('x-powered-by')

app.use(cors());

app.use('/api', indexRouter)

export default app