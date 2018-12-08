import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './screens/HomeScreen';
import { SearchScreen } from './screens/SearchScreen';

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
  }, {
    initialRouteName: 'Home'
  }
)

export default App;