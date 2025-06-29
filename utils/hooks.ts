import  test, { chromium, Page } from "@playwright/test";
import { LoginPage } from "../pages/HomePage/LoginPage";
import dotenv from 'dotenv'


dotenv.config({path:`Environment/.env.sit`})

test.beforeAll(async()=>{
    const url=process.env.SIT as string
   await this.page.goto(url)
   const loginPage=new LoginPage(page);
   await loginPage.login("SenthilSmartQAHub","demo")

})


