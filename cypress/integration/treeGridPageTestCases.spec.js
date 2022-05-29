import { navigateTo } from "../support/page_object/navigationBar.js"
import { onTreeGridPage } from "../support/page_object/treeGridPage.js"

describe("To test Grid Collape-expand funtionality", () => {
    
    beforeEach('check tree grid page is opening', () => {
        cy.visit('/')
        navigateTo.treeGridPage()
    })

    it ('to verify the collapse and expand functionality of the Grids', () => {
        onTreeGridPage.check_grid_expand_collapse_functionality()
    })

})