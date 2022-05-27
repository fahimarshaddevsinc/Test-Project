/// <reference types="cypress" />

// import { element } from "protractor"

export class smartTablePage {

    //ALL LOCATORS
    elements = {
        first_row_edit_icon:(row) => cy.get('tbody').find('tr').first().find('.nb-edit'),
        table_row_edit_icon:(keyWord) =>  cy.get('table').contains('tr', keyWord).then ( tableRow => {
            cy.wrap(tableRow).find('.nb-edit')
        }),
        table_row_age_field:(keyWord, age) => cy.get('table').contains('tr', keyWord).then ( tableRow => {
            cy.wrap(tableRow).find('input[placeholder="Age"]')
        })
    }

    //SET methods
    insert_in_table_row(tableRow, id, firstName, lastName, userName, email , age) {

        cy.wrap(tableRow).find('input[placeholder="ID"]').clear().type(id)
        cy.wrap(tableRow).find('input[placeholder="First Name"]').clear().type(firstName)
        cy.wrap(tableRow).find('input[placeholder="Last Name"]').clear().type(lastName)
        cy.wrap(tableRow).find('input[placeholder="Username"]').clear().type(userName)
        cy.wrap(tableRow).find('input[placeholder="E-mail"]').clear().type(email)
        cy.wrap(tableRow).find('input[placeholder="Age"]').clear().type(age)
    }

    assert_table_row(tableRow, id, firstName, lastName, userName, email , age) {

            cy.wrap(tableRow).find('td').eq(1).should('contain', id)
            cy.wrap(tableRow).find('td').eq(2).should('contain', firstName)
            cy.wrap(tableRow).find('td').eq(3).should('contain', lastName)
            cy.wrap(tableRow).find('td').eq(4).should('contain', userName)
            cy.wrap(tableRow).find('td').eq(5).should('contain', email)
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
    }

    //Test methods
    check_table_edit_functionality(id, firstName, lastName, userName, email , age) {

        cy.get('tbody').find('tr').first().then ( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click() 
            this.insert_in_table_row(tableRow, id, firstName, lastName, userName, email , age)       
            cy.wrap(tableRow).find('.nb-checkmark').click()
            this.assert_table_row(tableRow, id, firstName, lastName, userName, email , age)
        })
    }
    
    check_first_name_field_validations(value) {

        cy.get('tbody').find('tr').first().then ( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('input[placeholder="First Name"]').clear().type(value)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(2).should('not.contain', value)
        })
    }

    check_add_functionality(id, firstName, lastName, userName, email , age) {

        cy.get('thead').find('tr').eq(1).find('.nb-plus').click()
        cy.get('thead').find('tr').last().then ( tableRow => {
            this.insert_in_table_row(tableRow, id, firstName, lastName, userName, email , age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
        cy.get('tbody').find('tr').first().then ( tableRow => {
            this.assert_table_row(tableRow, id, firstName, lastName, userName, email , age)
        })
    }

    check_search_by_age_functionality(age) {

        cy.wrap(age).each( age => {
            cy.get('thead').find('[placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                cy.wrap(tableRow).find('td').eq(6).should('contain', age)
            })
        })
    }
    
    check_table_reponse_when_no_data_is_found(age) { 

        cy.get('thead').find('[placeholder="Age"]').clear().type(age)
        cy.wait(500)
        cy.get('tbody tr').find('td').should('contain', 'No data found')
    }

    check_table_delete_functionaity() {

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    }

    check_table_default_page() {
        cy.get('ng2-smart-table-pager nav').find('ul li').eq(2).find('span').eq(1).should('contain', '(current)')
    }
    
    check_pagination_is_disabled() {
        cy.get('ng2-smart-table-pager nav').find('ul li').eq(0).then ( elem  => {
            expect(elem).to.have.class('disabled')
        })
        cy.get('ng2-smart-table-pager nav').find('ul li').eq(1).then ( elem  => {
            expect(elem).to.have.class('disabled')
        })
    }

}

export const onSmartTablePage = new smartTablePage()