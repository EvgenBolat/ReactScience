import { Router } from 'express'
import getAll from './methods/getAll'
import getById from './methods/getById'

const router = Router()

export const postsController = {
  getById: getById,
  getAll: getAll
}

router.get('/', getAll)
router.get('/:id', getById)

export default router