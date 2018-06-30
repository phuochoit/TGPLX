import { createStackNavigator } from 'react-navigation';
import { HOME} from '../values/ScreenName';

import HomeContainer from "../containers/home/HomeContainer";

export default AppStackNavigator = createStackNavigator(
    {
        HOME: { screen: HomeContainer },
    }, {
        headerMode: "none"
    });