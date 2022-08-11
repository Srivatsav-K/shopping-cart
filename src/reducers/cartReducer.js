import { ADD_ITEM, DECREASE_ITEM, INCREASE_ITEM, REMOVE_ITEM } from "../actions/cartActions"

const cartInitialValue = {
    data: [],
    errors: {}
}

const cartReducer = (state = cartInitialValue, action) => {
    switch (action.type) {
        case (ADD_ITEM): {
            return { ...state, data: [...state.data, { ...action.payload }] }
        }
        case (INCREASE_ITEM): {
            return {
                ...state,
                data: state.data.map((ele) => {
                    if (ele.id === action.payload) {
                        return { ...ele, selectedQuantity: ele.selectedQuantity + 1 }
                    } else {
                        return { ...ele }
                    }
                })
            }
        }
        case (DECREASE_ITEM): {
            return {
                ...state,
                data: state.data.map((ele) => {
                    if (ele.id === action.payload) {
                        return { ...ele, selectedQuantity: ele.selectedQuantity - 1 }
                    } else {
                        return { ...ele }
                    }
                })
            }
        }
        case (REMOVE_ITEM): {
            return {
                ...state,
                data: state.data.filter((ele) => {
                    return ele.id !== action.payload
                })
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default cartReducer
