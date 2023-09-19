describe('Home de free range', ()=> {

    beforeEach(()=> {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', ()=>{
        cy.title().should('include', 'Free Range Testers')
        cy.get('[data-testid="header-container"] > .sc-hjsqBZ > .sc-irTswW > :nth-child(1) > .sc-jsMahE').click()
        //cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[4]/a').click()
        //cy.contains('Entrar').click()

        cy.get('.sc-kgKVFY > .sc-fLQRDB > .sc-iKGpAt > .sc-gjTGSA > .sc-hIqOWS').should('have.length', 9)

    })

    // it('Varificar clase', ()=>{

    //     cy.get('[data-react-class="creator_ui/section_adapters/Image"] > .sc-dmqHEX > [data-testid="container"] > .sc-kgKVFY > .sc-fLQRDB > .sc-iKGpAt > .sc-bALXmG > .sc-jTrPJq')    
    
    // })

    it('should have a test free ranger', ()=>{

        cy.get('[data-react-class="creator_ui/section_adapters/Video"] > .sc-dmqHEX > [data-testid="container"] > .sc-kgKVFY > .sc-fLQRDB > .sc-iKGpAt > .sc-bALXmG > .sc-jTrPJq').should('have.text', '¿Qué es Free Range Testers?')
    })

    it('Es visible  un boton de emp a aprender', ()=>{

        cy.get('[data-testid="product-group"] > :nth-child(2) > .sc-kgKVFY > .sc-fLQRDB > .sc-iKGpAt > .sc-gjTGSA > .sc-hIqOWS').should('be.visible')
        })

        
    it('Existe un boton de emp a aprender', ()=>{

        cy.get('[data-testid="product-group"] > :nth-child(2) > .sc-kgKVFY > .sc-fLQRDB > .sc-iKGpAt > .sc-gjTGSA > .sc-hIqOWS').should('exist')
        })
})