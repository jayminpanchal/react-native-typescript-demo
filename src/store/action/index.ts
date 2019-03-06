import {SET_USER, LOGOUT} from '../actionType';

export const setUser = (payload: any) => ({
    type: SET_USER,
    payload,
});

export const logOut = () => ({
    type: LOGOUT,
});