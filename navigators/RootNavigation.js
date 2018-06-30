import React from 'react';
import { connect } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { APP, AUTH, AUTHLOADING } from "../values/ScreenName";
import AppStackNavigator from "./AppStackNavigator";
import UserStackNavigator from "./UserStackNavigator";
import AuthLoadingScreen from "../components/AuthLoadingScreen";

const RootNavigator = createSwitchNavigator({
    AUTHLOADING: AuthLoadingScreen,
    AUTH: UserStackNavigator,
    APP: AppStackNavigator
}, {
        initialRouteName: AUTHLOADING,
    }
);

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };