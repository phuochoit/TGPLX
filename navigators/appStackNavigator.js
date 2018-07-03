import React from "react";
import { createDrawerNavigator } from 'react-navigation';

import { deviceWidth } from "../assets/styles/styles";
import { HOME } from '../values/ScreenName';
import HomeContainer from "../containers/home/HomeContainer";
import SideBar from "../components/config/SideBar";


export default AppStackNavigator = createDrawerNavigator(
    {
        HOME: { screen: HomeContainer },
    }, {
        drawerWidth: deviceWidth / 1.3,
        contentComponent: props => <SideBar {...props} />
    });