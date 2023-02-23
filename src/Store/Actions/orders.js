import { ADD_ORDER, DELETE_ORDER, EDIT_ORDER, SET_SELECTED_ORDER } from "../Constants/orders";

export const addOrders = (payload) => ({
    type: ADD_ORDER,
    payload,
});

export const setSelectedOrder = (payload) => ({
    type: SET_SELECTED_ORDER,
    payload,
});

export const editOrder = (payload) => ({
    type: EDIT_ORDER,
    payload,
});

export const deleteOrder = (payload) => ({
    type: DELETE_ORDER,
    payload,
});