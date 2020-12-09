const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // never ran because prev middleware didn't call next

    // we use path.join, so instead of using /s we should keep separate values
    // this ensures that paths will work on different OSs, since windows uses \s and linux uses /s, etc
    // manually putting in absolute path does not work
    res.sendFile(path.join(rootDir, 'views','shop.html'));
    res.send('<h1>Hello from express</h1>');
});

module.exports = router;