import { StackNavigator } from "react-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { HomeScreen2 } from "./screens/HomeScreen2";
import { RandomFactScreen } from "./screens/RandomFactScreen";
import { SearchFactScreen } from "./screens/SearchFactScreen";
import { CategoriesScreen } from "./screens/CategoriesScreen";

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Home2: { screen: HomeScreen2 },
    Random: { screen: RandomFactScreen },
    Search: { screen: SearchFactScreen },
    Categories: { screen: CategoriesScreen },
  }, {
    initialRouteName: "Home2"
  }
)

export default App;