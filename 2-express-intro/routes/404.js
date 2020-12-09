const express = require('express');

const path = require('path');

const router = express.Router();


router.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

module.exports = router;