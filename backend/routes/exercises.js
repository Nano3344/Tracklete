const router = require('express').Router();

let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
  .then(exercises => res.json(exercises))
  .catch(err => res.json('We got an error'));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const repitition = Number(req.body.duration);

  const Exercise = new Exercise({
    description,
    duration,
    repitition
  });

  Exercise.save()
  .then(() => res.json('exercises added'))
  .catch(err => res.status(400).json('Error in adding'));
});

module.exports = router;
