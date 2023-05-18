const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'

// POST /api/notes (create note)
router.post('/notes', ensureLoggedIn, notesCtrl.create);

//DELETE /api/notes/
router.delete('/notes/:id', ensureLoggedIn, notesCtrl.delete);

module.exports = router;