import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AuthLoading from '../screens/AuthLoading';
import LevelUp from '../screens/LevelUp';

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    AuthNavigator,
    AppNavigator,
    LevelUp
  },
  {
    initialRouteName: 'AuthLoading',
  },
));

export default AppContainer;
