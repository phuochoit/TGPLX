import React from 'react';
import { View , AsyncStorage} from 'react-native';
import * as firebase from 'firebase';
import { CONFIG } from "../values/Strings";
import { AUTH, APP } from "../values/ScreenName";


firebase.initializeApp(CONFIG);
class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // Listen for authentication state to change.
        // await firebase.auth().onAuthStateChanged((user) => {
        //     if (user != null) {
                
        //     } else {
                
        //     }
        //     console.log('user', user);
        // });
        const userUID = await AsyncStorage.getItem('userUID');
        this.props.navigation.navigate(userUID ? APP : AUTH);
    };

    render() {
        return (<View />);
    }
}

export default AuthLoadingScreen;