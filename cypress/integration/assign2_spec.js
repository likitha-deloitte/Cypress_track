/// <reference types ="Cypress" />
describe('AutomationDemoSite',()=>{

    it('selectingLanguages',()=> {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get("#msdd").click()
        cy.get("a[class='ui-corner-all']").each(function ($ele,index,$list) 
        {
            if($ele.text == 'Arabic')
            {
                cy.log("Found Element")
                cy.wrap($ele).click()
            } 
            else {
                cy.log("Current Value",$ele.text())
            }
        })
    })
    
    it('SelectingSkills', ()=> {
       //cy.get("select[id='Skills']").select('APIs').should('have.value','APIs')
       //cy.get('//*[@id="Skills"]').click()
       cy.get("select[id='Skills']").click()
    })

    it('SlectingCountry', ()=> {
        cy.get('[disabled]').click({force: true}).
        cy.get("span[role='combobox']").click()
        //cy.get('#countries').select('')

    })
})