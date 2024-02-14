import {render, screen} from '@testing-library/react';
import RestaurantList from './RestaurantList';
describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    const restaurants = [];

    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const noop = () => {};
    const restaurants = [
      {id: 749, name: 'Salad Place'},
      {id: 750, name: 'Pasta Place'},
    ];

    render(<RestaurantList loadRestaurants={noop} restaurants={restaurants} />);

    expect(screen.getByText('Salad Place')).toBeInTheDocument();
    expect(screen.getByText('Pasta Place')).toBeInTheDocument();
  });
});
