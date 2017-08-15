const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use( cors() );
app.use( express.static(`${__dirname}/public/build`) );

app.get('/api/test', ( req, res, next ) => {
  console.log('API 2 HIT');
  res.status(200).send('API 2 HIT');
});

app.listen( config.port || 3000, () => { console.log(`Server listening on port ${ config.port || 3000 }`) } );