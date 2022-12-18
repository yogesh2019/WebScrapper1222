const puppeteer = require('puppeteer');
const data = {
    list: []
};
async function selectData(data) {
    const items = document.querySelectorAll('td.resultContent');
    const firstTestItem = items[0].firstElementChild.textContent;
    data.list.push(firstTestItem);
    return data;
}
async function scrape(skill) {
    const browser = await puppeteer.launch({ headless: false });
    //geting search and removing the from part till &
    const page = await browser.newPage();
    const options = {
        timeout: 0,
        waituntil: 'networkidle0'
    };

    await page.goto(`https://in.indeed.com/jobs?q=${skill}&l=`, options);
    const jobData = await page.evaluate(selectData, data);
    let response = await jobData;
    console.log(jobData.list[0]);
    browser.close();

}



module.exports = scrape;