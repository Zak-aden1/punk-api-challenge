import React from 'react'
import styles from './Main.module.scss'
import CardList from './CardList'

const Main = ({data}) => {
    return (
            <CardList data={data}/>
    )
}

export default Main
