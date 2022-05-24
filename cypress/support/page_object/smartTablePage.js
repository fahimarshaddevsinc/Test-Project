/// <reference types="cypress" />

export class smartTablePage {

    //ALL LOCATORS
    elements = {
        table_row_edit_icon:(personName) =>  cy.get('table').contains('tr', personName).then ( tableRow => {
            cy.wrap(tableRow).find('.nb-edit')
        }),
        table_row_age_field:(personName, age) => cy.get('table').contains('tr', personName).then ( tableRow => {
            cy.wrap(tableRow).find('input[placeholder="Age"]')
        })
    }

    //SET methods
    click_edit_icon(tableRow) {
        this.elements.table_row_edit_icon(tableRow).click()
    }

    enter_age_in_edit_field(personName, age) {
        this.elements.table_row_age_field(personName, age).clear().type(age)
    }


    //Test methods
    check_table_edit_functionality_one(personName, age) {
        cy.get('table').contains('tr', personName). then ( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('input[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        })
    }

    check_table_edit_functionality(personName, age) {
        this.click_edit_icon(personName)
        this.enter_age_in_edit_field(personName, age)
    }

}

export const onSmartTablePage = new smartTablePage()