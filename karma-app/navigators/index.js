import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthNavigator, // route to login
    AppNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  },
));

export default AppContainer;
