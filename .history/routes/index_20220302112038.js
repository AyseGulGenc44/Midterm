var express = require('express');
var router = express.Router();

let movieController = require('../controllers/index');

// Router for lists books function
router.get('/list', movieController.movieList);

// Router for book details function
router.get('/details/:id', movieController.details);

// Routers for edit functions
router.get('/edit/:id', movieController.displayEditPage);
router.post('/edit/:id', movieController.processEditPage);

// Router for Delete function
router.get('/delete/:id', movieController.performDelete);

// Routers for Add functions
router.get('/add', movieController.displayAddPage);
router.post('/add', movieController.processAddPage);

module.exports = router;
