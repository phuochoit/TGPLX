import React from 'react';
import { View, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

import { CONFIG } from "../values/Strings";
import { AUTH, APP } from "../values/ScreenName";


firebase.initializeApp(CONFIG);
class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        await firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.props.fetchSigninContainer(user);
            } else {
                this.props.navigation.navigate(AUTH);
            }
        });
    };

    render() {
        return (<View />);
    }
}

export default AuthLoadingScreen;