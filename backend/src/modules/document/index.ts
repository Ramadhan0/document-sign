import express from 'express'
import { createDopcument } from './document.controller'

const documentRouter = express.Router()

documentRouter.post('/', createDopcument)

export default documentRouter;
