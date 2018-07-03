import * as firebase from 'firebase';
import { AsyncStorage } from "react-native";
import { FACEBOOKID, GOOGLEID, CONFIG} from "../../values/Strings";

firebase.initializeApp(CONFIG);

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