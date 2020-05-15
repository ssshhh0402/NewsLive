let puppeteer = require('puppeteer');
let cheerio = require('cheerio');
let delay = require('delay');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const inputText = `조재익 해설위원
    진정되는듯 하던 국내 코로나19 감염 사태가 재유행의 기로에 놓였습니다. 이태원 클럽 방문에서 비롯된 감염 확진자들이 크게 늘고 있기 때문입니다. 문제는 클럽을 다녀간 이들이 누구인지 60% 정도는 아직도 파악이 안 된다는 겁니다. 이들 가운데 상당수가 지역사회에서 지금 이 시간에도 바이러스 전파자가 되고 있다고 봐야 합니다.
    황금연휴로 불리던 지난달 하순부터 이달 초까지 이태원 클럽들을 다녀간 이들이 5천여 명에 달합니다. 이 가운데 3천 명 정도는 아직도 연락조차 닿지 않고 있습니다. 초대형 집단감염을 불렀던 신천지 대구교회 사례에선 신도들 대부분 명단이라도 확인이 돼서 격리하고 진단검사를 실시할 수 있었지만 이번은 다릅니다. 클럽 방문 사실 자체를 숨기는 경향이 있단 말이 나오고 있습니다. 성소수자들이 주로 가는 클럽이라 이곳에 들렀다는 사실 만으로도 사회적 편견에 시달릴 수 있다는 우려 때문이라고 합니다. 하지만 1분 1초라도 빨리 클럽 방문자들과 이들이 접촉한 사람들을 찾아내지 못한다면 우리는 중대 사태에 직면하게 될 것입니다. 무증상 감염자가 많은 탓에 이른바 '조용한 전파'가 만연한다면 사태는 걷잡을 수 없이 커질 겁니다. 따라서 이태원 클럽 방문자들은 우선 가족, 친구를 불문하고 다른 사람과 접촉하지 말아야 합니다. 그리고 한시라도 빨리 자발적으로 진단검사를 자청해 받아야 합니다. 본인은 물론 가족과 직장 동료, 지인들의 건강을 보호하는 길입니다. 우리 사회는 성소수자들이 주로 가는 클럽을 방문했다고 비난해선 안 됩니다. 방문자들이 부담 없이 검사를 받을 수 있도록 여건을 만들어줘야 합니다. 그래서 방역당국이 이태원 클럽을 특정하지 않더라도 익명으로라도 검사를 받도록 조치한 건 잘한 일입니다. 다른 유흥업소들도 이번 사례를 타산지석으로 삼을 일입니다.
    코로나사태를 모범적으로 극복해가고 있는 K방역의 공든 탑이 한 순간에 무너질 처지입니다. 이태원 클럽 방문자 가운데 연락이 닿지 않는 3천여 명은 방역당국의 호소에 응답해야 합니다. 국민의 건강, 나라의 경제가 달린 중차대한 문제입니다. 뉴스해설이었습니다.`;

    await page.goto('https://www.bigkinds.or.kr/v2/analysis/featureExtraction.do');

    let result = await page.evaluate((text) => {
        document.getElementById('input-text-feature').value = text;
        return document.getElementById('input-text-feature').value;
    },inputText);
    console.log(result);

    await page.click('button[class="btn btn-primary btn-extract-features pl-5 pr-5"]');

    await delay(1500);
//<a href="#morp-json-tab" data-toggle="tab" aria-expanded="true">
    await page.click('ul[class="nav nav-tabs styled"] li a[href="#morp-json-tab"]');
    console.log("===================================================");
    const el = await page.waitFor('div[class="tab-content mt-2 mb-2 extract-result-tab"] div[class="tab-pane active"] div[class="col-xs-12"] div pre');
    // console.log(el);
    // conset data = await page.
    const data = await page.evaluate(text => text.textContent, el);
    console.log(data);
    
    
    

    // data('span.key').each( ( key, val ) => {
        // console.log(val.text());
    // });
    await browser.close();   
})();