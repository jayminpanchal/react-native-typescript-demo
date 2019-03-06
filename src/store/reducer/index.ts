import {SET_USER, LOGOUT} from '../actionType';

const INITIAL_STATE = {
    user: null
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
        default:
            return {
                ...INITIAL_STATE
            }
    }
};