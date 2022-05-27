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
    check_grid_search_functionality(arr) {
        cy.wrap(arr).each( arr => {
            this.enter_in_search_field(arr)
        })
    }

}

export const onTreeGridPage = new treeGridPage()