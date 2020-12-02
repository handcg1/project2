import {Action} from './actions';

const initialState = {
    posts: [],
}

export function reducer(state = initialState, action){
    switch(action.type){
        case Action.LoadPosts:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
}