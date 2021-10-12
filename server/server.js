const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const gallery = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5000;

const UploaderS3router = require('react-dropzone-s3-uploader/s3router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);

app.use('/s3', UploaderS3router({
    bucket: 'climbtags1',                           // required change to correct bucket name
    region: 'us-east-2',                            // optional
    headers: {'Access-Control-Allow-Origin': '*'},  // optional
    ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
  }));
  

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});