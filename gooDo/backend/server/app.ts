import express, { Express } from 'express'
import { usersRouter, inputsRouter } from './routes/lambdaRoutes'
import cors from 'cors'

const app: Express = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/inputs', inputsRouter)

app.listen(3030, () => console.log('listening on port 3030'))
