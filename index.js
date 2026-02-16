const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();

  await browser.close();
  res.send(`<h1>Title of page: ${title}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
