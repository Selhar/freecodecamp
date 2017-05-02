import axios from 'axios';

//Necessary headings for mashape's API, otherwise using axiom.get(url) on fetchquote()
//would have been enough
let httpRequest = axios.create({
  headers: {
      'X-Mashape-Key': 'C1ClHWkKf2mshdgqX3WHbrxy6xoLp14C6ApjsnYVc7QuPm9oyb', 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
});

export const actionTypes = {
    fetch_success: "FETCH_QUOTE_SUCCESS",
    fetch_failure: "FETCH_QUOTE_FAILURE"
}

export default function fetchQuote() {
    return function(dispatch) {
        httpRequest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous")
            .then((response) => {
                dispatch({type: actionTypes.fetch_success, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: actionTypes.fetch_failure, payload: error});
            });
    }
}