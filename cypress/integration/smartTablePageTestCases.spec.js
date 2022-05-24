import { navigateTo } from "../support/page_object/navigationBar.js"
import { onSmartTablePage } from "../support/page_object/smartTablePage.js"

describe('Smart Table Page Test Suite', () => {

    beforeEach('check smart table is opening', () => {
        cy.visit('/')
        navigateTo.smartTablePage()
    })

    it('should check table edit functionality', () => {
        onSmartTablePage.check_table_edit_functionality_one('Jacob', '24')
        //onSmartTablePage.check_table_edit_functionality('Larry', '24')
    })

})