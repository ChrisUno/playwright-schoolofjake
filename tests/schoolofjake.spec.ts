import { test, expect } from '@playwright/test';
import { log } from 'console';
import { toNamespacedPath } from 'path';
import { isContext } from 'vm';

test ('the first test', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');

    await expect(page).toHaveTitle('Practice Page');

});

test ('checking if buttons work ', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');
    //locate radio button first
    //Find action second
    //check -expect

    await page.locator('#bmwradio').click;
    await expect (page.locator('#benzradio')).toBeDisabled;
    await expect (page.locator('#hondaradio')).toBeDisabled;
    

    await page.locator('#bmwcheck').click;
    await expect (page.locator('#benzcheck')).toBeDisabled;
    await expect (page.locator('#hondacheck')).toBeDisabled;

    const newPageButton = page.locator('#openwindow.btn-style.class1');
    await newPageButton.click;
    const newPage = await page.goto('https://www.letskodeit.com/courses');

    await page.locator('#opentab.btn-style.class1.class2').click;
    await page.waitForURL('https://www.letskodeit.com/courses');

});

test ('checking if second row buttons work ', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');

    await page.locator('#carselect').click.bind('bmw');

    await page.locator('#multiple-select-example').click.bind('Orange');

    const carTxtBox = page.locator('input#autosuggest');
    await carTxtBox.fill('tesla');
    await expect (carTxtBox).toContainText;
});

test ('checking if third row selections work ', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');

    const enabledisablefield = page.locator('#enabled-button.btn-style.class2');
    await enabledisablefield.click;
    const enabledtextbox = page.locator('input#enabled-example-input.inputs');
    await enabledtextbox.fill('testing');


    const showButton = page.locator('input#show-textbox.btn-style.class2');
    await showButton.click;
    const displayTextBox = page.locator('input#displayed-text.inputs.displayed-class');
    await displayTextBox.fill('blah test');

    const textBox = page.locator('input#name.inputs');
    await textBox.fill('myName');
    const alertPopup = page.getByRole('button', { name: 'Alert'}).click;
    await page.getByRole('button', { name: 'Confirm'}).click;
    

});

test ('checking if forth row selections work ', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');

    await page.getByRole('button', { name: 'hover'}).hover;

    await page.getByText('Python Programmming Language', {exact: true});
    const text = page.locator('#product').getByText('Python Programming Language').and(page.getByTitle('price'));
    await log(text);


});