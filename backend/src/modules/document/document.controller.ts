import { v4 } from 'uuid'
import { Request, Response } from 'express'
import response from '../../helpers/response'
import { getDateFromTimestamp } from '../../helpers/generateDate'
import { create } from './document.service'
import editDocument from '../../helpers/editDocument'

// cerate document controller
export const createDopcument = async (req: Request, res: Response) => {
  try {

    console.log("Doicument controller")
    const edit = await editDocument()

    console.log(edit)
    return res.send("Thank you for your document")
  } catch (error) {
    console.error(error)
    return res.send("Server Error")
  }
}

