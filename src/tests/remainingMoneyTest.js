const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

(async function example() {
  let driver;

  try {
    driver = await new Builder()
      .forBrowser('chrome')
      .build();

    await driver.get('http://localhost:3000');

    // Locate the Play button
    const playButton = await driver.findElement(By.css('button'));

    // Check if the Play button is enabled
    let isPlayButtonEnabled = await playButton.isEnabled();

    // Play the game until remaining money is 0
    while (isPlayButtonEnabled) {
      await playButton.click();

      // Wait for the remaining money element to update
      await driver.wait(until.elementLocated(By.css('.flex.justify-between.mb-2 span.font-bold')), 10000);

      // Find the remaining money element
      const remainingMoneyElement = await driver.findElement(By.css('.flex.justify-between.mb-2 span.font-bold'));

      // Get the remaining money value
      const remainingMoney = parseInt(await remainingMoneyElement.getText(), 10);

      // Check if remaining money is 0
      if (remainingMoney === 0) {
        break;
      }
    }

    // Attempt to play with 0 remaining money
    await playButton.click();

    // Wait for the alert to appear
    await driver.wait(until.alertIsPresent(), 10000);

    // Switch to the alert
    const alert = await driver.switchTo().alert();

    // Get the alert text
    const alertText = await alert.getText();

    // Log the alert text
    console.log('Alert text:', alertText);

    // Accept the alert
    await alert.accept();

  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
