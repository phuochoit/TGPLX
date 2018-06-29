import { FETCH_SIGNIN, FETCH_SIGNIN_FAILED,FETCH_SIGNIN_SUCCEEDED } from "./ActionTypes";

export function fetchSigninAction(){
    return {
        type: FETCH_SIGNIN
    }
}
function fetchSigninSuccessedAction(result) {
    return {
        type: FETCH_SIGNIN_SUCCEEDEDss,
        result
    }
}
function fetchSigninFailedAction(error) {
    return {
        type: FETCH_SIGNIN_FAILED,
        error
    }
}