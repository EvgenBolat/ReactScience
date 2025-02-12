import axios from 'axios'
import { Request, Response } from 'express'

function getAll(request: Request, response: Response) {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(responseAxios => {
      return response.json(responseAxios.data)
  })
}

export default getAll