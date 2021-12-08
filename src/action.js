import { CHANGE_SEARCH_FIELD } from "./constants"; 
// good practice

export const setSearchField = (text)=>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})