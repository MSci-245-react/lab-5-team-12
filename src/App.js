import {Provider} from 'react-redux';
import RestaurantScreen from './RestaurantScreen';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}
//UwacfyV5OglkTQDV4sVGadEBdzsAolUW
