const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// POST Route
router.post('/', (req, res) => {
    const imageToSend = req.body;
    console.log('POSTing new photo: ', imageToSend);
    const sqlText = `INSERT INTO gallery ("path", "description")
                    VALUES ($1, $2);`;
    pool.query(sqlText, [imageToSend.path, imageToSend.description])
    .then((response) => {
        console.log("Added photo to the database", imageToSend);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in db post', error);
        res.sendStatus(500);
    });
});

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let queryText = `UPDATE gallery SET "likes" = "likes" +1 WHERE "id" = $1;`;
    pool.query(queryText, [galleryId])
    .then((result) => {
        console.log('Photo liked!', galleryId);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in like', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY "id" ASC;`; // db query
    pool.query(sqlText)
    .then((result) => {
        console.log('got these from the database', result.rows); // see what we got in the log
        res.send(result.rows); // format response into rows
    }).catch((error) => {
        console.log('Error in gettin gallery', error);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;