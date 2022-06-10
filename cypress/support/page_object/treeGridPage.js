/// <reference types="cypress" />



export class treeGridPage {

    //ALL LOCATORS
    elements = {
        search_field:() => cy.get('nb-card nb-card-body').find('input#search')
    }

    //SET METHODS
    enter_in_search_field(value) {
        this.elements.search_field().clear().type(value)
    }



    //TEST Methods
    check_grid_expand_collapse_functionality() {
        cy.get('table tbody').find('tr').first().click().wait(1000)
    }

}

export const onTreeGridPage = new treeGridPage()