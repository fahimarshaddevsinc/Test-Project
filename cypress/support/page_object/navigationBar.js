
function clickIfFormIsClosed(formName) {
    cy.contains('a', formName).then (menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then ( attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}

function exitPage() {
    cy.get('[data-name="arrow-back"]').click()
}

export class navigationBar{

    stepperPage(){
        clickIfFormIsClosed('Layout')
        cy.contains('Stepper').click()
    }

    accordionPage(){
        clickIfFormIsClosed('Layout')
        cy.contains('Accordion').click()
    }

    formLayoutsPage(){
        clickIfFormIsClosed('Forms')
        cy.contains('Form Layouts').click()
    }

    datePickerPage(){
        clickIfFormIsClosed('Forms')
        cy.contains('Datepicker').click()
    }

    dialogPage(){
        clickIfFormIsClosed('Modal & Overlays')
        cy.contains('Dialog').click()
    }

    windowPage(){
        clickIfFormIsClosed('Modal & Overlays')
        cy.contains('Window').click()
    }

    popoverPage(){
        clickIfFormIsClosed('Modal & Overlays')
        cy.contains('Popover').click()
    }

    toastrPage(){
        clickIfFormIsClosed('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    toolTipPage(){
        clickIfFormIsClosed('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

    dialoguePage(){
        clickIfFormIsClosed('Modal & Overlays')
        cy.contains('Dialogue').click()
    }

    calendarPage(){
        clickIfFormIsClosed('Extra Components')
        cy.contains('Calendar').click()
    }

    smartTablePage(){
        clickIfFormIsClosed('Tables & Data')
        cy.contains('Smart Table').click()
    }

    treeGridPage(){
        clickIfFormIsClosed('Tables & Data')
        cy.contains('Tree Grid').click()
    }

    loginPage(){
        clickIfFormIsClosed('Auth')
        cy.contains('Login').click()
        exitPage()    
    }

    registerPage(){
        clickIfFormIsClosed('Auth')
        cy.contains('Register').click()
        exitPage()
    }

    requestPasswordPage(){
        clickIfFormIsClosed('Auth')
        cy.contains('Request Password').click()
        exitPage()
    }

    resetPasswordPage(){
        clickIfFormIsClosed('Auth')
        cy.contains('Reset Password').click()
        exitPage()
    }

}

export const navigateTo = new navigationBar()