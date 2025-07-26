import test from "@playwright/test";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import dotenv from 'dotenv'
import { CommonPlaywrightLib } from "../../Utils/CommonPlaywrightLib";
import { HomePage } from "../../pages/HomePage/HomePage";
import "../../Utils/SetupHooks"

//dotenv.config({path:`env/.env.sit`})

test("login to online banking",async({page})=>{

const loginpage=new LoginPage(page)
const CommonPlaywrightLibrary=  new CommonPlaywrightLib(page)
const homePage=new HomePage(page)

//const siturl=process.env.url
const sitrole=process.env.role as string
const csvvalue=await CommonPlaywrightLibrary.readingValueFromCSV("inputdata/loginCredential.csv")
for( var csvdata of csvvalue){
 if(csvdata.role==sitrole){
    
 await loginpage.login(csvdata.userName,csvdata.password)
} 
 }
await CommonPlaywrightLibrary.storageState('credential/loginCredential.json')
await homePage.clickLogOut()

}
)