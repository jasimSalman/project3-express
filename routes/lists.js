const express = require('express')
const router = express.Router()
const middleware = require('../middleware')
const listsCtrl = require('../controllers/lists')

router.get(
  '/show/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  listsCtrl.index
)

router.post(
  '/add/:placeId/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  listsCtrl.add
)

router.delete(
  '/delete/:placeId/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  listsCtrl.delete
)

module.exports = router
