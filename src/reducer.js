import { CHANGE_SEARCH_FIELD } from "./constants"; 
import { action } from "./action"; 

const initialState = {
    searchField: ''
}

// reducer pure function input and output
export const searchStuff = (state=initialState, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
             return Object.assign({}, state, searchField:action.payload);

        default:
          return state;

    }
}