const express = require('express');

const routes = express.Router();

routes.get('/indeed', (req, res) => {
    res.json({ success: "success" })
});

module.exports =  routes ;