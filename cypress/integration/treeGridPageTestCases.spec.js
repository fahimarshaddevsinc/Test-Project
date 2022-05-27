import { navigateTo } from "../support/page_object/navigationBar.js"
import { onTreeGridPage } from "../support/page_object/treeGridPage.js"

describe("To test Grid Collape-expand funtionality", () => {
    
    beforeEach('check tree grid page is opening', () => {
        cy.visit('/')
        navigateTo.treeGridPage()
    })

    it ('should check the collapse and expand functionality of the Grids', () => {
        
    })

})

describe("To test Grid Search functionality", () => {
    
    beforeEach('check tree grid page is opening', () => {
        cy.visit('/')
        navigateTo.treeGridPage()
    })

    it.only ('should check the search functionality', () => {
        //array of strings that are searchable
        const arr = ["p", "pr", "b", "bkp"]
        onTreeGridPage.check_grid_search_functionality(arr)
    })

})