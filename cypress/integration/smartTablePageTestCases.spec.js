import { navigateTo } from "../support/page_object/navigationBar.js"
import { onSmartTablePage } from "../support/page_object/smartTablePage.js"

describe('To test table EDIT functionality', () => {

    beforeEach('check smart table is opening', () => {
        cy.visit('/')
        navigateTo.smartTablePage()
    })

    it('verify if the changes made in any field are edited correctly', () => {
        onSmartTablePage.check_table_edit_functionality('10', 'SampleFN', 'SampleLN', '@sampleUN', 'sample@email.com', '24')
    })

    it('verify if the validations on First Name field are correct', () => {
        onSmartTablePage.check_first_name_field_validations('@fahim')
    })
})

describe('To test table ADD functionality', () => {

    beforeEach('check smart table is opening', () => {
        cy.visit('/')
        navigateTo.smartTablePage()
    })

    it ('verify if the data is added in the table successfully', () => {
        onSmartTablePage.check_add_functionality('101', 'SampleFN1', 'SampleLN1', '@sampleUN1', 'sample1@email.com', '26')
    })
})

describe('To test table DELETE functionality', () => {

    beforeEach('check smart table is opening', () => {
        cy.visit('/')
        navigateTo.smartTablePage()
    })

    it ('verify if the specific row is deleted from the table successfully', () => {
        onSmartTablePage.check_table_delete_functionaity()
    })
})


describe('To test table SEARCH functionality', () => {

    beforeEach('check smart table is opening', () => {
        cy.visit('/')
        navigateTo.smartTablePage()
    })

    it ('verify if the search by age functionality is working correctly', () => {
        const age = [20, 30, 40]
        onSmartTablePage.check_search_by_age_functionality(age)
    })

    it ('verify if no data is found against a search parameter then appropriate msg is displayed', () => {
        onSmartTablePage.check_table_reponse_when_no_data_is_found('180')
    })
})

describe.only('To test table PAGINATION', () => {

    beforeEach('check smart table is opening', () => {
        cy.visit('/')
        navigateTo.smartTablePage()
    })

    it ('verify if by default the 1st page is opened', () => {
        onSmartTablePage.check_table_default_page()
    })

    it ('verify if when on page 1 the previous page paginations are disabled', () => {
        onSmartTablePage.check_pagination_is_disabled('previous')
    })

    it ('verify if when on last page the next page paginations are disabled', () => {
        onSmartTablePage.check_pagination_is_disabled('next')
    })
})
