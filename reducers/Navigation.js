import { NavigationActions } from 'react-navigation';

import {RootNavigator} from '../navigators/RootNavigation';

export default (state , action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
};