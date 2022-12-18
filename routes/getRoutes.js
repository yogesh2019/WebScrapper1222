const express = require('express');
const scrape = require("../scrapeFn/scrape");
const routes = express.Router();

routes.get('/indeed', async (req, res) => {
    try {
        let { skill } = req.body;
        skill = 'sde';
        let scrp = await scrape(skill);
        return res.status(200).send({
            status: "ok",
            list: scrp?.list || { l: "l" }
        })
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
});

module.exports = routes;