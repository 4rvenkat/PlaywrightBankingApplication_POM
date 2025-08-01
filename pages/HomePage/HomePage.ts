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
    
    constructor(page:Page)
    {
     this.page=page
     this.creditCardClickButton= page.locator("//a[contains(text(),'Credit Card Application')]")
     this.debitCardClickButton= page.locator("//a[contains(text(),'Debit Card Application')]")
     this.trackStatusClickButton= page.locator("//a[contains(text(),'Track Application Status')]")
     this.goBackButton=page.locator("//a[@class='back-button']")
     this.homePagebutton=page.locator("//a[@class='home-button']")
     this.logOutButton=page.locator("//button[text()='Logout']")


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

  async logOut(){

    await this.logOutButton.click();
  }

  async islogOutPresent(){

    return await this.logOutButton.isEnabled()

  }

}
