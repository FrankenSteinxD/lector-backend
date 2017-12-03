import { Router } from 'express'

import * as listMiddleware from '../middlewares/list'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.param('id', listMiddleware.findList)

router.route('/')
  /**
   * @api {post} /api/lists/ Create List
   * @apiName CreateList
   * @apiGroup List
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 201 CREATED
   *   {
   *     "__v": 0,
   *     "name": "أدب",
   *     "user": "5a166233aeb0e40e70e486c9",
   *     "_id": "5a240d9e7377ea0ecc388caa",
   *     "isDefault": false,
   *     "stories": []
   *   }
   */
  .post(isAuthenticated, listMiddleware.createList)

router.route('/:id')
  /**
   * @api {get} /api/lists/:id Get List
   * @apiName GetList
   * @apiGroup List
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "__v": 0,
   *     "name": "أدب",
   *     "user": "5a166233aeb0e40e70e486c9",
   *     "_id": "5a240d9e7377ea0ecc388caa",
   *     "isDefault": false,
   *     "stories": []
   *   }
   */
  .get(listMiddleware.getList)
  /**
   * @api {delete} /api/lists/:id Delete List
   * @apiName DeleteList
   * @apiGroup List
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "__v": 0,
   *     "name": "أدب",
   *     "user": "5a166233aeb0e40e70e486c9",
   *     "_id": "5a240d9e7377ea0ecc388caa",
   *     "isDefault": false,
   *     "stories": []
   *   }
   */
  .delete(isAuthenticated, listMiddleware.deleteList)

export default router
