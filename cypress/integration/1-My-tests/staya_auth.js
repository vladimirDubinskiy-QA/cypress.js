
describe('Тестирование авторизации в Staya', function () {
    
    it('Логинимся', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('d3bnet1@yahoo.com')
        cy.get('.auth-form > form > [type="password"]').type('m1Stz0OkvPR;7.yL')
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');

        })

    
})
