const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

(async function example() {
    let driver;

    try {
        driver = await new Builder()
            .forBrowser('chrome')
            .build();

        // Navigate to the URL
        await driver.get('http://localhost:3000');

        let isWinner = false;

        while (!isWinner) {
            // Find the previous money element
            const previousMoney = await driver.findElement(By.css('.flex.justify-between.mb-2 .font-bold'));

            // Get the text content (value) of the previous money element
            const moneyPrevText = await previousMoney.getText();


            // Locate the Play button
            const playButton = await driver.findElement(By.css('button'));

            // Click the Play button
            await playButton.click();

            // Wait for the result message to appear
            await driver.wait(until.elementLocated(By.css('.flex.justify-between.mb-2 .font-bold')), 10000);

            // Find the result message element
            const resultMessage = await driver.findElement(By.xpath('//*[@id="__next"]/div/main/div/div/div[2]/div[2]'));

            // Get the text content of the result message element
            const messageText = await resultMessage.getText();

            // Find the current money element
            const currentMoney = await driver.findElement(By.css('.flex.justify-between.mb-2 .font-bold'));

            // Get the text content (value) of the current money element
            const moneyText = await currentMoney.getText();

            if (messageText === "You won the jackpot!") {
                console.log('The player won the jackpot!');
                if (moneyText > moneyPrevText) {
                    console.log('Money increased correctly');

                    // Check if all slots have the same color
                    const slotColors = await driver.findElements(By.css('.grid.grid-cols-3.gap-4.mb-4 > div'));

                    const slot1Color = await slotColors[0].getAttribute('class');
                    const slot2Color = await slotColors[1].getAttribute('class');
                    const slot3Color = await slotColors[2].getAttribute('class');

                    if (slot1Color === slot2Color && slot2Color === slot3Color) {
                        console.log('All three slots are of the same color.');
                    } else {
                        console.log('The slots do not have the same color.');
                    }

                } else {
                    console.log('Money was not incremented correctly');
                }
                isWinner = true;
            } else {
                console.log('The player did not win the jackpot.', messageText);
                if (moneyText < moneyPrevText) {
                    console.log('Money decreased correctly');
                }
            }
        }

    } finally {
        if (driver) {
            await driver.quit();
        }
    }
})();
