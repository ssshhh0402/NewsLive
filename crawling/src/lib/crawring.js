let puppeteer = require('puppeteer');
let cheerio = require('cheerio');

class crawring {

    /**
     * 
     * @param {String} text 
     */
    // run(text) {
    //     return new Promise(async(resolve,reject)=>{
    //         const browser = await puppeteer.launch();
    //         const page = await browser.newPage();
    //         const inputText = text;

    //         await page.goto('https://www.bigkinds.or.kr/v2/analysis/featureExtraction.do');

    //         let result = await page.evaluate((text) => {
    //             document.getElementById('input-text-feature').value = text;
    //             return document.getElementById('input-text-feature').value;
    //         }, inputText);
    //         console.log(result);

    //         await page.click('button[class="btn btn-primary btn-extract-features pl-5 pr-5"]');

    //         console.log("===================================================");
    //         const el = await page.waitFor('div[class="tab-content mt-2 mb-2 extract-result-tab"] div[class="tab-pane active"] table');
    //         const html = await page.evaluate(text => text.outerHTML, el);
    //         const $ = cheerio.load(html);
    //         //주의점 table 안의 tbody를 가져와서 파싱을 하려니 안됨
    //         //아마도 html에서 table이없는 tbody 즉, 문법적 오류나는 부부을 파싱을 못하는건 당연한 걸지도...
    //         const ranking = [];

    //         for (let i = 0; i < 10; i++) {
    //             const $row = $(`#0-${i}`);
    //             ranking.push($row.text());
    //         }
    //         // console.log(ranking);
    //         await browser.close();
    //         resolve(ranking);
    //     });
    async run(text) {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-gpu",
            ]
        });
        const page = await browser.newPage();
        const inputText = text;

        await page.goto('https://www.bigkinds.or.kr/v2/analysis/featureExtraction.do',{
            timeout: 0,
            waitUntil: 'networkidle0',
          });

        let result = await page.evaluate((text) => {
            document.getElementById('input-text-feature').value = text;
            return document.getElementById('input-text-feature').value;
        }, inputText);
        console.log(result);

        await page.click('button[class="btn btn-primary btn-extract-features pl-5 pr-5"]');

        console.log("===================================================");
        const el = await page.waitFor('div[class="tab-content mt-2 mb-2 extract-result-tab"] div[class="tab-pane active"] table');
        const html = await page.evaluate(text => text.outerHTML, el);
        const $ = cheerio.load(html);
        //주의점 table 안의 tbody를 가져와서 파싱을 하려니 안됨
        //아마도 html에서 table이없는 tbody 즉, 문법적 오류나는 부부을 파싱을 못하는건 당연한 걸지도...
        const ranking = [];

        for (let i = 0; i < 10; i++) {
            const $row = $(`#0-${i}`);
            ranking.push($row.text());
        }
        // console.log(ranking);
        await browser.close();
        return ranking;
    }
}


module.exports = crawring