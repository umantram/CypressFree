describe('Test new UI', ()=> {

    beforeEach(()=> {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    // it('teste new windows', ()=>{

    //     cy.get(':nth-child(33) > a').click()
    //     cy.contains('Click Here').invoke('removeAttr', 'target').click()
    //     cy.contains('New Window').should('have.text', 'New Window')

    // })

    // it('Dynamic windows', ()=>{

    //     cy.get(':nth-child(12) > a').click()
    //     cy.wait(2000)
    //     cy.get('img').last().should('be.visible')
    //     cy.get('img').eq(1).should('be.visible')


    // })

    // it('Ingresar un valor', ()=>{
    //     cy.contains('Form Authentication').click()
    //     cy.get('#username').type("tomsmith")
    //     cy.get('#password').type("SuperSecretPassword!")
    //     cy.get('.fa').click()
    // })


    it('Validar checkbox', ()=>{
        cy.get(':nth-child(6) > a').click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })

}) 