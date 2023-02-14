const express = require('express')
const router = express.Router()

const notesCtrl = require('../../controllers/api/notes')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// localhost:3000/api/note
// app.use('/api/notes')
router.post('/', notesCtrl.create)


module.exports = router