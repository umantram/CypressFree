describe('Api testing', ()=> {

    
    /* it('Probar post', ()=>{
        // cy.visit('https://jsonplaceholder.typicode.com/')
        // cy.request('/posts')

        cy.request({
            url:'https://jsonplaceholder.typicode.com/'

        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })


    })

    it('Probar post validar cantidad', ()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts')
        .its('body')
        .should('have.length', 100)
    })

    it('Probar post titulo del post1', ()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts/1')
        .its('body')
        .should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
 */

   /*  it('Probando el POST request', ()=>{

        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',{
            userId:1,
            id:101,
            title:"un titulos prueba",
            body:"una peli"

        }).then((respuesta)=>{
            expect(respuesta.body).to.have.property('title','un titulos prueba')
        })
    
    }) */

  /*   it('Probando el PUT request', ()=>{

        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2',{
            title:"un titulos prueba editando valores",
            body:"una peli editnado valores"

        }).then((respuesta)=>{
            expect(respuesta.body).to.have.property('title','un titulos prueba editando valores')
        })
    
    })
 */
   /*  it("GET call", ()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .its('status')
        .should('equal',200);

    })
 */

    // it('Probando el SELETE request', ()=>{

    //     cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    
    // })

    //stubb : aislar componente 

    it.only('Simula una solicitud get', ()=> {

        const samplePost = [
            {
                userId: 1,
                id: 1,
                title: "stubb",
                body: "porbar falsa"
            
            }
        ];

        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', samplePost).as('getpost')

        cy.visit('https://jsonplaceholder.typicode.com')
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    
    })

})