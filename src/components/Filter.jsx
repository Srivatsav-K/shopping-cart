import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------------
import Category from './Category'
//----------------------------------------------------------------------------------------
import { Paper, Stack } from '@mui/material'
//----------------------------------------------------------------------------------------


const Filter = (props) => {

    const {
        colors,
        handleColorChange,
        genders,
        handleGenderChange,
        prices,
        handlePriceChange,
        types,
        handleTypeChange,
        noPaper
    } = props

    return (

        (noPaper) ? (

            <Stack spacing={3} p={5}>

                <Category title='Color' data={colors} handleChange={handleColorChange} showColors />

                <Category title='Gender' data={genders} handleChange={handleGenderChange} />

                <Category title='Price' data={prices} handleChange={handlePriceChange} />

                <Category title='Type' data={types} handleChange={handleTypeChange} />

            </Stack>

        ) : (
            <Paper elevation={2}>
                <Stack spacing={3} p={6}>

                    <Category title='Color' data={colors} handleChange={handleColorChange} showColors />

                    <Category title='Gender' data={genders} handleChange={handleGenderChange} />

                    <Category title='Price' data={prices} handleChange={handlePriceChange} />

                    <Category title='Type' data={types} handleChange={handleTypeChange} />

                </Stack>
            </Paper >
        )
    )
}


Filter.propTypes = {
    colors: PropTypes.object,
    handleColorChange: PropTypes.func,
    genders: PropTypes.object,
    handleGenderChange: PropTypes.func,
    prices: PropTypes.object,
    handlePriceChange: PropTypes.func,
    types: PropTypes.object,
    handleTypeChange: PropTypes.func,
    noPaper: PropTypes.bool
}

export default Filter