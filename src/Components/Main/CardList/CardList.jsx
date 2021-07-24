import React from 'react'
import styles from './CardList.module.scss'
import Card from './Card'
import { useContext } from 'react'
import { SearchContext } from '../../../App'
import { AcidFilter } from '../../../App'

const CardList = ({data}) => {
    const search = useContext(SearchContext)
    const acid = useContext(AcidFilter)
    console.log(acid);




    const filteredSearch = data.filter((beer) => {
        return beer.name.toLowerCase().includes(search.searchText.toLowerCase().trim())
    })

    return (
        <div className={styles.cardList}>
            {filteredSearch.map((d) => {
                // if()
                return <Card data={d}/>
            })}
            
        </div>
    )
}

export default CardList
