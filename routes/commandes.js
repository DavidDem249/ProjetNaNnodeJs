const express = require('express');

const router = express.Router()

router.get('/commandes', (req, res) => res.render("commandes"));

// router.get('/register', (req, res) => res.render("register"));

module.exports = router;