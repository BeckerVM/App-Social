const express = require('express');
const router = express.Router();

// @route  GET api/posts
// @desc   TEST route
// @access PUBLIC
router.get('/test', (req, res) => res.send('posts test route'));

module.exports = router;