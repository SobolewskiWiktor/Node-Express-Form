const express = require('express');
const { render } = require('..');
const router = express.Router();

const pageControl  = require('../controllers/pageController');
const formControl = require('../controllers/applicationsControler')
const backControl = require('../controllers/backController');
router.get('/', pageControl.home);

router.post('/applications', formControl.store)

router.post('/back', backControl.back);

module.exports = router; 