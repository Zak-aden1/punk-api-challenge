import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../useFetch'
import styles from './BeerDetails.module.scss'
import { Link } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'
import Random from '../Random/Random'


const BeerDetails = () => {
    const {id} = useParams()
    const {ispending, error, data: beer} = useFetch('https://api.punkapi.com/v2/beers/' + id)
    console.log(beer);


    return (
        <div className={styles.beer}>
            {ispending && <div>loading....</div>}
            {error && <div>{error}</div>}

        
            { beer && <div>
                <h1>{beer[0].name}</h1>
                <img src={beer[0].image_url} alt="" />
                <Link to='/'>
                <button>Go Back</button>
                </Link>
            </div>} 
            {beer && <div className={styles.secondDescription}>
                <p><span>Description: </span>  {beer[0].description}</p>
                {/* <p>Ingredients: {beer.ingredients.yeast}</p> */}
                <p><span>First brewed:</span> {beer[0].first_brewed}</p>
                <p><span>Brewers Tips:</span> {beer[0].brewers_tips}</p>
                <h4>Can be paired with:</h4>
                </div>}

        </div>
    )
}

export default BeerDetails
