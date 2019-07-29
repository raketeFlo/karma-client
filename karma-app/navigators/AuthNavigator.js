import { createStackNavigator } from 'react-navigation';
import SignIn from '../screens/SignIn';

const AuthNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      headerTransparent: true,
    }),
  },
});

export default AuthNavigator;
