const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

(async function example() {
  let driver;

  try {
    driver = await new Builder()
      .forBrowser('chrome')
    //   .setChromeOptions(new chrome.Options().headless())
    //   .setFirefoxOptions(new firefox.Options().headless())
      .build();

    // Navigate to the  URL
    await driver.get('http://localhost:3000');

    // Locate the Play button
    const playButton = await driver.findElement(By.css('button'));

    // Click the Play button
    await playButton.click();

    // Wait for the result message to appear
    await driver.wait(until.elementLocated(By.css('.flex.justify-between.mb-2 .font-bold')), 10000);

    // Find the result message element
    const resultMessage = await driver.findElement(By.css('.flex.justify-between.mb-2 .font-bold'));

    // Get the text content of the result message element
    const messageText = await resultMessage.getText();

    // Check if the message text is '99'
    if (messageText === '99') {
        console.log('The result message is 99.');
      } else {
        console.log('The result message is not 99. It is:', messageText);
      }

  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
