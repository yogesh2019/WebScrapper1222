const puppeteer = require('puppeteer');
const data = {
    list: []
};
async function main(skill) {
    const browser = await puppeteer.launch({ headless: false });
    browser.close();
}


module.exports = main;