class HomePage {
    // Targeting the "Amount" header
    get amountHeader() { return $('//th[contains(text(), "Amount")]'); }

    // Targeting "Amount" column values inside span
    get amountValues() { 
        return $$('//td[contains(@class, "text-right") and contains(@class, "bolder") and contains(@class, "nowrap")]/span'); 
    }
    
    async clickAmountHeader() {
        console.log('Clicking the "Amount" column header...');
        await this.amountHeader.waitForClickable();
        await this.amountHeader.click();
    }

    async getSortedAmounts() {
        console.log('Fetching values from the "Amount" column...');
        
        // Ensuring the amounts are visible before fetching them
        await browser.pause(1000); // Short wait for sorting to complete

        const amounts = await Promise.all(this.amountValues.map(async el => {
            let text = await el.getText();
            let amount = parseFloat(text.replace(/[^0-9.-]+/g, "")); // Extract negative & positive numbers
            return amount;
        }));

        console.log(`Extracted Amounts: ${JSON.stringify(amounts)}`);
        return amounts;
    }
}

module.exports = new HomePage();
