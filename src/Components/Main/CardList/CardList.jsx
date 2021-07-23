import React from 'react'
import styles from './CardList.module.scss'
import Card from './Card'

const CardList = ({data}) => {
    return (
        <div className={styles.cardList}>
            {data.map((d) => {
                return <Card data={d}/>
})}
            
        </div>
    )
}

export default CardList
