import express from 'express'
import documentRouter from './document'

const indexRouter = express.Router()

indexRouter.use('/home', (req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

indexRouter.use('/document', documentRouter)

export default indexRouter;
