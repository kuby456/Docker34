const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
  });

  const page = await browser.newPage();
  await page.goto('https://example.com'); // אפשר לשנות ל-URL שאתה רוצה
  const title = await page.title();
  console.log(`Title of page: ${title}`);

  await browser.close();
})();
