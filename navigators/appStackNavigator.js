import { createStackNavigator } from 'react-navigation';
import { HOME} from '../values/ScreenName';

import HomeComponent from "../components/home/HomeComponent";

export default AppStackNavigator = createStackNavigator(
    {
        HOME: { screen: HomeComponent },
    }, {
        headerMode: "none"
    });