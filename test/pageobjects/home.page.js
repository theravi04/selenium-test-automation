class HomePage {

    get amountHeader() { return $('//th[contains(text(), "Amount")]'); }

    get amountValues() { 
        return $$('//*[@id="transactionsTable"]/tbody/tr/td[5]/span'); 
    }

    async clickAmountHeader() {
        console.log('Clicking the "Amount" column header...');
        await this.amountHeader.waitForClickable();
        await this.amountHeader.click();
    }

    async getAllAmountValues() {
        await browser.pause(1000);
        const values = await this.amountValues;
        if (values.length > 0) {
            let arr = [];
            for (const value of values) {
                arr.push(await value.getText());
            }
            return arr;
        } else {
            throw new Error("No amount values found in the table.");
        }
    }
    

    // async getAllAmountValues() {
    //     await browser.pause(1000);
    //     const values = await this.amountValues;
    //     if (values.length > 0) {
    //         let arr = [];
    //         values.forEach(async (value) => {
    //             arr.push(await value.getText());
    //         });
    //         return arr;
    //     } else {
    //         throw new Error("No amount values found in the table.");
    //     }
    // }
}

module.exports = new HomePage();
