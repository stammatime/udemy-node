const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundRoutes = require('./routes/404');

// registers a middleware that parses the request body
// parses bodys sent thru form, not other methods
// we would use other parsers in that instance
app.use(bodyParser.urlencoded({ extended: false }));  

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(notFoundRoutes);

app.listen(3000);