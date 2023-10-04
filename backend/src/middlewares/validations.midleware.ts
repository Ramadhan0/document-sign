import response from '../helpers/response'
import { NextFunction, Request, Response } from 'express'
import { getStoredCash, removeCache, storeCache } from '../helpers/saveDataToRedis'


export const validateDocument = async (req: Request, res: Response, next: NextFunction) => {
  return res.send("Document Validation")
}
