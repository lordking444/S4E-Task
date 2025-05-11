//@ts-check

const {test, expect} = require ("@playwright/test")

test('Valide URL' , async({page}) => {

    await page.goto ('https://s4e.io/free-security-tools');
    
    await expect(page).toHaveURL(/.*free-security-tools/);

})