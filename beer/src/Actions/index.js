import axios from "axios";

export const FETCH_BREWERIES_START = "FETCH_BREWERIES_START";
export const FETCH_BREWERIES_SUCCESS = "FETCH_BREWERIES_SUCCESS";
export const FETCH_BREWERIES_FAILURE = "FETCH_BREWERIES_FAILURE";

export const fetchBreweries = (city) => dispatch => {
    dispatch({type: FETCH_BREWERIES_START});
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`)
        .then(res => {
            console.log(res);
            dispatch({type:FETCH_BREWERIES_SUCCESS, payload: res.data})    
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_BREWERIES_FAILURE, payload: err})
        })
}