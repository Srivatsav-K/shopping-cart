import { useMemo } from "react"
import { useSelector } from "react-redux"
//----------------------------------------------------------------------------------------
import CartItem from "./CartItem"
//----------------------------------------------------------------------------------------
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
//----------------------------------------------------------------------------------------

const CartTable = () => {

    const cartItems = useSelector((state) => state.cart.data)

    const total = useMemo(() => {
        const result = cartItems.reduce((prev, current) => {
            return prev + current.selectedQuantity * current.price
        }, 0)
        return result
    }, [cartItems])

    return (
        <TableContainer component={Paper}>

            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: 'primary.light' }}>
                        <TableCell sx={{ color: 'white' }} align='left'>S.No</TableCell>
                        <TableCell sx={{ color: 'white' }}>Product</TableCell>
                        <TableCell sx={{ color: 'white' }} align='center'>Quantity</TableCell>
                        <TableCell sx={{ color: 'white' }} align='center'>Unit Price</TableCell>
                        <TableCell sx={{ color: 'white' }} align='center'>Amount</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {cartItems.map((item, id) => {
                        return <CartItem {...item} serialNo={id + 1} key={id} />
                    })}

                    <TableRow>
                        <TableCell rowSpan={1} colSpan={3} />
                        <TableCell align='center'>Total (₹)</TableCell>
                        <TableCell align='center'>{total}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default CartTable