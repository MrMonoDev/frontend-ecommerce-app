import * as constant from './constants';

export const addToCart = item =>({
    type: constant.ADD_CART,
    payload: item
});
export const removeFromCart = item=>({
    type: constant.REMOVE_CART,
    payload: item
});