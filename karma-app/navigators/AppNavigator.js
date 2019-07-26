import { createStackNavigator } from 'react-navigation';
import Main from '../screens/Main';
import LevelUp from '../screens/LevelUp';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: () => ({
      headerTransparent: false,
    }),
  },
  LevelUp,
});

export default AppNavigator;
