import { FETCH_SIGNIN, FETCH_SIGNIN_FAILED, FETCH_SIGNIN_SUCCEEDED } from "../actions/ActionTypes";

import { put, takeLatest, call } from "redux-saga/effects";
import { loginWithFacebook, loginWithGoogle } from "./firebaseAPI/LoginApi";

function* fetchSigninSaga(action) {
    try {
        if (action.action === 'Facebook') {
            user = yield call(loginWithFacebook);
        } else if (action.action === 'Google') {
            user = yield call(loginWithGoogle);
        }
        yield put({ type: FETCH_SIGNIN_SUCCEEDED, result: user});
    } catch (error) {
        yield put({ type: FETCH_SIGNIN_FAILED, error })
    }
}

export function* watchFetchSigninSaga() {
    yield takeLatest(FETCH_SIGNIN, fetchSigninSaga);
}