import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------------
import { addItem, decreaseItem, increaseItem, removeItem } from '../actions/cartActions'
//----------------------------------------------------------------------------------------
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from '@mui/material'
//----------------------------------------------------------------------------------------

const ProductItem = (props) => {
    const { id, imageURL, name, price, gender, quantity } = props

    const cartItems = useSelector((state) => state.cart.data)

    const findItem = useCallback(() => {
        if (cartItems.length > 0) {
            const result = cartItems.find((cartItem) => cartItem.id === id)
            return result
        } else {
            return undefined
        }
    }, [cartItems, id])

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        const data = {
            id,
            imageURL,
            name,
            price,
            quantity,
            selectedQuantity: 1
        }
        dispatch(addItem(data))
    }

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
        <Grid item width={250} height={300} >
            <Card>
                <CardHeader
                    subheader={`${name} (${gender[0]})`}
                />

                <CardMedia
                    component="img"
                    height='120px'
                    image={imageURL}
                    alt={name}
                />

                <CardContent>

                    <Stack
                        direction='row'
                        justifyContent='space-between'
                        justifyItems='center'
                    >
                        <Typography>
                            ₹ {price}
                        </Typography>

                        {
                            (findItem() && findItem().selectedQuantity > 0) ? (
                                <Box>
                                    <Button
                                        size='small'
                                        onClick={(findItem().selectedQuantity === 1) ? (handleRemoveItem) : (handleDecreaseItem)}
                                    >
                                        -
                                    </Button>

                                    {findItem().selectedQuantity}

                                    <Button
                                        size='small'
                                        onClick={handleIncreaseItem}
                                        disabled={findItem().selectedQuantity === quantity}
                                    >
                                        +
                                    </Button>
                                </Box>
                            ) : (
                                <Button
                                    size='small'
                                    variant='outlined'
                                    onClick={handleAddToCart}
                                >
                                    + Cart
                                </Button>
                            )
                        }

                    </Stack>

                </CardContent>
            </Card>
        </Grid>
    )
}

ProductItem.propTypes = {
    id: PropTypes.number,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    gender: PropTypes.string,
    quantity: PropTypes.number
}

export default ProductItem