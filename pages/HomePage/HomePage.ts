import { Locator, Page } from "@playwright/test";


export class HomePage
{
    page:Page
    private creditCardClickButton:Locator
    private debitCardClickButton:Locator
    private trackStatusClickButton:Locator
    private homePagebutton:Locator
    private logOutButton:Locator
    private readonly goBackButton:Locator
<<<<<<< HEAD
    private logOut:Locator
=======

>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
    
    constructor(page:Page)
    {
     this.page=page
     this.creditCardClickButton= page.locator("//a[contains(text(),'Credit Card Application')]")
     this.debitCardClickButton= page.locator("//a[contains(text(),'Debit Card Application')]")
     this.trackStatusClickButton= page.locator("//a[contains(text(),'Track Application Status')]")
     this.goBackButton=page.locator("//a[@class='back-button']")
     this.homePagebutton=page.locator("//a[@class='home-button']")
<<<<<<< HEAD
     this.logOut=page.locator("//button[text()='Logout']")
=======
     this.logOutButton=page.locator(".logout-btn")
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5


    }

    async navigateToCreditCardApplicationForm()
    {
    
        await this.creditCardClickButton.click()
    }

    async navigateToDebicreditCardApplicationForm()
    {
    
        await this.debitCardClickButton.click()
    }
    async navigateToTrackApplicationStatus()
    {
    
        await this.trackStatusClickButton.click()
    }

    async navigateToHomePage(){
         
        await this.homePagebutton.click();

  }
<<<<<<< HEAD
    async clickLogOut(){
        await this.logOut.click()
    }
=======

  async logOut(){

    await this.logOutButton.click();
  }

  async islogOutPresent(){

    return await this.logOutButton.isEnabled()

  }

>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
}
