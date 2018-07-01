import React from 'react';
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//redux saga
import createSagaMiddleware from 'redux-saga';

import RootSaga from "./sagas/RootSaga.js";
import RootReducer from "./reducers/RootReducer";

import { AppNavigator, middleware } from "./navigators/RootNavigation";

const SagaMiddleware = createSagaMiddleware(middleware);
const Store = createStore(RootReducer, applyMiddleware(SagaMiddleware));
export default class App extends React.Component {
    // load custom font
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'SourceSansPro' : require('./assets/fonts/SourceSansPro.ttf')
        });
    }

    render() {
        return (
            <Provider store={Store}>
                <AppNavigator />
            </Provider>
        );
    }
}

SagaMiddleware.run(RootSaga);