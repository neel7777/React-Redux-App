import { FETCH_DATA, ADD_JOKES, SET_ERROR } from "../actions";


const initialState = {
    jokes: [],
    isFetchingData: false,
    error: ""
  };
  
  export const JokeReducer = (state=initialState, action) => {
      switch (action.type) {
        case FETCH_DATA:
              return{
                  ...state,
                  isFetchingData: true,
                  jokes: []
              }
        case ADD_JOKES:
            return{
                ...state,
                  isFetchingData: false,
                  jokes: action.payload

            }
        case SET_ERROR: 
            return {
            ...state,
            isFetchingData: false,
            error: action.payload
        }
        default: return state;
      }
      
  }