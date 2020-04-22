const express = require('express')
const router = express.Router()
const { all,/* findById,/* save, remove, saveTeste*/findByEmail} = require('../modules/src/controller')

router.get('/', all)
//router.get('/:id', findById)
//router.post('/', save)
//router.put('/:id', save)
//router.delete('/:id', remove)*/
//router.get('/saveTeste',saveTeste)
router.post('/login',findByEmail)
//router.get('/user',findByUser)


module.exports = router

