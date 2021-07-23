import React from 'react'
import styles from './CardList.module.scss'
import Card from './Card'
import { useContext } from 'react'
import { SearchContext } from '../../../App'

const CardList = ({data}) => {
    const searchContext = useContext(SearchContext)
    console.log(searchContext);
    return (
        <div className={styles.cardList}>
            {data.filter((name) => {
                name.includes(searchContext.searchText)
            })
            .map((d) => {
                return <Card data={d}/>
})} 
            
        </div>
    )
}

export default CardList
