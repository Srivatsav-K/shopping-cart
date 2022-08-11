//import data from '../utils/catalogue.json'

import { GET_PRODUCTS } from "../actions/productActions"

const productsInitialValue = {
    data: [],
    errors: {}
}

const productsReducer = (state = productsInitialValue, action) => {
    switch (action.type) {
        case (GET_PRODUCTS): {
            return { ...state, data: [...action.payload] }
        }
        default: {
            return { ...state }
        }
    }
}

export default productsReducer
