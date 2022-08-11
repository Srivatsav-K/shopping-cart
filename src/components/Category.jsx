import PropTypes from 'prop-types'
//----------------------------------------------------------------------------------------
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material"
//----------------------------------------------------------------------------------------

const Category = (props) => {

    const { title, data, handleChange, showColors } = props

    return (
        <Box>
            <Typography variant='h6'>
                {title}
            </Typography>

            <FormGroup>
                {Object.keys(data).map((ele, i) => {
                    return (
                        <FormControlLabel
                            label={ele}
                            key={i}
                            control={
                                <Checkbox
                                    name={ele}
                                    checked={data[ele]}
                                    onChange={handleChange}
                                    sx={{ color: (showColors) ? ((ele === 'White') ? 'default' : ele) : 'default' }}
                                />
                            }
                        />
                    )
                })}
            </FormGroup>
        </Box>
    )
}


Category.propTypes = {
    title: PropTypes.string,
    data: PropTypes.object,
    handleChange: PropTypes.func,
    showColors: PropTypes.bool
}

export default Category