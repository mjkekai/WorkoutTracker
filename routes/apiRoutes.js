const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ( req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}}
    )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '#exercises.duration'
                }
            }
        }
    ])
    .limit(7)
    .sort({ _id: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '#exercises.duration'
                }
            }
        }
    ])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
