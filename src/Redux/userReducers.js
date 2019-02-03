import { REGISTER_USER } from "./constants";


export const user = (state={}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return action.payload
        default:
            return state;
    }
}