import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------------
import { decreaseItem, increaseItem, removeItem } from '../actions/cartActions'
//----------------------------------------------------------------------------------------
import { Button, Grid, TableCell, TableRow } from '@mui/material'
//----------------------------------------------------------------------------------------

const CartItem = (props) => {
    const { id, imageURL, name, serialNo, selectedQuantity, quantity, price } = props

    const dispatch = useDispatch()

    const handleIncreaseItem = () => {
        dispatch(increaseItem(id))
    }

    const handleDecreaseItem = () => {
        dispatch(decreaseItem(id))
    }

    const handleRemoveItem = () => {
        dispatch(removeItem(id))
    }

    return (
        <TableRow>
            <TableCell>
                {serialNo}
            </TableCell>

            <TableCell>
                <Grid container alignItems='center' spacing={2}>
                    <Grid item>
                        <img src={imageURL} alt={name} width='50vw' height='50vh' />
                    </Grid>
                    <Grid item>
                        {name}
                    </Grid>
                </Grid>
            </TableCell>

            <TableCell align='center'>
                <Button
                    size='small'
                    onClick={(selectedQuantity === 1) ? (handleRemoveItem) : (handleDecreaseItem)}
                >
                    -
                </Button>

                {selectedQuantity}

                <Button
                    size='small'
                    onClick={handleIncreaseItem}
                    disabled={selectedQuantity === quantity}
                >
                    +
                </Button>
            </TableCell>

            <TableCell align='center'>
                {price}
            </TableCell>

            <TableCell align='center'>
                {price * selectedQuantity}
            </TableCell>
        </TableRow>
    )
}


CartItem.propTypes = {
    id: PropTypes.number,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    serialNo: PropTypes.number,
    selectedQuantity: PropTypes.number,
    quantity: PropTypes.number,
    price: PropTypes.number,
}

export default CartItem