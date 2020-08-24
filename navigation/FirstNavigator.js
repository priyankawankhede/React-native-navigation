import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Loginscreen from '../screens/Loginscreen';
import Signupscreen from '../screens/Signupscreen';
import Homescreen from '../screens/Homescreen';

const FirstNavigator = createStackNavigator (
    {
        Login : Loginscreen,
        Signup : Signupscreen,
        Home : Homescreen
    }
);

export default createAppContainer(FirstNavigator);
