
describe('Тестирование Yandex', function () {
   it('Поиск картинок с котятами на Yandex', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('Котята').type('{enter}');
        cy.contains('Картинки по запросу «Котята»');
    })
})
