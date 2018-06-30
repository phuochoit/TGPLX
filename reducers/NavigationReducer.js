import { RootNavigator } from '../navigators/RootNavigation';

const AuthAction = RootNavigator.router.getActionForPathAndParams('AUTH');
const initialNavState = RootNavigator.router.getStateForAction(
    AuthAction,
);

export default (state = initialNavState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
};