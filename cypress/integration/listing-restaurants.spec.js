describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const saladPalace = 'Salad Place';
    const pastaPlace = 'Pasta Place';

    cy.intercept(
      'GET',
      'https://api.outsidein.dev/UwacfyV5OglkTQDV4sVGadEBdzsAolUW/restaurants',
      [
        {id: 749, name: saladPalace},
        {id: 750, name: pastaPlace},
      ],
    );

    cy.visit('/');
    cy.contains(saladPalace);
    cy.contains(pastaPlace);
  });
});
