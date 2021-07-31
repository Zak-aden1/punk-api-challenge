import React from 'react'
import styles from './Navbar.module.scss'
import { useContext } from 'react'
import { SearchContext } from '../../App'
import { AcidFilter } from '../../App'
import { abvFilter } from '../../App'

import { Checkbox, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { FormGroup } from '@material-ui/core'
import { CheckBox } from '@material-ui/icons'
import FormLabel from '@material-ui/core/FormLabel';


    const useStyles = makeStyles({
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block',
        }
    })

const Navbar = () => {
    const classes = useStyles()

    const search = useContext(SearchContext)
    const acid = useContext(AcidFilter)
    const abv = useContext(abvFilter)
    console.log(abv);
    

    const filterSearch = (e) => {
        search.setSearchText(e.target.value)
    }


    return (
        <div className={styles.navGrid}>
            {/* <h2>Filtered</h2> */}
            <form className={styles.searchForm}>
            <Typography variant='h4' color='secondary'>Search & Filter</Typography>
                {/* <div className={styles.search}> */}
            {/* <input  onChange={filterSearch} type="text"/> */}
            <TextField 
            className={classes.field}
            onChange={filterSearch}
            label='Search'
            variant='outlined'
            color='secondary'
            fullWidth
            />
                {/* </div> */}
            <FormControl>
                <FormLabel color='secondary' component="legend">Extra Filters</FormLabel>
                <FormGroup >
                    <FormControlLabel 
                    label='High ABV: over 6%'
                    control={<Checkbox onChange={(e) => abv.setabvCheck(e.target.checked)}/>}
                    />
                    <FormControlLabel 
                    label='Acidic: Less than 4'
                    control={<Checkbox onChange={(e) => acid.setAcidity(e.target.checked)}/>}
                    />
                </FormGroup>
            </FormControl>
            
            {/* <div className={styles.navWrapper}>

            <div className={styles.checkbox}>
            <label >High ABV: over 6%</label>
            <input type="checkbox"  onChange={(e) => abv.setabvCheck(e.target.checked)} />
            </div>

            <div>
            <label >Classic Range</label>
            <input type="checkbox"  />
            </div>

            <label >Acidic: Less than 4</label>
            <input type="checkbox" onChange={(e) => acid.setAcidity(e.target.checked)} />
            </div> */}

            </form>
        </div>
    )
}

export default Navbar
