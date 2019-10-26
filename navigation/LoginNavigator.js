import { 
  createSwitchNavigator, 
} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';


const LoginPages = createSwitchNavigator(
  {
    Login: LoginScreen,
  },
);

export default LoginPages;