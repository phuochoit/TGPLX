import {all, fork  } from "redux-saga/effects";

// saga custom 
import { watchFetchSigninSaga } from "./SigninSaga";

export default function* RootSaga() {
    yield all([
        fork(watchFetchSigninSaga)
    ]);
}