const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use( cors() );
app.use( express.static(`./public/build`) );

app.get('/api/test', ( req, res, next ) => {
  res.status(200).send('Secret Message 2');
});

app.listen( config.port || 3000, () => { console.log(`Server listening on port ${ config.port || 3000 }`) } );