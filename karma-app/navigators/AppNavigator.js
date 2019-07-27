import { createStackNavigator } from 'react-navigation';
import Main from '../screens/Main';
import LevelUp from '../screens/LevelUp';
import TopNavigationOptions from './helper/TopNavigationOptions';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => TopNavigationOptions(navigation),
  },
  LevelUp: {
    screen: LevelUp,
  },
});

export default AppNavigator;
