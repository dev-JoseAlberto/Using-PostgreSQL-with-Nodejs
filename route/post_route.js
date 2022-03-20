const express = require('express');
const router = express.Router();

router.get('/post', async function (req, res){
    res.json([{
        ID:1,
        TITLE:"GUARDIANS OF THE GALAXY",
        DIRECTOR:"JAMES GUNN",
        GENRE:"SCIENCE FICTION & ACTION",
        RELEASE_YEAR:2014,
        DURATION:121
    }]);
});//Used for creating a new record of information
router.post('/post', async function (req, res){});//Used for creating a new record of information 
router.put('/post/:id', async function (req, res){});//Used for updating existing information
router.delete('/post/:id', async function(req,res){});//Used for deleting information
router.get('/post/:id', async function (req, res){});//Used for returning information by id

module.exports = router;