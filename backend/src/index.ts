import express from 'express'
import indexRouter from './modules'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', indexRouter)

const server = app.listen(3003, () =>
  console.log(`
🚀 Server ready at: http://localhost:3003`),
)
