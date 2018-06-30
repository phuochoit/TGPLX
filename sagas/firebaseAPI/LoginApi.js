import * as firebase from 'firebase';
import { AsyncStorage } from "react-native";
import { FACEBOOKID, GOOGLEID} from "../../values/Strings";

const config = {
    apiKey: "AIzaSyCgF42Pf5Znrz37OC4l_w5DPrlLUa_Pt9s",
    authDomain: "giay-phep-lai-xe-789c7.firebaseapp.com",
    databaseURL: "https://giay-phep-lai-xe-789c7.firebaseio.com",
    projectId: "giay-phep-lai-xe-789c7",
    storageBucket: "giay-phep-lai-xe-789c7.appspot.com",
    messagingSenderId: "980698177199"
};
firebase.initializeApp(config);

/**
 * login with facebook
 *
 * @export
 * @returns
 */
export function* loginWithFacebook(){
    let user = null;
    try {
        const { type, token } = yield Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOKID, {
            permissions: ['public_profile','email'],
        });
        if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            user = firebase.auth().signInWithCredential(credential);
            yield AsyncStorage.setItem('userToken', token);
        }
    } catch (error) {
        return { error: true };
    }

    return user;
}

export function* loginWithGoogle(){
    let user = null;
    try {
        const result = yield Expo.Google.logInAsync({
            androidClientId: GOOGLEID,
            // iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            token = result.accessToken;
            let credential = firebase.auth.GoogleAuthProvider.credential(null, token);
            user = firebase.auth().signInWithCredential(credential);
            yield AsyncStorage.setItem('userToken', token);
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        return { error: true };
    }
    return user;
} 

export function* logoutWithFirebase(){
    try {
        firebase.auth().signOut().then(function () {
            AsyncStorage.removeItem('userToken');
        });
    } catch (error) {
        console.log('logoutWithFirebase', error);
    }
    
}