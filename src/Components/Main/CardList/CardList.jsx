import React from 'react'
import styles from './CardList.module.scss'
import Card from './Card'
import { useContext , useEffect, useState} from 'react'
import { SearchContext } from '../../../App'
import { AcidFilter } from '../../../App'
import { abvFilter } from '../../../App'

const CardList = ({data}) => {
    // const [filteredSearch, setFilteredSearch] = useState([])

    const search = useContext(SearchContext)
    const acid = useContext(AcidFilter)
    const abv = useContext(abvFilter)
    console.log(acid);

    // useEffect(() => {
    //     if (acid.acidity) {
    //           filteredSearch.filter((beer) => { return beer.ph < 4})
    //     }
    //     // console.log(acid.acidity);
    //     console.log(filteredSearch);
    // }, [filteredSearch])


    

    // useEffect(() => {
    //     setFilteredSearch(data.filter((beer) => {
    //     return beer.name.toLowerCase().includes(search.searchText.toLowerCase().trim())
    // }))
    // }, [data])


    let filteredSearch = data.filter((beer) => {
        if (acid.acidity) {
            // return beer.filter((beer) => { return beer.ph < 4})
            return beer.ph <= 4
        } 
        if (abv.abvCheck) {
            return beer.abv > 6
        }
        
        return beer.name.toLowerCase().includes(search.searchText.toLowerCase().trim())
    })

    return (
        <div className={styles.cardList}>
            {filteredSearch && filteredSearch.map((d) => {
                // if()
                return <Card data={d}/>
            })}
            
        </div>
    )
}

export default CardList
