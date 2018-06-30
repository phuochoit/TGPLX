import { FETCH_SIGNIN, FETCH_SIGNIN_FAILED, FETCH_SIGNIN_SUCCEEDED } from "../actions/ActionTypes";

const initialState = {
    error: null,
    user: null,
    isLoggedIn: false,
    currentlySending: false
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SIGNIN:
            return { ...state, currentlySending: true }
        case FETCH_SIGNIN_SUCCEEDED:
            return { ...state, isLoggedIn: !true, currentlySending: false, user: action.result }
        case FETCH_SIGNIN_FAILED:
            return { ...state, error: action.error }
        default:
            return state;
    }

}

export default UserReducer;
