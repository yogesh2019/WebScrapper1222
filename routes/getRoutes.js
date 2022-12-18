const express = require('express');
const { mainModule } = require('process');

const routes = express.Router();

routes.get('/indeed', async (req, res) => {
    try {
        const { skill } = req.body;
        let scrp = await main(skill);
        return res.status(200).send({
            status: "ok",
            list: scrp?.list || {l:"l"}
        })
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
});

module.exports = routes;