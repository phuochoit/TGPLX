import { createStackNavigator } from 'react-navigation';
import { USERSIGNIN, USERSIGNUP} from '../values/screenName';

import SigninComponent from "../components/signin/SigninComponent";
import SignupComponent from "../components/signup/SignupComponent";

export default UserStackNavigator = createStackNavigator(
    {
        USERSIGNIN: SigninComponent,
        USERSIGNUP: SignupComponent,
    }, {
        headerMode: "none"
    }
);