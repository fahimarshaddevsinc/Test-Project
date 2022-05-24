/// <reference types="cypress" />

describe("1st Test Suite", () => {

    it("1st Test Case", () => {

        cy.visit("/")
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //by tag
        cy.get('input')
        
        //by ID
        cy.get('#inputEmail1')

        //by class name
        cy.get('.input-full-width')

        //attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[placeholder=Email]')

        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by multiple attributes
        cy.get('[placeholder="Email"]#inputEmail1.input-full-width')

        cy.get('[data-cy="imputEmail1"]')

    })

    it('2nd Test Case', () => {
        
        cy.visit("/")
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.contains('nb-card', 'Horizontal form').
            find('.custom-checkbox').
            click()
    })

    it('Invoke command test case', () => {

        cy.visit("/")
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
        })

        cy.contains('Basic form').
            find('.custom-checkbox').
            click()

    })

    it('Check Date field', () => {
        
        cy.visit("/")
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('Common Datepicker').
            parent('nb-card').
            find('input').then( input => {
                cy.wrap(input).click()
                cy.get('nb-base-calendar').contains('17').click()
                cy.wrap(input).invoke('prop', 'value').should('contain','17')
            })
    })

    it('Check Only 1 Radio Button is Checked', () => {
        cy.visit("/")
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.contains('nb-card',  'Using the Grid').get('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons).eq(0)
                .check({force: true})

            cy.wrap(radioButtons).eq(1)
                .should('not.be.checked')
                .check({force: true})
                .should('be.checked')

            cy.wrap(radioButtons).eq(0)
                .should('not.be.checked')

            cy.wrap(radioButtons).eq(2)
                .should('be.disabled')
        })
    })

    it('Test Theme Changes from drop-down selects', () => {
        cy.visit('/')

        cy.get('nav nb-select').click().then( dropdown => {
            cy.wrap(dropdown).get('nav nb-select'). then( dropdownDefaultText => {
                cy.wrap(dropdown).get('.options-list .ng-star-inserted').each( options => {
                    const dropdownOptions = options.text().trim()
                    
                    cy.wrap(dropdown).click()
                    cy.wrap(dropdownDefaultText)
                    .should('contain', dropdownOptions)
                })
            })
        })
    })

})

describe("Test Table Functionality", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
    })

    it('Test Table edit functionality', () => { 

        cy.get('table').contains('tr', 'Jacob'). then ( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('input[placeholder="Age"]').clear().type('24')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '24')
        })
    })

    it('Test Table Search functionality', () => {

        const age = [20, 30, 40]

        cy.wrap(age).each( age => {
            cy.get('thead').find('[placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                cy.wrap(tableRow).find('td').eq(6).should('contain', age)
            })
        })
    })   
})

describe('Alerts and Browser Events', () => {
    
    it('Browser Deflete Confirmation', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    })
    
})


