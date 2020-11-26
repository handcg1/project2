import {Action} from './actions';

const initialState = {
    images: [],
}

export function reducer(state = initialState, action){
    switch(action.type){
        case Action.LoadImages:
            return {
                ...state,
                images: action.payload,
            };
        default:
            return state;
    }
}