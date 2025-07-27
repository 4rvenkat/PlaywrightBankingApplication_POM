import test, { chromium } from "@playwright/test";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CredtCardAppPage } from "../../pages/CreditCard/CredtCardAppPage";
import { TrackingApplicationStatusPage } from "../../pages/TrackingPage/TrackApplicationStatusPage";
import { DebitCardAppPage } from "../../pages/DebitCard/DebitCardAppPage";
import "../../Utils/SetupHooks"
import { CommonPlaywrightLib } from "../../Utils/CommonPlaywrightLib";

//dotenv.config({path:`Environment/.env.sit`})

/*test('Login',async({page})=>{
   const url=process.env.SIT as string
   await page.goto(url)
   const loginPage=new LoginPage(page);
   await loginPage.login("SenthilSmartQAHub","demo")
})*/
 

test('Apply credit Card',async({page})=>{


  // const loginPage=new LoginPage(page);
   const homePage=new HomePage(page);
   const credtCardApp=new CredtCardAppPage(page)
   const commonplaywrightlib=new CommonPlaywrightLib(page)
 //  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
  // await loginPage.login("CreditUser","demo")
   await homePage.navigateToCreditCardApplicationForm()
   await credtCardApp.fillCreditCardApplication();
   await page.waitForTimeout(10000)
   await credtCardApp.findcreditCardTrackingnumber()
   await homePage.navigateToHomePage()
  // const newPage=page.waitForEvent('popup')
   await homePage.navigateToTrackApplicationStatus();
   //const page1= await newPage;
   const page1=await commonplaywrightlib.switchToWindow(1)
   const trackingApplicationStatus=new TrackingApplicationStatusPage(page1)
   await trackingApplicationStatus.trackYourCreditCardApplicationStatus()
   await trackingApplicationStatus.verifyCreditCardApplicationStatus();
   await page.waitForTimeout(3000)
 

})
test('Apply Debit Card',async({page})=>{


    //const loginPage=new LoginPage(page);
    const homePage=new HomePage(page);
    const debitCardApp=new DebitCardAppPage(page)
    const commonplaywrightlib=new CommonPlaywrightLib(page)
    
   // await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
   // await loginPage.login("DebitUser","demo")
    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardApp.fillDebitCardAppForm();
    await debitCardApp.findDebitCardTrackingnumber()
    await homePage.navigateToHomePage()
    await homePage.navigateToTrackApplicationStatus();
   // const page1= await newPage;
     const page1=await commonplaywrightlib.switchToWindow(1)
    const trackingApplicationStatus=new TrackingApplicationStatusPage(page1)
    await trackingApplicationStatus.trackYourDebitCardApplicationStatus()
    await trackingApplicationStatus.verifyDebitCardApplicationStatus();
    await page.waitForTimeout(3000)
  
 
 })