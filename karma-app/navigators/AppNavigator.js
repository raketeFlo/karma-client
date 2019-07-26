import { createStackNavigator } from 'react-navigation';
import Main from '../screens/Main';
import LevelUp from '../screens/LevelUp';

const AppNavigator = createStackNavigator({
  Main,
  LevelUp,
});

export default AppNavigator;
