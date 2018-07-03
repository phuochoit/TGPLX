import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
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
        
        const user = firebase.auth();
        console.log('====================================');
        console.log('user', user);
        console.log('====================================');
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? APP : AUTH);
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default AuthLoadingScreen;