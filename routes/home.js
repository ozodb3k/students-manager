const express = require('express');
const router = express.Router();
const Students = require('../Models/Students');

router.get('/', async (req, res) => {
    let students = await Students.find().sort({ score: -1 });

    const { stmonth, enmonth } = req.query;

    if (stmonth && enmonth) {
        students = await Students.find({ month: { $gt: +stmonth - 1, $lt: +enmonth + 1 } }).sort({ score: -1 });
    }

    res.render('home', {
        students
    })
})

router.get('/:id', async (req, res) => {
    try {
        const student = await Students.findById(req.params.id);
        res.render('studentpage', {
            student
        });
    } catch (error) {
        console.log(error);;
        res.redirect('/');
    }
})

module.exports = router;