export const ADD_ITEM = 'ADD_ITEM'
export const INCREASE_ITEM = 'INCREASE_ITEM'
export const DECREASE_ITEM = 'DECREASE_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
//----------------------------------------------------------------------------------------
export const addItem = (data) => {
    return { type: ADD_ITEM, payload: data }
}

export const increaseItem = (id) => {
    return { type: INCREASE_ITEM, payload: id }
}

export const decreaseItem = (id) => {
    return { type: DECREASE_ITEM, payload: id }
}

export const removeItem = (id) => {
    return { type: REMOVE_ITEM, payload: id }
}