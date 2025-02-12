import axios from 'axios'
import { Request, Response } from 'express'

function getById(request: Request, response: Response) {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${request.params.id}`)
    .then(responseAxios => {
      response.json(responseAxios.data)
  })
}

export default getById