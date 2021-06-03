const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
 router.get('/', (req, res) => {
  const qryText = `
  SELECT * FROM "item";`;
  pool.query(qryText).then((response) => {
    console.log('Items in DB', response.rows);
    res.send(response.rows);
  }).catch((error) => {
    console.log('Error in GET req to DB', error);
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  console.log(req.body);
  const insertItem = `INSERT INTO "item" ("description", "image_url") VALUES ($1, $2);`;

  // create our pool
  pool
    .query(insertItem, [req.body.item.description, req.body.item.image_url])
    .then((result) => {
      console.log('New item:', result.rows)

      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in adding item', error);
      res.sendStatus(500);
    })


});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
