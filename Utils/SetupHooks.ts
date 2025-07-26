import test from "@playwright/test";
import dotenv from 'dotenv'

dotenv.config({path:`env/.env.sit`})
test.beforeEach("Open the application",async({page}) => {
    const siturl=process.env.url as string
    await page.goto(siturl)
});

test.afterEach("Close the application",async({page})=>{
  await page.context().close()
});