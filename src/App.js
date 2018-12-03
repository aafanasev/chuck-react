import { StackNavigator } from "react-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { HomeScreen2 } from "./screens/HomeScreen2";
import { RandomFactScreen } from "./screens/RandomFactScreen";
import { SearchFactScreen } from "./screens/SearchFactScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";

const App = StackNavigator({
  Home2: { screen: HomeScreen2 },
  Home: { screen: HomeScreen },
  Random: { screen: RandomFactScreen },
  Search: { screen: SearchFactScreen },
  Categories: { screen: CategoriesScreen },
})

export default App;