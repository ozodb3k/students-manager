const express = require('express');
const router = express.Router();
const Students = require('../Models/Students');

router.get('/', (req, res) => {
    res.send('/api get request');
})

router.post('/add', async (req, res) => {
    const { name, surname, month, group, score } = req.body;

    const newStudent = new Students({
        name, surname, month, group, score: +score
    });

    try {
        await newStudent.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.json(error.errors);
    }

})

router.post('/scoreup', async (req, res) => {
    const { score, id } = req.body;

    try {
        const oldScore = await Students.findById(id);

        await Students.findByIdAndUpdate(id, {
            score: +oldScore.score + +score
        })

        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.json(error.errors);
    }
})

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await Students.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    res.redirect('/');
})

module.exports = router;