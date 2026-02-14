const express = require('express');

const controller = require('../controllers/author.controller');

const router = express.Router();


router.get('/', controller.getAllAuthors);

router.get('/:id', controller.getAuthorsById);

router.post('/', controller.newAuthor);

router.get('/:id/books', controller.getBooksByAuthor);

module.exports = router;
