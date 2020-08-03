import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    
    switch(action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.some(el => el === action.payload))
                return state;
            else
                return state.concat(action.payload)
        
        case ActionTypes.POST_FAVORITE:
            return {...state, isLoading: true, errMess: null, dishes: []};

        default: 
            return state;
    }
};