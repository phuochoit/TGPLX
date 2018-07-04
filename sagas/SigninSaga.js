import { FETCH_SIGNIN, FETCH_SIGNIN_FAILED, FETCH_SIGNIN_SUCCEEDED, LOGINSUCCEEDED, LOGOUTSUCCEEDED, FETCH_LOGOUT } from "../actions/ActionTypes";

import { put, takeLatest, call } from "redux-saga/effects";
import { loginWithFacebook, loginWithGoogle, logoutWithFirebase } from "./firebaseAPI/LoginApi";

function* fetchSigninSaga(action) {
    try {
        let user= null;
        if (action.action === 'Facebook') {
            user = yield call(loginWithFacebook);
        } else if (action.action === 'Google') {
            user = yield call(loginWithGoogle);
        }
        if (user != null){
            yield put({ type: LOGINSUCCEEDED });
        }
        yield put({ type: FETCH_SIGNIN_SUCCEEDED, result: user });

    } catch (error) {
        yield put({ type: FETCH_SIGNIN_FAILED, error });
    }
}

function* fetchLogoutSaga() {
    try {
        yield call(logoutWithFirebase);
        yield put({ type: LOGOUTSUCCEEDED });
    } catch (error) {
        console.log('fetchLogoutSaga', error);
    }
}

export function* watchFetchLogoutSaga() {
    yield takeLatest(FETCH_LOGOUT, fetchLogoutSaga);
}

export function* watchFetchSigninSaga() {
    yield takeLatest(FETCH_SIGNIN, fetchSigninSaga);
}