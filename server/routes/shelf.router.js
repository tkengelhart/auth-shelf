const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
 router.get('/', (req, res) => {
  const qryText = `
  SELECT * FROM "item";`;
  pool.query(qryText).then((response) => {
    // console.log('Items in DB', response.rows);
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
  const insertItem = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`; // add a $3 for the "user_id"

  // create our pool
  pool
    .query(insertItem, [req.body.item.description, req.body.item.image_url, req.user.id]) // $3 should be the req.user.id
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
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
      // // if user is not logged in, bail out early
    // this is the same thing as just using rejectUnauthenticated above
    // if (req.isAuthenticated() === false) {
    //     res.sendStatus(401);
    //     return;
    // }


  console.log('the target is', req.body.targetID); 
  console.log('the body is', req.body); // SHOULD be the target ID. Can compare the req.user.id to this to see if they are authenticated or not

    console.log(req.params.id);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);


    // If statement to check user.id equals the targeted data's user_id. If false send back a 403

    // if (req.user.id !== req.body){
    //   res.sendStatus(403);
    //   return;
    // }




    const queryText = `DELETE FROM "item" WHERE "id" = $1
    AND "user_id" = $2;
    `;

    pool.query(queryText, [req.params.id, req.user.id])
        .then(() => res.sendStatus(201))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        }
    );

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
