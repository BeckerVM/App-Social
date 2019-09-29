const express = require('express');
const router = express.Router();

// @route  GET api/profile
// @desc   TEST route
// @access PUBLIC
router.get('/test', (req, res) => res.send('profile test route'));

module.exports = router;