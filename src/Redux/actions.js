import {GET_LIGHTS, SET_CURRENT_LIGHT} from './constants';
import { url } from '../Constants';
import Axios from 'axios';



export const getLights = (id) => (dispatch) => {
    Axios.get(url)
        .then(res => {
            dispatch({type: SET_CURRENT_LIGHT, payload: {...res.data[1], id: 1}})
            dispatch({type: GET_LIGHTS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
        })
}

export const setCurrentLight = (light) => {
    return {
        type: SET_CURRENT_LIGHT,
        payload: light
    }
}

export const reloadAllItems = () => (dispatch) => {
    Axios.get(url)
    .then(res => {
        dispatch({type: GET_LIGHTS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
    })
}

export const reloadCurrentItem = (id) => (dispatch) => {
    Axios.get(url + '/' + id)
        .then(res => {
            dispatch({type: SET_CURRENT_LIGHT, payload: {...res.data, id: id}})
            dispatch(reloadAllItems());
        })
        .catch(err => {
            console.log(err);
        })
}

export const toggleLight = (id, onOff) => (dispatch) => {
    Axios.put(
        `${url}/${id}/state`,
        {on: onOff}
    )
    .then(res => {
        dispatch(reloadCurrentItem(id))
    })
    .catch(err => {
        console.log(err)
    })
}

export const setBrightness = (id, bri) => (dispatch) => {
    Axios.put(
        `${url}/${id}/state`,
        {bri: bri}
    )
    .then(res => {
        dispatch(reloadCurrentItem(id))
    })
}

export const setAlert = (id, alert) => (dispatch) => {
    Axios.put(
        `${url}/${id}/state`,
        {alert: alert ? 'lselect' : 'none'}
    )
    .then(res => {
        dispatch(reloadCurrentItem(id))
    })
}

export const setEffect = (id, effect) => (dispatch) => {
    Axios.put(
        `${url}/${id}/state`,
        {effect: effect ? 'colorloop' : 'none'}
    )
    .then(res => {
        dispatch(reloadCurrentItem(id))
    })
}