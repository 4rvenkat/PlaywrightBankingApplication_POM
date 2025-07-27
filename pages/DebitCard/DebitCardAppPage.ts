
import { expect, Locator, Page, Selectors } from "@playwright/test";
import { CommonPlaywrightLib } from "../../Utils/CommonPlaywrightLib";


export class DebitCardAppPage
{
    page:Page 
    private readonly fullnameTextBox:Locator
    private readonly genderMaleOptionBox:Locator
    private readonly genderFemaleOptionBox:Locator
    private readonly currentCityTextBox:Locator
    private readonly accountNoTextBox:Locator
    private readonly cardTypeTextBox:Locator
    private readonly applyforDebitClickButton:Locator
    private readonly successMessage:Locator
    private readonly debitCrdTrackingNumText:Locator
    static debitCrdTrackingNumber:string
    private readonly confirmationCheckBox:Locator
  
    
    constructor(page:Page)
    {
     this.page=page
     this.fullnameTextBox= page.locator("#name")
     this.genderMaleOptionBox= page.locator("//input[@value='Male']")
     this.genderFemaleOptionBox= page.locator("//input[@value='Female']")
     this.currentCityTextBox= page.getByPlaceholder("Enter your city")
     this.accountNoTextBox= page.locator("#accountNumber")
     this.cardTypeTextBox= page.locator('#cardType');
     this.applyforDebitClickButton= page.locator("//button[text()='Apply for Debit Card']")
     this.successMessage=page.locator("//*[@id='successMessage']/p").first()
     this.debitCrdTrackingNumText=page.locator("#trackingLink").last()
     this.confirmationCheckBox=page.locator("#confirmation")
    
    }
    async fillDebitCardAppForm()
    {
   const commonplaywrightlib=new CommonPlaywrightLib(this.page)
   const csvdata= await commonplaywrightlib.readingValueFromCSV('inputdata/DebitCarddata.csv')
   await this.fullnameTextBox.fill(csvdata[0].fullName)
   //  csvData.Gender=='Male'?await this.genderMaleOptionBox.check():await this.genderFemaleOptionBox.check()

     if(csvdata[0].gender=='Male'){
        await this.genderMaleOptionBox.check()
     }
     else(csvdata[0].gender=='Female')
     {
        await this.genderFemaleOptionBox.check()
     }
       
     await this.currentCityTextBox.fill(csvdata[0].city)
        await this.accountNoTextBox.fill(csvdata[0].accountNumber)

       await commonplaywrightlib.selectByLabel(this.cardTypeTextBox,csvdata[0].cardType)

       //await this.cardTypeTextBox.selectOption("Classic")
         commonplaywrightlib.acceptAlert("ok","confirm")
        // this.page.on("dialog", async(dialogobj)=>
        //     {
        //       await this.page.waitForTimeout(5000)
        //      dialogobj.accept()
        //     })
        await this.confirmationCheckBox.click();
        await this.applyforDebitClickButton.click();
        const successMessage=await this.successMessage.textContent();
        expect(successMessage).toBe("✅ Your debit card application has been submitted successfully!")
        

    }

    async findDebitCardTrackingnumber(){
        DebitCardAppPage.debitCrdTrackingNumber=await this.debitCrdTrackingNumText.textContent()??''
         expect(DebitCardAppPage.debitCrdTrackingNumber).not.toBeNull()      
   

    }



}