import { ADD_ORDER, DELETE_ORDER, EDIT_ORDER, SET_SELECTED_ORDER } from "../Constants/orders";

const initiateState = {
  orderList: [],
  selectedOrder: {},
  isEdit: false,
};

const orders = (state = initiateState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orderList: [...state.orderList, {
          orderId : Math.random().toString(36).replace('0.','ORDER_' || ''),
          ...action.payload,
        }],
      };

    case SET_SELECTED_ORDER:
      return {
        ...state,
        selectedOrder: action.payload,
        isEdit: true,
      };

    case EDIT_ORDER:{
      const updatedOrderd =
        state.orderList.map(
        (order) => {
          if(order.orderId === action.payload.orderId) {
            return action.payload
          } else {
            return order;
          }
        }
      );

      return {
        ...state,
        orderList: updatedOrderd,
        isEdit: false,
        selectedOrder: {},
      };
    }

    case DELETE_ORDER: {
      const updatedOrderd = state.orderList.filter(
        (order) => order.orderId !== action.payload
      );

      return {
        ...state,
        orderList: updatedOrderd,
      };
    }

    default:
      return state;
  }
};
export default orders;
