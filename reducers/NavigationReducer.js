import { NavigationActions } from 'react-navigation';

import { AUTHLOADING, APP } from "../values/ScreenName";
import { LOGINSUCCEEDED } from "../actions/ActionTypes";
import { RootNavigator } from '../navigators/RootNavigation';

const AuthAction = RootNavigator.router.getActionForPathAndParams(AUTHLOADING);
const initialNavState = RootNavigator.router.getStateForAction(
    AuthAction,
);

export default (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case LOGINSUCCEEDED:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: APP }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
};