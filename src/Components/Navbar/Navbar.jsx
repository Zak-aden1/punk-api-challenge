import React from 'react'
import styles from './Navbar.module.scss'
import { useContext } from 'react'
import { SearchContext } from '../../App'

const Navbar = () => {

    const search = useContext(SearchContext)
    

    const filterSearch = (e) => {
        search.setSearchText = e.target.value
        console.log(e.target.value);
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
            <label >High ABV</label>
            <input type="checkbox" />
            </div>

            <div>
            <label >Classic Range</label>
            <input type="checkbox" />
            </div>

            <label >Acidic ph -4</label>
            <input type="checkbox" />
            </div>

            </form>
        </div>
    )
}

export default Navbar
