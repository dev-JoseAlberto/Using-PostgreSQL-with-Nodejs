const express = require('express');
const router = express.Router();

router.get('/post', async function (rec, res){});
router.get('/post/:id', async function (rec, res){});
router.post('/post', async function (rec, res){});
router.put('/post/:id', async function (rec, res){});

module.exports = router;