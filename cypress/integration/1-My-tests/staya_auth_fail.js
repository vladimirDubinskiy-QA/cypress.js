
describe('Авторизация в Staya с неверными данными', function () {
    
    it('Логинимся', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('sample@mail.com');
        cy.get('.auth-form > form > [type="password"]').type('abcdefg');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

     })

    
})
