import { FETCH_SIGNUP, FETCH_SIGNUP_SUCCEEDED, FETCH_SIGNUP_FAILED } from "./ActionTypes";

export function fetchSignupAction(){
    return {
        type: FETCH_SIGNUP
    }
}
function fetchSignupSuccessedAction(result) {
    return {
        type: FETCH_SIGNUP_SUCCEEDED,
        result
    }
}
function fetchSignupFailedAction(error) {
    return {
        type: FETCH_SIGNUP_FAILED,
        error
    }
}