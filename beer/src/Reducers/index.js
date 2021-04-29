import { FETCH_BREWERIES_FAILURE, FETCH_BREWERIES_START, FETCH_BREWERIES_SUCCESS } from "../Actions";

const initialState = {
    breweries: [],
    loading: false,
    error: ""
}

export const breweryReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BREWERIES_START:
            return {...state, loading: true};
        case FETCH_BREWERIES_SUCCESS:
            return {...state, 
                loading: false, 
                breweries: action.payload
            };
        case FETCH_BREWERIES_FAILURE:
            return {...state, 
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}