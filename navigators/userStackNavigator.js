import { createStackNavigator } from 'react-navigation';
import { USERSIGNIN, USERSIGNUP} from '../values/ScreenName';

import SigninContainer from "../containers/signin/SigninContainer";
import SignupComponent from "../components/signup/SignupComponent";

export default UserStackNavigator = createStackNavigator(
    {
        USERSIGNIN: SigninContainer,
        USERSIGNUP: SignupComponent,
    }, {
        headerMode: "none"
    }
);