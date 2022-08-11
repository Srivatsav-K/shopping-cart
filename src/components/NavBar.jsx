import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//----------------------------------------------------------------------------------------
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//----------------------------------------------------------------------------------------

const NavBar = () => {
    const cartItems = useSelector((state) => state.cart.data)

    return (
        <AppBar>
            <Toolbar>
                <Box
                    display='flex'
                    sx={{ flexGrow: 1 }}
                >
                    <Typography variant='h6'>
                        TeeRex Store
                    </Typography>
                </Box>

                <Box>
                    <Button
                        component={Link}
                        to='/'
                        color='inherit'
                    >
                        Products
                    </Button>

                    <Tooltip
                        title='Cart'
                    >
                        <IconButton
                            color='inherit'
                            component={Link}
                            to='/cart'
                        >
                            <Badge badgeContent={cartItems.length} color='secondary'>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar