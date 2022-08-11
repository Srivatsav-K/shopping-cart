import axios from 'axios'
//----------------------------------------------------------------------------------------
export const GET_PRODUCTS = 'GET_PRODUCTS'
//----------------------------------------------------------------------------------------
const getProducts = (data) => {
    return { type: GET_PRODUCTS, payload: data }
}
//----------------------------------------------------------------------------------------
export const startGetProducts = () => {
    return (
        (dispatch) => {
            axios.get('https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json')
                .then((response) => {
                    const result = response.data
                    if (result.errors) {
                        alert(result.errors.message)
                    } else {
                        dispatch(getProducts(result))
                    }
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}
