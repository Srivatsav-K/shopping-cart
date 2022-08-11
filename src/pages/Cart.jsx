import { useSelector } from 'react-redux'
//----------------------------------------------------------------------------------------
import CartTable from "../components/CartTable"
//----------------------------------------------------------------------------------------
import { Grid, Typography } from '@mui/material'
//----------------------------------------------------------------------------------------

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.data)

    return (
        <Grid container direction='column' spacing={3} p={3} >

            <Grid item xs={12}>
                <Typography
                    variant='h4'
                >
                    Shopping Cart
                </Typography>
            </Grid>

            <Grid item container xs={12}>
                {(cartItems.length === 0) ? (
                    <Typography textAlign='center' color='error'>
                        Add Items to see cart
                    </Typography>
                ) :
                    (
                        <CartTable />
                    )}
            </Grid>

        </Grid>
    )
}

export default Cart