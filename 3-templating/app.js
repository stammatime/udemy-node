const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundRoutes = require('./routes/404');


// non-built in templating engine registration
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// allows us to set global values throughout application
// https://expressjs.com/en/api.html#app.set
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
// this is already the default but adding to be explicit
app.set('views', 'views');


// registers a middleware that parses the request body
// parses bodys sent thru form, not other methods
// we would use other parsers in that instance
app.use(bodyParser.urlencoded({ extended: false }));  

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(notFoundRoutes);

app.listen(3000);