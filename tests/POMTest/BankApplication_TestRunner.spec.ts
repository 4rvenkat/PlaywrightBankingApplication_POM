import test, { chromium } from "@playwright/test";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CredtCardAppPage } from "../../pages/CreditCard/CredtCardAppPage";
import { TrackingApplicationStatusPage } from "../../pages/TrackingPage/TrackApplicationStatusPage";
import { DebitCardAppPage } from "../../pages/DebitCard/DebitCardAppPage";
<<<<<<< HEAD
import "../../Utils/SetupHooks"
=======
import { CommonLibrary } from "../../utils/CommonLibrary";
//import dotenv from 'dotenv'
import "../../utils/hooks";
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5

//dotenv.config({path:`Environment/.env.sit`})

/*test('Login',async({page})=>{
   const url=process.env.SIT as string
   await page.goto(url)
   const loginPage=new LoginPage(page);
   await loginPage.login("SenthilSmartQAHub","demo")
})*/
 

test('Apply credit Card',async({page})=>{
<<<<<<< HEAD


  // const loginPage=new LoginPage(page);
   const homePage=new HomePage(page);
   const credtCardApp=new CredtCardAppPage(page)
 //  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
  // await loginPage.login("CreditUser","demo")
=======
 
   const homePage=new HomePage(page);
   const credtCardApp=new CredtCardAppPage(page)
   const commonlib=new CommonLibrary(page)
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
   await homePage.navigateToCreditCardApplicationForm()
   await credtCardApp.fillCreditCardApplication();
   await page.waitForTimeout(10000)
   await credtCardApp.findcreditCardTrackingnumber()
   await homePage.navigateToHomePage()
  // const newPage=page.waitForEvent('popup')
   await homePage.navigateToTrackApplicationStatus();
<<<<<<< HEAD
   const page1= await newPage;
   const trackingApplicationStatus=new TrackingApplicationStatusPage(page1)
=======
  // const page1= await newPage;
   const page1=await commonlib.switchToWindow(1)
   const trackingApplicationStatus=new TrackingApplicationStatus(page1)
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
   await trackingApplicationStatus.trackYourCreditCardApplicationStatus()
   await trackingApplicationStatus.verifyCreditCardApplicationStatus();
   await page.waitForTimeout(3000)
 

})
test('Apply Debit Card',async({page})=>{


<<<<<<< HEAD
    //const loginPage=new LoginPage(page);
    const homePage=new HomePage(page);
    const debitCardApp=new DebitCardAppPage(page)
    
   // await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
   // await loginPage.login("DebitUser","demo")
=======

    const homePage=new HomePage(page);
    const debitCardApp=new DebitCardAppPage(page)
    const commonlib=new CommonLibrary(page)
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardApp.fillDebitCardAppForm();
    await debitCardApp.findDebitCardTrackingnumber()
    await homePage.navigateToHomePage()
    await homePage.navigateToTrackApplicationStatus();
<<<<<<< HEAD
    const page1= await newPage;
    const trackingApplicationStatus=new TrackingApplicationStatusPage(page1)
=======
    const page1=await commonlib.switchToWindow(1)
    const trackingApplicationStatus=new TrackingApplicationStatus(page1)
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
    await trackingApplicationStatus.trackYourDebitCardApplicationStatus()
    await trackingApplicationStatus.verifyDebitCardApplicationStatus();
    await page.waitForTimeout(3000)
  
 
 })