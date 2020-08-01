
const express     = require ('express');
const app		  = express();
const port        = 8000;

require('./app/api/routes')(app);
app.listen(port, () => {
    console.log("Listening for HTTP requests on the port " + port);
})