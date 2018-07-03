import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//redux saga
import createSagaMiddleware from 'redux-saga';

import RootSaga from "./sagas/RootSaga.js";
import RootReducer from "./reducers/RootReducer";

import { AppNavigator, middleware } from "./navigators/RootNavigation";
import { backgroundColorDefault } from "./assets/styles/styles";

const SagaMiddleware = createSagaMiddleware(middleware);
const Store = createStore(RootReducer, applyMiddleware(SagaMiddleware));
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    // load custom font
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'SourceSansPro': require('./assets/fonts/SourceSansPro.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Provider store={Store}>
                    <AppNavigator />
                </Provider>
            );
        } else {
            return (
                <View style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" backgroundColor={backgroundColorDefault} />
                </View>
            );
        }
    }
}

SagaMiddleware.run(RootSaga);