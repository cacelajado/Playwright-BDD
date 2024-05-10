import {Given, When, Then} from '@cucumber/cucumber'
import {chromium, Browser, Page} from 'playwright'

Given('today\'s date is {string}', async (date: string) =>{
    
})

When('I request to see the teams playing today', async() => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto

})

Then('the system should display the list of teams playing today', async() => {

})

Then('there should be at least one team playing today', async() => {

})