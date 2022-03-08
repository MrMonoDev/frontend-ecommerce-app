import * as constant from './constants';

export const cart = (state = [], action)=>{
    switch(action.type){
        case constant.ADD_CART:
            return [...state, 
                action.payload];
        case constant.REMOVE_CART:
            return state.filter(x=>x!=action.payload)
        default:
            return state
    }
} 