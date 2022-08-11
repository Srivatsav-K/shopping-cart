import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
//----------------------------------------------------------------------------------------
import ProductItem from '../components/ProductItem';
import Filter from '../components/Filter';
//----------------------------------------------------------------------------------------
import { Box, Grid, IconButton, InputAdornment, Menu, MenuItem, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
//----------------------------------------------------------------------------------------

const Products = () => {
    const products = useSelector((state) => {
        return state.products.data
    })

    const [search, setSearch] = useState('')
    const [colors, setColors] = useState({})
    const [types, setTypes] = useState({})
    const [genders, setGenders] = useState({
        Men: false,
        Women: false
    })
    const [prices, setPrices] = useState({
        'Rs.0-Rs.250': false,
        'Rs.250-Rs.450': false,
        'Rs.450 & above': false
    })
    const [anchorEle, setAnchorEle] = useState(null)
    const [open, setOpen] = useState(false)

    useMemo(() => {
        const colorsObj = {}
        const typesObj = {}

        products.forEach((product) => {
            if (!colorsObj.hasOwnProperty(product.color)) {
                colorsObj[product.color] = false
            }

            if (!typesObj.hasOwnProperty(product.type)) {
                typesObj[product.type] = false
            }
        })

        setColors(colorsObj)
        setTypes(typesObj)

    }, [products])


    const filteredProducts = useMemo(() => {
        return (
            products.filter((product) => {
                return (
                    product.name.toLowerCase().includes(search.toLowerCase()) ||
                    product.color.toLowerCase().includes(search.toLowerCase()) ||
                    product.type.toLowerCase().includes(search.toLowerCase())
                )
            }).filter((product) => {
                const selectedColors = Object.keys(colors).filter((color) => colors[color])
                if (selectedColors.length > 0) {
                    return (
                        selectedColors.includes(product.color)
                    )
                } else {
                    return true
                }
            }).filter((product) => {
                const selectedGenders = Object.keys(genders).filter((gender) => genders[gender])
                if (selectedGenders.length > 0) {
                    return selectedGenders.includes(product.gender)
                } else {
                    return true
                }
            }).filter((product) => {
                const selectedPrices = Object.keys(prices).filter((price) => prices[price])
                if (selectedPrices.length > 0) {
                    if (selectedPrices.includes('Rs.0-Rs.250') && selectedPrices.includes('Rs.250-Rs.450')) {
                        return product.price <= 450
                    } else if (selectedPrices.includes('Rs.250-Rs.450') && selectedPrices.includes('Rs.450 & above')) {
                        return product.price >= 250
                    } else if (selectedPrices.includes('Rs.0-Rs.250') && selectedPrices.includes('Rs.450 & above')) {
                        return (product.price >= 0 && product.price <= 250) || (product.price >= 450) //revisitttt
                    } else if (selectedPrices.includes('Rs.250-Rs.450')) {
                        return product.price >= 250 && product.price <= 450
                    } else if (selectedPrices.includes('Rs.0-Rs.250')) {
                        return product.price <= 250
                    } else {
                        return product.price >= 450
                    }
                } else {
                    return true
                }
            }).filter((product) => {
                const selectedTypes = Object.keys(types).filter((type) => types[type])
                if (selectedTypes.length > 0) {
                    return selectedTypes.includes(product.type)
                } else {
                    return true
                }
            })
        )
    }, [products, search, colors, genders, types, prices])

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleColorChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setColors(
            { ...colors, [name]: checked }
        )
    }

    const handleTypeChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setTypes(
            { ...types, [name]: checked }
        )
    }

    const handleGenderChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setGenders(
            { ...genders, [name]: checked }
        )
    }

    const handlePriceChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setPrices(
            { ...prices, [name]: checked }
        )
    }

    const handleClick = (e) => {
        setAnchorEle(e.target) //e.currentTarget
        setOpen(true)
    }

    const handleClose = (e) => {
        setAnchorEle(null) //e.currentTarget
        setOpen(false)
    }

    return (
        <Grid
            container
            spacing={4}
        >
            <Grid item container justifyContent='center'>
                <TextField
                    name='search'
                    value={search}
                    onChange={handleSearchChange}
                    placeholder='search for products...'
                    size='small'
                    sx={{ width: '70vw' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <Box
                    display={{ xs: 'block', lg: 'none' }}
                >
                    <IconButton
                        onClick={handleClick}
                    >
                        <FilterAltIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEle}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Filter
                                colors={colors}
                                handleColorChange={handleColorChange}
                                genders={genders}
                                handleGenderChange={handleGenderChange}
                                prices={prices}
                                handlePriceChange={handlePriceChange}
                                types={types}
                                handleTypeChange={handleTypeChange}
                                noPaper
                            />
                        </MenuItem>
                    </Menu>
                </Box>
            </Grid>

            <Grid item xs={0} lg={3}>
                <Box
                    display={{ xs: 'none', lg: 'block' }}
                    pl={3}
                >
                    <Filter
                        colors={colors}
                        handleColorChange={handleColorChange}
                        genders={genders}
                        handleGenderChange={handleGenderChange}
                        prices={prices}
                        handlePriceChange={handlePriceChange}
                        types={types}
                        handleTypeChange={handleTypeChange}
                    />
                </Box>
            </Grid>

            <Grid item container spacing={2}
                xs={12} lg={9}
                justifyContent={{ xs: 'center', lg: 'initial' }}
            >
                {(filteredProducts.length === 0) ? (
                    <Box p={3}>
                        <Typography textAlign='center' color='error'>
                            No results found
                        </Typography>
                    </Box>
                ) : (
                    filteredProducts.map((product) => {
                        return (
                            <ProductItem key={product.id} {...product} />
                        )
                    })
                )}
            </Grid>

        </Grid>
    )
}

export default Products