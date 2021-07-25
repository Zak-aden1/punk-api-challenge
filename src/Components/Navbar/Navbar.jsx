import React from 'react'
import styles from './Navbar.module.scss'
import { useContext } from 'react'
import { SearchContext } from '../../App'
import { AcidFilter } from '../../App'

const Navbar = () => {

    const search = useContext(SearchContext)
    const acid = useContext(AcidFilter)
    console.log(acid);
    

    const filterSearch = (e) => {
        search.setSearchText(e.target.value)
    }


    return (
        <div className={styles.navGrid}>
            <h2>Filtered</h2>
            <form>
                <div className={styles.search}>
            <label >Search</label>
            <input  onChange={filterSearch} type="text"/>
                </div>
            
            <div className={styles.navWrapper}>

            <div>
            <label >High ABV: over 6%</label>
            <input type="checkbox"   />
            </div>

            <div>
            <label >Classic Range</label>
            <input type="checkbox" />
            </div>

            <label >Acidic: Less than 4</label>
            <input type="checkbox" onChange={(e) => acid.setAcidity(e.target.checked)} />
            </div>

            </form>
        </div>
    )
}

export default Navbar
