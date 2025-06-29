import test, { chromium, Page } from "@playwright/test";
import { LoginPage } from "../pages/HomePage/LoginPage";

test.beforeAll(async({page})=>{

   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
   const loginPage=new LoginPage(page);
   await loginPage.login("SenthilSmartQAHub","demo")

})
