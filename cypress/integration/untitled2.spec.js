describe('My First Test', () => {
  it('Visits the Vue app', () => {
    cy.visit('http://localhost:8080'); // URL вашего локального сервера
    cy.contains('h1', 'Welcome to Your Vue.js App'); // Проверка наличия текста на странице
  });
});
