import { expect, Locator, Page, Selectors } from "@playwright/test";
import { CommonLibrary } from "../../utils/CommonLibrary";


export class CredtCardAppPage
{
    page:Page 
    private readonly nameTextBox:Locator
    private readonly mailTextBox:Locator
    private readonly phoneTextBox:Locator
    private readonly addressTextBox:Locator
    private readonly accountNoTextBox:Locator
    private readonly cardTypeTextBox:Locator
    private readonly proofTextBox:Locator
    private readonly applyforDebitClickButton:Locator
    private readonly successMessage:Locator
    private readonly trackingNoText:Locator
    static creditTrackingNumber:string
  
    
    constructor(page:Page)
    {
     this.page=page
     this.nameTextBox= page.locator("#name")
     this.mailTextBox= page.locator("#email")
     this.phoneTextBox= page.locator("#phone")
     this.addressTextBox= page.locator("#address")
     this.accountNoTextBox= page.locator("#accountNumber")
     this.cardTypeTextBox= page.locator('#cardType');
     this.proofTextBox= page.locator('#proof')
     this.applyforDebitClickButton= page.locator("//button[text()='Apply for Debit Card']")
     this.successMessage=page.locator("//*[@id='successMessage']/p").first()
     this.trackingNoText=page.locator("#trackingLink").last()



    }
    async fillCreditCardApplication()
    {
<<<<<<< HEAD
    
       await this.nameTextBox.fill("Arun")
       
        await this.mailTextBox.fill("Arun@gmail.com")
        await this.phoneTextBox.fill("1234568900")
        await this.addressTextBox.fill("18001 Richmond place drive")
        await this.accountNoTextBox.fill("12345678901234")
        await this.cardTypeTextBox.selectOption('Platinum');
=======
    const commonlib=new CommonLibrary(this.page)
    const csvData=await commonlib.readingValueFromCSV('testdata/CredtiCardData.csv')
        await this.nameTextBox.fill(csvData[0].Fullname)
        await this.mailTextBox.fill(csvData[0].mail)
        await this.phoneTextBox.fill(csvData[0].phone)
        await this.addressTextBox.fill(csvData[0].address)
        await this.accountNoTextBox.fill(csvData[0].AccountNum)
        await commonlib.selectByLabel(this.cardTypeTextBox,csvData[0].CardType)
>>>>>>> e6d0f0d78b2d6f77dfc845a3a8c731d9fbe38ac5
        await this.proofTextBox.setInputFiles(("testdata/Vitality-Protect-Advance-Brochure.pdf"))
        await this.applyforDebitClickButton.click();
        const successMessage=await this.successMessage.textContent();
        expect(successMessage).toBe("✅ Your debit card application has been submitted successfully!")
        

    }

    async findcreditCardTrackingnumber(){
        await this.page.waitForLoadState("networkidle")
        CredtCardAppPage.creditTrackingNumber=await this.trackingNoText.textContent()??''
         expect(CredtCardAppPage.creditTrackingNumber).not.toBeNull()      
   

    }

        

}