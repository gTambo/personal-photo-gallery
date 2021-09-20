const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data'); // No longer needed for stretch goals
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// POST Route // Stretch goal
router.post('/', (req, res) => {
    const imageToSend = req.body;  // request info recieved from client stored in variable
    console.log('POSTing new photo: ', imageToSend);
    const sqlText = `INSERT INTO gallery ("path", "description")
                    VALUES ($1, $2);`; // sanitary database query with pg
    pool.query(sqlText, [imageToSend.path, imageToSend.description]) // id and initial likes are dealt with by DB
    .then((response) => {
        console.log("Added photo to the database", imageToSend);
        res.sendStatus(200); //Yay!
    }).catch((error) => {
        console.log('Error in db post', error);
        res.sendStatus(500); // Uh-oh.
    });
});

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params); 
    const galleryId = req.params.id; // id of row to modify sent as param
    let queryText = `UPDATE gallery SET "likes" = "likes" +1 WHERE "id" = $1;`; // db query, so sanitary, 
    pool.query(queryText, [galleryId]) // thank you, pool, for bringing 'pg' into the picture
    .then((result) => {
        console.log('Photo liked!', galleryId);
        res.sendStatus(200); // looks like it worked!
    }).catch((error) => {
        console.log('Error in like', error);
        res.sendStatus(500); // "somebody fix me!"
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY "id" ASC;`; // db query
    pool.query(sqlText) // send through pg, via pool
    .then((result) => {
        console.log('got these from the database', result.rows); // see what we got in the log
        res.send(result.rows); // format response into rows
    }).catch((error) => {
        console.log('Error in gettin gallery', error);
        res.sendStatus(500); // It no-go
    })
}); // END GET Route

module.exports = router;