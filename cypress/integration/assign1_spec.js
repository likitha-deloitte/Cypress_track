describe('FlipKartSite', () =>
{
    it('verifyingURL', () => 
    {
        cy.visit("http://www.flipkart.com")
        cy.url().should('eq','https://www.flipkart.com/')

    
    })
    it('verifyingelements', () =>
    {
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(1)').should("have.text","Top Offers")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(2)').should("have.text","Grocery")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(3)').should("have.text","Mobiles")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(4)').should("have.text","Fashion")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(5)').should("have.text","Electronics")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(6)').should("have.text","Home")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(7)').should("have.text","Appliances")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(8)').should("have.text","Travel")
        cy.get('div#_331-kn _2tvxW>div:nth-of-type(9)').should("have.text","Beauty, Toys & More")
        cy.get("div#_331-kn _2tvxW>div:nth-of-type(10)").should('have.text','2-Wheelers')
        
    })
    it('login', () =>
    {
        cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div > div > a').click()
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button').click()
    })
    it('verifyingError', () =>
    {
        cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div.IiD88i._351hSN.undefined > span._2YULOR > span').should('have.text', 'Please enter valid Email ID/Mobile number')
    })
})
 