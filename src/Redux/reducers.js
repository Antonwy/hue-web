import { GET_LIGHTS, SET_CURRENT_LIGHT } from "./constants";

export const lights = (state=[], action) => {
    switch (action.type) {
        case GET_LIGHTS:
            return toArray(action.payload)
        default:
            return state;
    }
}

export const currentLight = (state={}, action) => {
    if(action.type === SET_CURRENT_LIGHT) {
        return action.payload
    }else {
        return state
    }
}

const toArray = (data) => {
    let id = 1;
    const arr = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            arr.push({...data[key], id});
        }
        id++;
    }
    return arr;
}