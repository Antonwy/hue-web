import Axios from "axios";
import { api } from "../Constants";
import { REGISTER_USER, LOGIN_USER } from "./constants";

export const registerUser = (user, callback) => (dispatch) => {
    Axios.post(`${api}/users/register`, user)
        .then(res => {
            dispatch({type: REGISTER_USER, payload: res.data})
            callback()
        })
        .catch(err => {
            callback(err)
        })
}

export const loginUser = (user, callback) => (dispatch) => {
    Axios.post(`${api}/users/login`, user)
        .then(res => {
            dispatch({type: LOGIN_USER, payload: res.data})
            callback();
        })
        .catch(err => {
            callback(err)
        })
}